import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3 font-bold text-primary", className)}>
      <Image src="https://images.unsplash.com/photo-1559825481-12a05cc00344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxvY2VhbiUyMHxlbnwwfHx8fDE3NTgzNjA4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="logo" width={40} height={40} data-ai-hint="logo abstract" className="rounded-full" />
      {showText && (
        <div className="flex flex-col">
            <span className="text-2xl tracking-tight font-bold text-primary">SAMUDRA</span>
            <p className="text-xs font-normal text-foreground/70 tracking-wide">
                (Sustainable AI for Marine Unified Data & Research)
            </p>
        </div>
      )}
    </div>
  );
}
