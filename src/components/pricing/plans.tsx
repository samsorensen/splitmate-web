"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 380, damping: 28 },
  },
};

const perks = ["We can't charge you. We're not on the store yet.", "When we launch, we'll put real pricing here."];

export function Plans() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25"
    >
      <Badge variant="secondary" className="uppercase">
        Pricing
      </Badge>

      <motion.h1
        variants={fadeUp}
        className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl"
      >
        Free, because we haven&apos;t launched yet.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-muted-foreground mb-1 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-4"
      >
        SplitMate isn&apos;t on the App Store (yet), meaining it currently doesn&apos;t have a price, meaning it&apos;s
        free (for now).
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="border-border bg-card/80 text-card-foreground shadow-3xl relative w-full max-w-lg overflow-hidden rounded-2xl border px-6 py-8 backdrop-blur-sm"
      >
        <div
          aria-hidden
          className="bg-accent/6 pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full blur-2xl"
        />
        <div className="relative">
          <div className="mb-6">
            <span className="border-border bg-muted/60 text-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
              Not on the App Store yet
            </span>
          </div>

          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Today&apos;s price</p>
              <p className="mt-1 text-5xl font-medium tracking-tight sm:text-6xl">$0</p>
            </div>
            <p className="text-muted-foreground max-w-[14rem] text-sm leading-snug sm:text-right">
              When SplitMate launches, the price could go way up (Stripe doesn&apos;t do bargains).
            </p>
          </div>

          <ul className="border-border mt-8 space-y-3 border-t pt-6">
            {perks.map((line) => (
              <li key={line} className="text-foreground/90 flex gap-3 text-sm leading-snug">
                <span
                  className="bg-success/20 text-success mt-1.5 inline-block size-1.5 shrink-0 rounded-full"
                  aria-hidden
                />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
