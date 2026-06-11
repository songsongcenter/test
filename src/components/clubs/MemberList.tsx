import Avatar from "@/components/ui/Avatar";
import type { Member } from "@/types";

const ROLE_LABELS = {
  leader: "동아리장",
  "vice-leader": "부동아리장",
  member: "회원",
};

interface MemberListProps {
  members: Member[];
}

export default function MemberList({ members }: MemberListProps) {
  return (
    <div className="space-y-3">
      {members.map((member) => (
        <div key={member.id} className="flex items-center gap-3">
          <Avatar name={member.name} avatarUrl={member.avatarUrl} size="sm" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-brand-near-black">{member.name}</span>
              {member.role !== "member" && (
                <span className="text-xs px-1.5 py-0.5 rounded bg-brand-blue-light text-brand-blue font-medium">
                  {ROLE_LABELS[member.role]}
                </span>
              )}
            </div>
            <p className="text-xs text-brand-gray truncate">{member.department}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
