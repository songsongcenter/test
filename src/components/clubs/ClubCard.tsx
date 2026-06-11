import Image from "next/image";
import Link from "next/link";
import { ClubBadge } from "@/components/ui/Badge";
import type { Club } from "@/types";

interface ClubCardProps {
  club: Club;
}

export default function ClubCard({ club }: ClubCardProps) {
  return (
    <Link href={`/clubs/${club.id}`}>
      <article className="group bg-white rounded-xl overflow-hidden border border-brand-gray-light hover:border-brand-blue/30 transition-all duration-200 shadow-card hover:shadow-card-hover">
        <div className="relative h-48 overflow-hidden bg-brand-gray-light">
          <Image
            src={club.imageUrl}
            alt={club.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute top-3 left-3">
            <ClubBadge category={club.category} />
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-base text-brand-near-black group-hover:text-brand-blue transition-colors line-clamp-1">
            {club.name}
          </h3>
          <p className="mt-1.5 text-sm text-brand-gray-dark line-clamp-2 leading-relaxed">
            {club.description}
          </p>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-brand-blue font-semibold">
              회원 {club.memberCount}명
            </span>
            <span className="text-brand-gray">
              {club.foundedYear}년 창설
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
