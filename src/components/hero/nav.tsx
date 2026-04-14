import { MobileNav } from "@/components/hero/mobile-nav";
import { DesktopNav } from "@/components/hero/desktop-nav";

const navItems = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Features",
    href: "/#features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Tutorial",
    href: "/tutorial",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Legal",
    href: "/terms-and-conditions",
  },
];

export function Nav() {
  return (
    <>
      <MobileNav className="flex md:hidden" items={navItems} />
      <DesktopNav className="hidden md:flex" items={navItems} />
    </>
  );
}
