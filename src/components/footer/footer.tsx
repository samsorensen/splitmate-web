import { FooterBlur } from "@/components/footer/footer-blur";
import { LinkedInIcon } from "@/components/footer/icons";
import { members } from "@/components/team/members";
import Link from "next/link";

const links = [
  {
    title: "SplitMate",
    links: [
      {
        label: "Features",
        href: "/#features",
        title: "See our features",
      },
      {
        label: "Pricing",
        href: "/pricing",
        title: "View pricing",
      },
      {
        label: "Tutorial",
        href: "/tutorial",
        title: "Learn how to use SplitMate",
      },
      {
        label: "Team",
        href: "/team",
        title: "Meet the team",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
        title: "Read our Terms & Conditions",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        title: "Read our Privacy Policy",
      },
      {
        label: "Refund Policy",
        href: "/refund-policy",
        title: "Read our Refund Policy",
      },
    ],
  },
  {
    title: "Connect with Us",
    links: members.map((member) => ({
      label: (
        <div className="flex items-center gap-2">
          <LinkedInIcon className="h-4 w-4" />
          <span>{member.name}</span>
        </div>
      ),
      href: member.linkedin,
      title: `Connect with ${member.name} on LinkedIn`,
    })),
  },
];

export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-12 pt-37 md:py-25 md:pt-37">
      <FooterBlur />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 tracking-tight md:grid-cols-3">
        {links.map((link) => (
          <div key={link.title} className="mb-10 text-center">
            <h3 className="text-muted-foreground mb-8">{link.title}</h3>
            <ul className="flex flex-col items-center gap-8">
              {link.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    title={link.title}
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
