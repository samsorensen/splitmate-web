export type TutorialImage = { src: string; alt: string };

export type TutorialStep = {
  title: string;
  description: string;
  images: [TutorialImage] | [TutorialImage, TutorialImage];
};

export const steps: TutorialStep[] = [
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
    title: "Speak Your Expense",
    description:
      "Speak your expense out loud and SplitMate logs it for you—no typing required. Just confirm the details before it's added.",
 
    images: [
      { src: "/tutorial/voice-listening.png", alt: "Voice expense entry listening screen in SplitMate" },
      { src: "/tutorial/transcribing-audio.png", alt: "Live transcript of a spoken expense in SplitMate" },
    ],
  },
  {
    title: "Your Group",
    description:
      "One group for the people you actually split with. Share a QR code and roommates are in. No email invites, no friction.",
    images: [
      { src: "/tutorial/group-page.png", alt: "Group overview screen in SplitMate" },
      { src: "/tutorial/qr-code.png", alt: "Group invite QR code in SplitMate" },
    ],
  },
  {
    title: "Activity at a Glance",
    description:
      "All your expenses—organized in a simple, running list. See who paid, how much, and when at a glance.",
 
    images: [{ src: "/tutorial/expense-history.png", alt: "Expense history feed in SplitMate" }],
  },
  {
    title: "Every Split, Transparent",
    description:
      "Tap any expense to see the per-person math and who's covered. No \"trust me, it's $14.50\" energy.",
    images: [{ src: "/tutorial/expense-details.png", alt: "Detailed expense breakdown in SplitMate" }],
  },
  {
    title: "Settle Up",
    description:
      "Pay your share through Stripe in two taps. Balances zero out the moment the payment confirms. No chasing Venmo screenshots.",
    images: [
      { src: "/tutorial/stripe-review.png", alt: "Stripe payment review screen in SplitMate" },
      { src: "/tutorial/successful-payment-confirmation.png", alt: "Successful payment confirmation in SplitMate" },
    ],
  },
];
