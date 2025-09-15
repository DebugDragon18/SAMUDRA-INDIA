import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-foreground/60">
              A neutral, open-source, and not-for-profit platform for collaboration and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Platform
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Data</Link></li>
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Solutions</Link></li>
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Developers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-foreground/60 hover:text-foreground">About</Link></li>
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Contact</Link></li>
              <li><Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} AquaLens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
