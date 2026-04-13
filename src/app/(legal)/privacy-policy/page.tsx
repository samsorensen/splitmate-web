import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - SplitMate",
  description: "We collect everything. Just kidding.",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto mt-20 flex max-w-2xl flex-col items-center gap-8 px-4 text-center">
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">Privacy Policy</h1>

      <div className="flex flex-col gap-4">
        <p className="text-lg leading-relaxed">
          We collect <span className="font-semibold">every possible piece of data</span> about you. Your name, your
          location, your favorite cereal, how many times you hit snooze this morning, and your childhood pet&apos;s middle
          name.
        </p>

        <p className="text-muted-foreground text-base italic">
          Just joshin. We don&apos;t collect any of that, we haven&apos;t even launched yet. 
          When we do launch, we&apos;ll only collect the bare minimum needed to split your
          bills.
        </p>
      </div>
    </div>
  );
}
