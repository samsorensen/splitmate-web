import { Badge } from "@/components/ui/badge";
import { sections } from "@/components/tutorial/steps";
import { TutorialStepCard } from "@/components/tutorial/tutorial-step-card";

export function Tutorial() {
  return (
    <div className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <Badge variant="secondary" className="uppercase">
        Tutorial
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        <span className="text-muted-foreground">How </span>
        SplitMate
        <span className="text-muted-foreground"> Works</span>
      </h2>
      <p className="text-muted-foreground mb-4 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Get started in a few simple steps, from capturing expenses to settling up with your group.
      </p>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 md:gap-24">
        {sections.map((section) => (
          <section key={section.title} className="border-border/60 bg-background/40 rounded-3xl border px-6 py-8 shadow-sm backdrop-blur-sm md:px-10 md:py-12">
            <div className="mb-10 flex max-w-2xl flex-col gap-3">
              <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{section.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{section.description}</p>
            </div>
            <div className="flex flex-col gap-16 md:gap-20">
              {section.steps.map((step, index) => (
                <TutorialStepCard key={step.title} step={step} index={index} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
