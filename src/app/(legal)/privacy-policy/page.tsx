import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - SplitMate",
  description: "We collect everything. Just kidding.",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto mt-20 flex max-w-2xl flex-col items-center gap-8 px-4 text-center">
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
        Privacy Policy
      </h1>

      <div className="flex flex-col gap-4">
        <p className="text-lg leading-relaxed">
          We collect <span className="font-semibold">every possible piece of data</span> about
          you. Your name, your location, your favorite cereal, how many times you hit snooze
          this morning, your childhood pet&apos;s middle name, and that thing you Googled at
          2 AM that you thought no one would ever find out about.
        </p>

        <p className="text-muted-foreground text-base italic">
          Just kidding. We don&apos;t collect any of that. Seriously, we haven&apos;t even
          launched yet — we have literally zero data on you. When we do launch,
          we&apos;ll only collect the bare minimum needed to split your bills without
          losing track of who owes what. That&apos;s it. Your 2 AM searches are safe
          with us (mostly because we never had them).
        </p>
      </div>
    </div>
  );
}
