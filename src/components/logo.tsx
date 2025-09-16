import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2 font-bold text-primary", className)}>
      <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
        <Image src="https://storage.googleapis.com/aip-dev-images-public/console-user-images/user-43403310-8637-4f8a-9244-dfc5453d105b/f35136a7-02a8-4e00-9a64-0545050f2882.png" alt="logo" width={20} height={20} data-ai-hint="logo abstract" />
      </div>
      {showText && <span className="text-xl tracking-tight text-white">SAMUDRA</span>}
    </div>
  );
}
