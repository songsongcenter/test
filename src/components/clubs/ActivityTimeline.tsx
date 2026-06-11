import { formatKoreanDate } from "@/lib/utils";
import type { Activity } from "@/types";

interface ActivityTimelineProps {
  activities: Activity[];
}

export default function ActivityTimeline({ activities }: ActivityTimelineProps) {
  return (
    <div className="relative">
      {/* 세로 선 */}
      <div className="absolute left-3 top-2 bottom-0 w-0.5 bg-brand-gray-light" />

      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="relative flex gap-4 pl-10">
            {/* 점 */}
            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-brand-blue bg-white flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-brand-blue" />
            </div>

            <div className="flex-1">
              <p className="text-xs text-brand-gray mb-1">{formatKoreanDate(activity.date)}</p>
              <h4 className="font-semibold text-sm text-brand-near-black">{activity.title}</h4>
              <p className="text-sm text-brand-gray-dark mt-1 leading-relaxed">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
