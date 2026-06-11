import { cn } from "@/lib/utils";
import { CATEGORY_LABELS, POST_CATEGORY_LABELS } from "@/types";
import type { ClubCategory, PostCategory } from "@/types";

const CLUB_STYLES: Record<ClubCategory, string> = {
  sports: "bg-blue-100 text-blue-700",
  culture: "bg-purple-100 text-purple-700",
  hobby: "bg-green-100 text-green-700",
  volunteer: "bg-orange-100 text-orange-700",
  study: "bg-yellow-100 text-yellow-800",
  food: "bg-red-100 text-red-700",
};

const POST_STYLES: Record<PostCategory, string> = {
  notice: "bg-brand-blue text-white",
  event: "bg-brand-blue-light text-brand-blue font-semibold",
  general: "bg-brand-gray-light text-brand-gray-dark",
};

interface ClubBadgeProps {
  category: ClubCategory;
  className?: string;
}

interface PostBadgeProps {
  category: PostCategory;
  className?: string;
}

export function ClubBadge({ category, className }: ClubBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        CLUB_STYLES[category],
        className
      )}
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}

export function PostBadge({ category, className }: PostBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-2 py-0.5 text-xs font-medium",
        POST_STYLES[category],
        className
      )}
    >
      {POST_CATEGORY_LABELS[category]}
    </span>
  );
}
