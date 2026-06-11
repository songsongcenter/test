import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { formatShortDate } from "@/lib/utils";
import type { Event } from "@/types";

interface UpcomingEventsProps {
  events: Event[];
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <section className="py-16 container mx-auto max-w-6xl px-4">
      <SectionTitle subtitle="가까운 행사에 참여해 동료들과 즐거운 시간을 보내세요.">
        다가오는 행사
      </SectionTitle>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => {
          const date = new Date(event.date);
          const month = date.toLocaleDateString("ko-KR", { month: "short" });
          const day = date.getDate();
          const spotsLeft = event.maxParticipants - event.currentParticipants;
          const isFull = spotsLeft <= 0;

          return (
            <div
              key={event.id}
              className="flex gap-4 p-4 bg-white rounded-xl border border-brand-gray-light hover:border-brand-blue/30 transition-colors"
              style={{ boxShadow: "0 2px 8px rgba(5,106,166,0.06)" }}
            >
              {/* 날짜 블록 */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-brand-blue text-white text-center">
                <span className="text-xs font-medium opacity-80">{month}</span>
                <span className="text-xl font-bold leading-none">{day}</span>
              </div>

              {/* 내용 */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-brand-near-black line-clamp-2 leading-snug">
                  {event.title}
                </p>
                <p className="text-xs text-brand-gray mt-1">{event.clubName}</p>
                <p className="text-xs text-brand-gray mt-0.5 truncate">📍 {event.location}</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-brand-gray-light overflow-hidden">
                    <div
                      className={`h-full rounded-full ${isFull ? "bg-brand-gray" : "bg-brand-blue"}`}
                      style={{
                        width: `${Math.min(100, (event.currentParticipants / event.maxParticipants) * 100)}%`,
                      }}
                    />
                  </div>
                  <span className={`text-xs font-medium ${isFull ? "text-brand-gray" : "text-brand-blue"}`}>
                    {isFull ? "마감" : `${spotsLeft}자리 남음`}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
