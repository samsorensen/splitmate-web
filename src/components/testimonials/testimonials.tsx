import { Badge } from "@/components/ui/badge";
import { TestimonialMarquee } from "@/components/testimonials/testimonial-marquee";

export type Testimonial = {
  name: string;
  date: string;
  title: string;
  content: string;
  avatar?: string;
  rating: number;
};

const testimonials = [
  {
    name: "Oliver Liston",
    date: "May 4",
    title: "Roommate and student",
    content: `"SplitMate is the first app that actually covers the full loop. We scan the receipt, split it, and settle up right there. No awkward reminders."`,
    rating: 5,
  },
  {
    name: "Emily Thai",
    date: "May 4",
    title: "Lives with 3 roommates",
    content: `"The voice entry is unreal. I just say, 'I paid for groceries, split four ways,' and it's done. Way faster than typing everything out."`,
    rating: 5,
  },
  {
    name: "Sam Sorensen",
    date: "May 4",
    title: "Shared apartment renter",
    content: `"Balances are super clear, so nobody argues about who owes what anymore. It keeps things fair without turning money into a whole thing."`,
    rating: 5,
  },
  {
    name: "Elijah Watchalotone",
    date: "May 4",
    title: "Household organizer",
    content: `"The QR invite took us ten seconds. Everyone joined, everyone could see the same history, and we stopped using random notes and spreadsheets."`,
    rating: 5,
  },
  {
    name: "Mark Agnier",
    date: "May 4",
    title: "Roommate of 2 years",
    content: `"Splitwise tracked our expenses, but we still had to chase payments. SplitMate finally made settle-up as easy as tracking."`,
    rating: 5,
  },
] satisfies Testimonial[];

export function Testimonials() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-14 md:py-25">
      <Badge variant="secondary" className="mb-2 uppercase">
        Testimonial
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Don&apos;t Take<div className="text-muted-foreground">Our Word for It</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        We&apos;ve built the ultimate expense splitting app platform so you can focus on living together, not splitting hairs over money.
      </p>
      <div className="relative w-[calc(100%+3rem)] overflow-x-hidden py-4 lg:w-full">
        <TestimonialMarquee testimonials={testimonials} className="mb-4" />
        <TestimonialMarquee testimonials={testimonials} reverse />
      </div>
    </div>
  );
}
