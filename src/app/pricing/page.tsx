import { Footer } from "@/components/footer/footer";
import { Nav } from "@/components/hero/nav";
import { RadialBlur } from "@/components/pricing/radial-blur";
import { Plans } from "@/components/pricing/plans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - SplitMate",
  description: "SplitMate isn't on the App Store yet. Pricing is free for now and will be updated when we launch.",
};

export default function Pricing() {
  return (
    <div className="bg-card isolate flex h-full min-h-screen w-full flex-col">
      <RadialBlur />
      <div className="p-8">
        <Nav />
        <Plans />
      </div>
      <Footer />
    </div>
  );
}
