import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps {
  name: string;
  avatarUrl?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-lg",
};

export default function Avatar({ name, avatarUrl, size = "md", className }: AvatarProps) {
  const initials = name
    .split("")
    .slice(0, 2)
    .join("");

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-brand-blue text-white font-semibold overflow-hidden flex-shrink-0",
        sizes[size],
        className
      )}
    >
      {avatarUrl ? (
        <Image src={avatarUrl} alt={name} fill className="object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
