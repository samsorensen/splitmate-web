import { FAQs } from "@/components/faqs/faqs";
import { Footer } from "@/components/footer/footer";
import { Nav } from "@/components/hero/nav";
import { RadialBlur } from "@/components/pricing/radial-blur";
import { Tutorial } from "@/components/tutorial/tutorial";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutorial — SplitMate",
  description: "A quick walkthrough of how to use SplitMate to split expenses with friends.",
};

export default function TutorialPage() {
  return (
    <div className="bg-card isolate flex h-full min-h-screen w-full flex-col">
      <RadialBlur />
      <div className="p-8">
        <Nav />
        <Tutorial />
        <FAQs />
      </div>
      <Footer />
    </div>
  );
}
