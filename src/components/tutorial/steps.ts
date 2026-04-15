export type TutorialImage = { src: string; alt: string };

export type TutorialStep = {
  title: string;
  description: string;
  images: [TutorialImage] | [TutorialImage, TutorialImage];
};

export type TutorialSection = {
  title: string;
  description: string;
  steps: TutorialStep[];
};

export const sections: TutorialSection[] = [
  {
    title: "Create Expenses & View History",
    description: "Start by adding expenses your way, then review past activity in one simple running feed.",
    steps: [
      {
        title: "Scan a Receipt",
        description:
          "Snap the receipt and SplitMate reads every line item. Review the parsed total before it lands in your group. No typing, no missed taxes.",
        images: [
          { src: "/tutorial/receipt-scan.png", alt: "Receipt scanning screen in SplitMate" },
          { src: "/tutorial/review-scan.png", alt: "Reviewing a parsed receipt in SplitMate" },
        ],
      },
      {
        title: "Or Do a Voice Expense",
        description:
          "Prefer talking instead? Speak your expense out loud and SplitMate logs it for you with no typing required. Just confirm the details before it is added.",
        images: [
          { src: "/tutorial/voice-listening.png", alt: "Voice expense entry listening screen in SplitMate" },
          { src: "/tutorial/transcribing-audio.png", alt: "Live transcript of a spoken expense in SplitMate" },
        ],
      },
      {
        title: "Activity at a Glance",
        description:
          "All your expenses are organized in a simple, running list so you can quickly see who paid, how much, and when.",
        images: [{ src: "/tutorial/expense-history.png", alt: "Expense history feed in SplitMate" }],
      },
    ],
  },
  {
    title: "Create a Group & Group Functionality",
    description: "Invite your group, manage shared expenses, and keep every split easy to follow.",
    steps: [
      {
        title: "Create Your Group",
        description:
          "Set up one group for the people you actually split with. Share a QR code and roommates are in without email invites or extra friction.",
        images: [
          { src: "/tutorial/group-page.png", alt: "Group overview screen in SplitMate" },
          { src: "/tutorial/qr-code.png", alt: "Group invite QR code in SplitMate" },
        ],
      },
      {
        title: "See Group Expense Details",
        description:
          "Tap any expense to see the per-person math, who has paid, and what is still outstanding. Everyone stays on the same page.",
        images: [{ src: "/tutorial/expense-details.png", alt: "Detailed expense breakdown in SplitMate" }],
      },
    ],
  },
  {
    title: "Settle Up",
    description: "When it is time to close the loop, payments and balances update right away.",
    steps: [
      {
        title: "Pay Your Share",
        description:
          "Pay your share through Stripe in two taps. Balances zero out the moment the payment confirms, with no chasing Venmo screenshots.",
        images: [
          { src: "/tutorial/stripe-review.png", alt: "Stripe payment review screen in SplitMate" },
          { src: "/feature-screenshots/settle-breakdown.png", alt: "Successful payment confirmation in SplitMate" },
        ],
      },
    ],
  },
];
