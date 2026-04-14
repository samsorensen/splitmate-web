import type { TutorialStep } from "@/components/tutorial/steps";
import Image from "next/image";

type Props = {
  step: TutorialStep;
  index: number;
};

export function TutorialStepCard({ step, index }: Props) {
  const isEven = index % 2 === 0;
  const isDual = step.images.length === 2;

  return (
    <div className={`flex flex-col items-center gap-8 md:gap-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {isDual ? (
        <div className="flex w-full max-w-[520px] shrink-0 items-end justify-center gap-3 sm:gap-4">
          {step.images.map((img) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={320}
              height={468}
              sizes="(max-width: 768px) 45vw, 250px"
              className="h-auto w-full max-w-[250px] rounded-t-xl"
            />
          ))}
        </div>
      ) : (
        <div className="flex w-full max-w-[320px] shrink-0 items-center justify-center">
          <Image
            src={step.images[0].src}
            alt={step.images[0].alt}
            width={320}
            height={468}
            className="h-auto w-full max-w-[320px] rounded-t-xl"
          />
        </div>
      )}
      <div className="flex flex-col gap-3 text-center md:text-left">
        <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">Step {index + 1}</span>
        <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{step.title}</h3>
        <p className="text-muted-foreground max-w-md leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}
