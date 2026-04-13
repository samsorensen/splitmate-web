import type { TutorialStep } from "@/components/tutorial/steps";
import Image from "next/image";

type Props = {
  step: TutorialStep;
  index: number;
};

export function TutorialStepCard({ step, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col items-center gap-8 md:gap-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div className="flex w-full max-w-[320px] shrink-0 items-center justify-center">
        <Image
          src={step.image}
          alt={step.alt}
          width={320}
          height={468}
          className="h-auto w-full max-w-[320px] rounded-t-xl"
        />
      </div>
      <div className="flex flex-col gap-3 text-center md:text-left">
        <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">
          Step {index + 1}
        </span>
        <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{step.title}</h3>
        <p className="text-muted-foreground max-w-md leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}
