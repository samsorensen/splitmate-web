import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - SplitMate",
  description: "No refunds. Your money is ours. (We're kidding.)",
};

export default function RefundPolicy() {
  return (
    <div className="mx-auto mt-20 flex max-w-2xl flex-col items-center gap-8 px-4 text-center">
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">Refund Policy</h1>

      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold tracking-wide uppercase">
          NO REFUNDS! Your money is ours and all sales are final. We&apos;ve already spent it on snacks for the dev team.
        </p>

        <p className="text-muted-foreground text-base italic">
          We&apos;re just joking. You can&apos;t even give us money right now because we haven&apos;t launched yet.
          When we do, we&apos;ll have a perfectly reasonable refund policy like civilized people. But the snacks part is
          true.
        </p>
      </div>
    </div>
  );
}
