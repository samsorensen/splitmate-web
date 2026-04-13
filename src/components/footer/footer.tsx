import { FooterBlur } from "@/components/footer/footer-blur";
import { LinkedInIcon } from "@/components/footer/icons";
import { members } from "@/components/team/members";
import Link from "next/link";

const mainSections = [
  {
    title: "SplitMate",
    links: [
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
];

const connectLinks = members.map((member) => ({
  label: (
    <div className="inline-flex items-center justify-center gap-2.5">
      <LinkedInIcon className="h-3.5 w-3.5 shrink-0 fill-current text-[#0A66C2]" />
      <span className="leading-tight">{member.name}</span>
    </div>
  ),
  href: member.linkedin,
  title: `Connect with ${member.name} on LinkedIn`,
}));

export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-12 pt-37 md:py-25 md:pt-37">
      <FooterBlur />
      <div className="mx-auto w-full max-w-6xl px-6 tracking-tight">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 md:gap-8">
          {mainSections.map((section) => (
            <div key={section.title} className="text-center">
              <h3 className="text-muted-foreground mb-6 md:mb-8">{section.title}</h3>
              <ul className="flex flex-col items-center gap-6 md:gap-8">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} title={link.title}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 pt-1 text-center md:col-span-1 md:pt-0">
            <h3 className="text-muted-foreground mb-6 md:mb-8">Connect with Us</h3>
            <ul className="mx-auto flex max-w-xs flex-col items-center gap-6 md:max-w-none md:gap-8">
              {connectLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} title={link.title} target="_blank" className="inline-flex justify-center">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
