import { FeaturesCarousel } from "@/components/features/features-carousel";
import { FeaturesTabs } from "@/components/features/features-tabs";
import { Badge } from "@/components/ui/badge";
import { CameraIcon, MicIcon, UsersIcon, HandCoinsIcon } from "lucide-react";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

const features = [
  {
    icon: <CameraIcon size={20} />,
    title: "Scan Receipts in Seconds",
    description:
      "Snap a photo and SplitMate pulls out items, totals, and who paid—no manual entry needed.",
    image: "/feature-screenshots/receipt-scan.png",
    
  },
  {
    icon: <MicIcon size={20} />,
    title: "Log Expenses by Voice",
    description:
      "Just say what you spent and SplitMate turns it into a clean expense with the right split.",
    image: "/feature-screenshots/voice-listening.png",
  },
  {
    icon: <UsersIcon size={20} />,
    title: "Groups That Stay in Sync",
    description:
      "Create a group for roommates, trips, or events and keep every balance visible for everyone.",
    image: "/feature-screenshots/group.png",
  },
  {
    icon: <HandCoinsIcon size={20} />,
    title: "Clear Settle-Up Breakdowns",
    description:
      "See exactly who owes what before paying, with transparent per-person math.",
    image: "/feature-screenshots/settle-breakdown.png",
  },
] satisfies Feature[];

export function Features() {
  return (
    <div id="features" className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <Badge variant="secondary" className="uppercase">
        Features
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Discover our<div className="text-muted-foreground">exceptional features</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        SplitMate makes shared expenses feel effortless. Snap a receipt, add it manually, or speak it out loud, and we handle the math.
      </p>
      <FeaturesCarousel features={features} className="block lg:hidden" />
      <FeaturesTabs features={features} className="hidden lg:block" />
    </div>
  );
}
