import { Waves } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2 font-bold text-primary", className)}>
      <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
        <Waves className="h-5 w-5" />
      </div>
      {showText && <span className="text-xl tracking-tight text-white">SAMUDRA</span>}
    </div>
  );
}
