import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
};

export function DesktopNav({ items, className }: Props) {
  return (
    <nav className={cn("relative mx-auto flex w-full max-w-7xl items-center justify-center", className)}>
      <Link href="/" className="absolute left-0 block w-[126px]">
        <Image src="/logo-text.png" alt="logo" width={120} height={36} className="h-auto w-full" />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          {items.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink href={item.href}>{item.label}</NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button asChild className="absolute right-0">
        <Link href="/pricing">Get Started</Link>
      </Button>
    </nav>
  );
}
