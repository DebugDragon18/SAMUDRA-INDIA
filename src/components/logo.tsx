import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2 font-bold text-primary", className)}>
      <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
        <Image src="https://storage.googleapis.com/aip-dev-images-public/console-user-images/user-43403310-8637-4f8a-9244-dfc5453d105b/d3029f44-916c-487c-a43b-2f63f572a1cf.png" alt="logo" width={20} height={20} data-ai-hint="logo abstract" />
      </div>
      {showText && <span className="text-xl tracking-tight text-white">SAMUDRA</span>}
    </div>
  );
}
