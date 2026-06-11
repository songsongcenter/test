import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

export default function SectionTitle({ children, className, subtitle }: SectionTitleProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl font-bold text-brand-near-black">{children}</h2>
      <span className="mt-2 block h-1 w-12 rounded bg-brand-blue" />
      {subtitle && <p className="mt-3 text-brand-gray-dark">{subtitle}</p>}
    </div>
  );
}
