import HeroBanner from "@/components/home/HeroBanner";
import FeaturedClubs from "@/components/home/FeaturedClubs";
import LatestAnnouncements from "@/components/home/LatestAnnouncements";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import {
  getFeaturedClubs,
  getRecentPosts,
  getUpcomingEvents,
  getStats,
} from "@/lib/supabase/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [featuredClubs, recentPosts, upcomingEvents, stats] = await Promise.all([
    getFeaturedClubs(),
    getRecentPosts(5),
    getUpcomingEvents(6),
    getStats(),
  ]);

  return (
    <>
      <HeroBanner
        totalClubs={stats.totalClubs}
        totalMembers={stats.totalMembers}
        totalEvents={stats.totalEvents}
      />
      <FeaturedClubs clubs={featuredClubs} />
      <LatestAnnouncements posts={recentPosts} />
      <UpcomingEvents events={upcomingEvents} />
    </>
  );
}
