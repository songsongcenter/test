import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";
import type { Club, Post, Event } from "@/types";

function getSupabase() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}

type ClubViewRow = Database["public"]["Views"]["clubs_with_stats"]["Row"];
type ActivityRow = Database["public"]["Tables"]["activities"]["Row"];

function rowToClub(row: ClubViewRow): Club {
  return {
    id: row.id!,
    name: row.name!,
    category: row.category!,
    description: row.description!,
    longDescription: row.long_description ?? "",
    memberCount: row.member_count ?? 0,
    foundedYear: row.founded_year!,
    imageUrl: row.image_url ?? `https://picsum.photos/seed/${row.id}/600/400`,
    galleryImages: [],
    leader: {
      id: "leader",
      name: row.leader_name ?? "",
      department: row.leader_department ?? "",
      role: "leader",
      joinedAt: "",
    },
    members: [],
    activities: [],
    isFeatured: row.is_featured!,
    tags: row.tags ?? [],
  };
}

export async function getClubs(category?: string): Promise<Club[]> {
  const supabase = getSupabase();
  let query = supabase.from("clubs_with_stats").select("*");
  if (category && category !== "all") {
    query = query.eq("category", category as Database["public"]["Enums"]["club_category"]);
  }
  const { data } = await query.order("name");
  return (data ?? []).map(rowToClub);
}

export async function getFeaturedClubs(): Promise<Club[]> {
  const supabase = getSupabase();
  const { data } = await supabase
    .from("clubs_with_stats")
    .select("*")
    .eq("is_featured", true)
    .order("name");
  return (data ?? []).map(rowToClub);
}

export async function getClubById(id: string): Promise<Club | null> {
  const supabase = getSupabase();
  const [clubRes, activitiesRes, imagesRes] = await Promise.all([
    supabase.from("clubs_with_stats").select("*").eq("id", id).single(),
    supabase
      .from("activities")
      .select("*")
      .eq("club_id", id)
      .order("activity_date", { ascending: false }),
    supabase
      .from("club_images")
      .select("*")
      .eq("club_id", id)
      .order("sort_order"),
  ]);

  if (!clubRes.data) return null;

  const club = rowToClub(clubRes.data);

  club.activities = (activitiesRes.data ?? []).map((a: ActivityRow) => ({
    id: a.id,
    title: a.title,
    date: a.activity_date,
    description: a.description ?? "",
    imageUrl: a.image_url ?? undefined,
  }));

  club.galleryImages = (imagesRes.data ?? []).map((img) => img.image_url);

  return club;
}

export async function getAllClubIds(): Promise<string[]> {
  const supabase = getSupabase();
  const { data } = await supabase.from("clubs").select("id");
  return (data ?? []).map((c) => c.id);
}

type PostRow = Database["public"]["Tables"]["posts"]["Row"];

function rowToPost(row: PostRow): Post {
  return {
    id: row.id,
    title: row.title,
    category: row.category,
    author: row.author_name,
    department: row.author_department ?? "",
    createdAt: row.created_at,
    views: row.views,
    isPinned: row.is_pinned,
    excerpt: row.excerpt ?? "",
    clubId: row.club_id ?? undefined,
  };
}

export async function getPosts(): Promise<Post[]> {
  const supabase = getSupabase();
  const { data } = await supabase
    .from("posts")
    .select("*")
    .order("is_pinned", { ascending: false })
    .order("created_at", { ascending: false });
  return (data ?? []).map(rowToPost);
}

export async function getRecentPosts(count = 5): Promise<Post[]> {
  const posts = await getPosts();
  return posts.slice(0, count);
}

type EventRow = Database["public"]["Tables"]["events"]["Row"] & {
  clubs?: { name: string } | null;
};

function rowToEvent(row: EventRow): Event {
  return {
    id: row.id,
    title: row.title,
    clubId: row.club_id,
    clubName: row.clubs?.name ?? "",
    date: row.event_date,
    location: row.location ?? "",
    description: row.description ?? "",
    maxParticipants: row.max_participants ?? 0,
    currentParticipants: 0,
  };
}

export async function getUpcomingEvents(count = 6): Promise<Event[]> {
  const supabase = getSupabase();
  const today = new Date().toISOString().split("T")[0];
  const { data } = await supabase
    .from("events")
    .select("*, clubs(name)")
    .gte("event_date", today)
    .order("event_date", { ascending: true })
    .limit(count);
  return (data ?? []).map((row) => rowToEvent(row as EventRow));
}

export async function getStats() {
  const supabase = getSupabase();
  const [clubsRes, memberSumRes, eventsRes] = await Promise.all([
    supabase.from("clubs").select("*", { count: "exact", head: true }),
    supabase.from("clubs").select("member_count"),
    supabase.from("events").select("*", { count: "exact", head: true }),
  ]);

  const totalMembers = (memberSumRes.data ?? []).reduce(
    (sum, c) => sum + (c.member_count ?? 0),
    0
  );

  return {
    totalClubs: clubsRes.count ?? 0,
    totalMembers,
    totalEvents: eventsRes.count ?? 0,
  };
}
