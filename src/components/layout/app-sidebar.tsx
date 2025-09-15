import Link from 'next/link';
import {
  Home,
  Database,
  FileBarChart2,
  Map,
  Users,
  Settings,
  LifeBuoy,
  BadgeInfo,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Logo } from '@/components/logo';

const navItems = [
    { href: "#", icon: Home, label: "Dashboard" },
    { href: "#", icon: Database, label: "Datasets" },
    { href: "#", icon: FileBarChart2, label: "Reports" },
    { href: "#", icon: Map, label: "Maps" },
    { href: "#", icon: Users, label: "Collaboration" },
];

export function AppSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-card sm:flex">
        <TooltipProvider>
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                href="#"
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                <Logo />
                <span className="sr-only">AquaLens</span>
                </Link>
                {navItems.map(item => (
                    <Tooltip key={item.label}>
                        <TooltipTrigger asChild>
                        <Link
                            href={item.href}
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <item.icon className="h-5 w-5" />
                            <span className="sr-only">{item.label}</span>
                        </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">{item.label}</TooltipContent>
                    </Tooltip>
                ))}
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    >
                        <LifeBuoy className="h-5 w-5" />
                        <span className="sr-only">Help</span>
                    </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Help</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    >
                        <Settings className="h-5 w-5" />
                        <span className="sr-only">Settings</span>
                    </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Settings</TooltipContent>
                </Tooltip>
            </nav>
        </TooltipProvider>
    </aside>
  );
}
