export type TutorialStep = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const steps: TutorialStep[] = [
  {
    title: "Scan a Receipt",
    description:
      "Snap a photo of any receipt and SplitMate instantly reads it, pulling out each line item so you don't have to type a thing.",
    image: "/feature-screenshots/receipt-scan.png",
    alt: "Receipt scanning screen in SplitMate",
  },
  {
    title: "Speak Your Expense",
    description:
      "Say it out loud — tell SplitMate what you spent and it captures the details hands-free, perfect for on-the-go moments.",
    image: "/feature-screenshots/voice-listening.png",
    alt: "Voice expense entry screen in SplitMate",
  },
  {
    title: "Manage Your Group",
    description:
      "Create a group, invite friends or roommates, and keep all shared expenses organized in one place.",
    image: "/feature-screenshots/group.png",
    alt: "Group management screen in SplitMate",
  },
  {
    title: "Settle Up",
    description:
      "See exactly who owes what with a clear breakdown, then settle up with a single tap — no awkward math required.",
    image: "/feature-screenshots/settle-breakdown.png",
    alt: "Settle-up breakdown screen in SplitMate",
  },
];
