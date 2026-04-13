import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - SplitMate",
  description: "Terms and Conditions",
};

export default function TermsAndConditions() {
  return (
    <main className="mx-auto mt-20 max-w-3xl px-6 pb-16">
      <h1 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">Terms and Conditions</h1>

      <div className="mt-10 space-y-6 text-sm leading-7 text-muted-foreground sm:text-base">
        <p>
          By using SplitMate, you agree to use it responsibly, follow applicable laws, and 
          resist the urge to expense your entire fridge to your roommates. The app hasn&apos;t 
          officially launched yet, so technically we are not responsible for anything, which is a 
          legal position we intend to enjoy for as long as possible. We may update these terms 
          over time, and continued use means you accept the latest version.
        </p>
      </div>
    </main>
  );
}
