import { Footer } from "@/components/footer/footer";
import { Nav } from "@/components/hero/nav";
import { RadialBlur } from "@/components/pricing/radial-blur";
import { Team } from "@/components/team/team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team — SplitMate",
  description: "The people building SplitMate.",
};

export default function TeamPage() {
  return (
    <div className="bg-card isolate flex h-full min-h-screen w-full flex-col">
      <RadialBlur />
      <div className="p-8">
        <Nav />
        <Team />
      </div>
      <Footer />
    </div>
  );
}
