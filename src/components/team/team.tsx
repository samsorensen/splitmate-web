"use client";

import { useState, type KeyboardEvent } from "react";
import { AnimatePresence } from "motion/react";
import { members } from "@/components/team/members";
import { TeamFeatured, TeamThumbnail } from "@/components/team/team-card";
import { Badge } from "@/components/ui/badge";

export function Team() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setSelectedIndex((i) => (i + 1) % members.length);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      setSelectedIndex((i) => (i - 1 + members.length) % members.length);
    }
  };

  const selected = members[selectedIndex];

  return (
    <div className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <Badge variant="secondary" className="uppercase">
        Team
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        The team behind SplitMate
      </h2>
      <p className="text-muted-foreground mb-1 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-4">
        We are a hardworking, passionate team building the fastest way to split expenses with confidence.
      </p>

      <div
        role="tablist"
        aria-label="Team members"
        onKeyDown={handleKeyDown}
        className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-4"
      >
        {members.map((member, index) => (
          <TeamThumbnail
            key={member.name}
            member={member}
            selected={index === selectedIndex}
            onSelect={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      <div aria-live="polite" className="mx-auto w-full max-w-5xl">
        <AnimatePresence mode="wait">
          <TeamFeatured key={selected.name} member={selected} />
        </AnimatePresence>
      </div>
    </div>
  );
}
