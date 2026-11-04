import { ChevronDown } from "lucide-react";
import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function NativeSelect({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className={cn("relative w-full min-w-0", className)}>
      <select {...props} className="h-12 w-full min-w-0 cursor-pointer appearance-none rounded-md border border-primary/30 bg-card py-2 pr-3 pl-9 text-sm font-bold text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring">
        {children}
      </select>
      <ChevronDown aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}