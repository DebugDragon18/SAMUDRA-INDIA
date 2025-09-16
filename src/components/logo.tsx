import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3 font-bold text-primary", className)}>
      <Image src="https://storage.googleapis.com/aip-dev-images-public/console-user-images/user-43403310-8637-4f8a-9244-dfc5453d105b/61f22143-4b69-4e4b-84a1-026f39e55132.png" alt="logo" width={40} height={40} data-ai-hint="logo abstract" />
      {showText && (
        <div className="flex flex-col">
            <span className="text-2xl tracking-tight font-bold text-primary">SAMUDRA</span>
            <p className="text-xs font-normal text-foreground/70 tracking-wide">
                (Sustainable AI for Marine Unified Data, Research & Analytics)
            </p>
        </div>
      )}
    </div>
  );
}
