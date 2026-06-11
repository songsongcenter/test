export type ClubCategory =
  | "sports"
  | "culture"
  | "hobby"
  | "volunteer"
  | "study"
  | "food";

export const CATEGORY_LABELS: Record<ClubCategory, string> = {
  sports: "스포츠",
  culture: "문화/예술",
  hobby: "취미",
  volunteer: "봉사",
  study: "학습",
  food: "음식/맛집",
};

export interface Member {
  id: string;
  name: string;
  department: string;
  role: "leader" | "vice-leader" | "member";
  avatarUrl?: string;
  joinedAt: string;
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
}

export interface Club {
  id: string;
  name: string;
  category: ClubCategory;
  description: string;
  longDescription: string;
  memberCount: number;
  foundedYear: number;
  imageUrl: string;
  galleryImages: string[];
  leader: Member;
  members: Member[];
  activities: Activity[];
  isFeatured: boolean;
  tags: string[];
}

export type PostCategory = "notice" | "event" | "general";

export const POST_CATEGORY_LABELS: Record<PostCategory, string> = {
  notice: "공지",
  event: "행사",
  general: "일반",
};

export interface Post {
  id: string;
  title: string;
  category: PostCategory;
  author: string;
  department: string;
  createdAt: string;
  views: number;
  isPinned: boolean;
  excerpt: string;
  clubId?: string;
}

export interface Event {
  id: string;
  title: string;
  clubId: string;
  clubName: string;
  date: string;
  location: string;
  description: string;
  maxParticipants: number;
  currentParticipants: number;
}
