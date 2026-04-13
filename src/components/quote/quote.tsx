import React from "react";

export function Quote() {
  return (
    <figure className="mx-auto flex max-w-3xl flex-col items-center px-4 py-12 text-center">
      <blockquote className="text-3xl leading-[1.1] font-medium tracking-tighter text-balance md:text-5xl md:text-wrap">
        <span className="text-muted-foreground/50">&quot;As we shipped each feature, we saw firsthand </span>
        <span>how much simpler</span>
        <span className="text-muted-foreground/50"> group expenses could be.&quot;</span>
      </blockquote>
      <figcaption className="mt-10">
        <span className="block font-semibold tracking-tight md:text-xl">Emily Thai</span>
        <span className="text-muted-foreground mt-1 block text-xs tracking-tighter md:text-xl">
          VP of Engineering · SplitMate Inc
        </span>
      </figcaption>
    </figure>
  );
}
