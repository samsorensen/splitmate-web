"use client";

import type { TeamMember } from "@/components/team/members";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GithubIcon, LinkedInIcon } from "@/components/footer/icons";
import { MailIcon } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type ThumbnailProps = {
  member: TeamMember;
  selected: boolean;
  onSelect: () => void;
};

export function TeamThumbnail({ member, selected, onSelect }: ThumbnailProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "group flex flex-col items-center gap-2 rounded-xl p-3 text-center transition-all",
        "focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        selected ? "bg-card shadow-sm" : "hover:bg-card/60",
      )}
    >
      <Avatar
        className={cn(
          "size-16 transition-all md:size-20",
          selected
            ? "ring-primary ring-offset-background scale-105 ring-2 ring-offset-2"
            : "opacity-80 group-hover:opacity-100",
        )}
      >
        <AvatarImage src={member.image} alt={`${member.name} profile photo`} />
        <AvatarFallback className="bg-accent/15 text-accent text-base font-medium">
          {getInitials(member.name)}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span
          className={cn("text-sm font-medium tracking-tight", selected ? "text-foreground" : "text-muted-foreground")}
        >
          {member.name}
        </span>
        <span className="text-muted-foreground text-xs">{member.role}</span>
      </div>
    </button>
  );
}

type FeaturedProps = {
  member: TeamMember;
};

export function TeamFeatured({ member }: FeaturedProps) {
  return (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-card flex w-full flex-col gap-8 rounded-2xl border p-8 shadow-sm md:flex-row md:p-10"
    >
      <div className="flex flex-col items-center gap-4 text-center md:w-80 md:shrink-0 md:items-start md:text-left">
        <Avatar className="size-72 rounded-2xl md:size-80">
          <AvatarImage src={member.image} alt={`${member.name} profile photo`} className="rounded-2xl object-cover" />
          <AvatarFallback className="bg-accent/15 text-accent rounded-2xl text-4xl font-medium">
            {getInitials(member.name)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-medium tracking-tight">{member.name}</h3>
          <p className="text-muted-foreground text-sm">{member.role}</p>
          <p className="text-muted-foreground text-xs italic">{member.education}</p>
        </div>
        <div className="text-muted-foreground flex items-center gap-3">
          <a
            href={member.github}
            target="_blank"
            rel="noreferrer"
            title={`${member.name} on GitHub`}
            className="hover:text-foreground text-black transition-colors dark:text-white"
          >
            <GithubIcon className="h-4 w-4 fill-current" />
          </a>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            title={`${member.name} on LinkedIn`}
            className="hover:text-foreground text-[#0A66C2] transition-colors"
          >
            <LinkedInIcon className="h-4 w-4 fill-current" />
          </a>
          <a
            href={`mailto:${member.email}`}
            target="_blank"
            rel="noreferrer"
            title={`Email ${member.name}`}
            className="hover:text-foreground text-red-500 transition-colors"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-muted-foreground max-w-prose text-base leading-relaxed">{member.bio}</p>
      </div>
    </motion.div>
  );
}
