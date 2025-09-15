import Image from "next/image";
import Link from 'next/link';
import {
  CircleUser,
  Menu,
  Home,
  Database,
  FileBarChart2,
  Map,
  Users,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
    { href: "#", icon: Home, label: "Dashboard" },
    { href: "#", icon: Database, label: "Datasets" },
    { href: "#", icon: FileBarChart2, label: "Reports" },
    { href: "#", icon: Map, label: "Maps" },
    { href: "#", icon: Users, label: "Collaboration" },
];

export function AppHeader() {
  const userAvatar = PlaceHolderImages.find(img => img.id === 'user-avatar');

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="mb-4"
            >
              <Logo />
            </Link>
            {navItems.map(item => (
                <Link
                    key={item.label}
                    href={item.href}
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        {/* Can add breadcrumbs or search here */}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <Avatar>
                {userAvatar && <AvatarImage src={userAvatar.imageUrl} alt="User avatar" data-ai-hint={userAvatar.imageHint} />}
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
