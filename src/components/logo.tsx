import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2 font-bold text-primary", className)}>
      <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
        <Image src="https://picsum.photos/seed/logo/24/24" alt="logo" width={20} height={20} data-ai-hint="logo abstract" />
      </div>
      {showText && <span className="text-xl tracking-tight text-white">SAMUDRA</span>}
    </div>
  );
}
