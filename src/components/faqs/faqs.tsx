import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";

function AccordionItemFAQs(props: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      {...props}
      className={cn(
        "bg-secondary/30 data-[state=open]:bg-card data-[state=open]:border-border rounded-lg border border-transparent px-5 py-2 transition-colors data-[state=open]:shadow-sm lg:px-7",
        props.className,
      )}
    />
  );
}

function AccordionTriggerFAQs(props: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      {...props}
      className={cn("[&[data-state=open]>svg]:text-foreground text-base lg:text-lg", props.className)}
    />
  );
}

function AccordionContentFAQs(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} className={cn("text-muted-foreground lg:text-base", props.className)} />;
}

export function FAQs() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25">
      <div className="flex w-full flex-col gap-6">
        <Badge variant="secondary" className="mb-2 uppercase">
          FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          Frequently
          <br />
          Asked <span className="text-muted-foreground">Questions</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          Get answers to commonly asked questions.
        </p>
        <Button className="w-fit" size="lg" asChild>
          <Link href="/pricing">Get Started</Link>
        </Button>
      </div>
      <Accordion type="single" collapsible className="grid w-full gap-4">
        <AccordionItemFAQs value="branding">
          <AccordionTriggerFAQs>How do I add an expense in SplitMate?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              You can add expenses three ways: snap a receipt photo, speak it out loud, or enter it manually. SplitMate
              then organizes everything into a clear per-person breakdown.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="skills">
          <AccordionTriggerFAQs>Can SplitMate handle group trips and shared households?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Yes. SplitMate is built for friends, roommates, and travel crews, making it easy to track shared spending
              and keep everyone on the same page.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="devices">
          <AccordionTriggerFAQs>What makes SplitMate different from a simple split calculator?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              It does more than math. SplitMate uses AI-powered capture, supports real-time group collaboration, and
              gives one-tap settle-ups so splitting feels effortless from start to finish.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="notifcations">
          <AccordionTriggerFAQs>Is SplitMate available on iPhone?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Yes. SplitMate is built for iPhone with a clean, fast experience for capturing expenses and settling up.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
      </Accordion>
    </div>
  );
}
