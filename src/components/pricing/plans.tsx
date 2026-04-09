import Link from "next/link";

export function Plans() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center">
      <h1 className="mt-8 mb-4 text-3xl font-bold md:text-center md:text-4xl">
        Simple, fair pricing.
      </h1>
      <p className="text-muted-foreground mb-8 text-center text-lg">Coming soon.</p>
      <div className="text-muted-foreground flex justify-center gap-8 text-sm underline">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
        <Link href="/refund-policy">Refund Policy</Link>
      </div>
    </div>
  );
}
