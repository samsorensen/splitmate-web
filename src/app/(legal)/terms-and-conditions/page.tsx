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
          By using SplitMate, you agree to use it responsibly and follow applicable laws. The service is provided as-is,
          and billing is handled by our payment provider under their terms. We may update these terms over time, and
          continued use means you accept the latest version.
        </p>
      </div>
    </main>
  );
}
