import { Badge } from "@/components/ui/badge";
import {
  AzureLogo,
  ExpoLogo,
  NodeLogo,
  OpenAILogo,
  ReactNativeLogo,
  StripeLogo,
  SupabaseLogo,
} from "@/components/about/tech-logos";

type TechItem = {
  name: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
};

const techStack: TechItem[] = [
  { name: "React Native", Icon: ReactNativeLogo },
  { name: "Expo", Icon: ExpoLogo },
  { name: "Node.js", Icon: NodeLogo },
  { name: "Supabase", Icon: SupabaseLogo },
  { name: "Azure", Icon: AzureLogo },
  { name: "OpenAI", Icon: OpenAILogo },
  { name: "Stripe", Icon: StripeLogo },
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25"
    >
      <Badge variant="secondary" className="uppercase">
        About
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Built to eliminate
        <div className="text-muted-foreground">the awkward money math</div>
      </h2>
      <p className="max-w-2xl text-center leading-7 tracking-tight sm:text-lg">
        SplitMate is an iOS app built for roomates and friends who share costs regularly. Instead of
        logging every purchase by hand, you capture expenses the way that feels natural: point your camera at a receipt,
        or just describe the charge out loud. SplitMate handles the parsing, the math, and the settlement so the
        conversation never has to be about money.
      </p>

      <div className="mt-4 grid w-full max-w-4xl gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-3">
          <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">The Problem</span>
          <p className="text-base leading-7 tracking-tight">
            Splitting expenses is tedious. Existing apps require manual data entry, careful math, and constant
            back-and-forth to settle debts. People forget to log expenses, enter them incorrectly, or stop bothering
            altogether. The result is vague IOUs, growing awkwardness, and friendships strained over small amounts that
            were never worth fighting about in the first place.
          </p>
        </div>
        <div className="flex flex-col gap-3 border-t border-border/60 pt-8 md:border-t-0 md:pt-0">
          <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">The Solution</span>
          <p className="text-base leading-7 tracking-tight">
            SplitMate removes friction at every step. Scan any receipt and Azure OCR pulls out the line items and
            totals automatically. Describe an expense out loud and Whisper transcribes it while GPT-4o parses it into a
            structured entry. Balances are split across group members with per-person breakdowns, and when it&rsquo;s
            time to square up, Stripe Connect moves real money rather than tracking IOUs.
          </p>
        </div>
      </div>

      <div className="mt-10 flex w-full flex-col items-center gap-5">
        <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">Powered by</span>
        <ul className="flex flex-wrap items-end justify-center gap-x-8 gap-y-6 md:gap-x-12">
          {techStack.map(({ name, Icon }) => (
            <li key={name} className="flex flex-col items-center gap-2">
              <Icon className="h-7 w-7 fill-current text-foreground" />
              <span className="text-muted-foreground text-xs">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
