"use client";

import { FeatureDetails } from "@/components/features/feature-details";
import { FeatureScreenshots } from "@/components/features/feature-screenshots";
import type { Feature } from "@/components/features/features";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useId, useState } from "react";

type Props = {
  features: Feature[];
  className?: string;
};

export function FeaturesTabs({ features, className }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const idPrefix = useId();

  const tabId = (i: number) => `${idPrefix}-tab-${i}`;
  const panelId = `${idPrefix}-tabpanel`;

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => setActiveIndex(carouselApi.selectedScrollSnap());
    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  const handleTabClick = useCallback(
    (index: number) => {
      setActiveIndex(index);
      carouselApi?.scrollTo(index);
    },
    [carouselApi],
  );

  const handleTabListKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      let next = activeIndex;
      if (e.key === "ArrowRight") next = (activeIndex + 1) % features.length;
      else if (e.key === "ArrowLeft") next = (activeIndex - 1 + features.length) % features.length;
      else return;

      e.preventDefault();
      handleTabClick(next);
      const btn = document.getElementById(tabId(next));
      btn?.focus();
    },
    [activeIndex, features.length, handleTabClick],
  );

  return (
    <div className={cn("flex w-full max-w-6xl flex-col gap-2", className)}>
      <div
        role="tablist"
        className="grid h-auto w-full grid-cols-4 gap-6"
        onKeyDown={handleTabListKeyDown}
      >
        {features.map((feature, i) => (
          <button
            key={feature.title}
            type="button"
            role="tab"
            id={tabId(i)}
            aria-selected={i === activeIndex}
            aria-controls={panelId}
            tabIndex={i === activeIndex ? 0 : -1}
            className="flex cursor-pointer flex-col items-center justify-start gap-5 px-2 py-6"
            onClick={() => handleTabClick(i)}
          >
            <FeatureDetails feature={feature} isActive={i === activeIndex} />
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={panelId}
        aria-labelledby={tabId(activeIndex)}
      >
        <Carousel setApi={setCarouselApi}>
          <CarouselContent containerClassName="px-0">
            {features.map((feature) => (
              <CarouselItem key={feature.title}>
                <div className="bg-card flex min-h-[510px] w-full items-center justify-center rounded-lg border px-8 py-10 sm:px-10">
                  <FeatureScreenshots title={feature.title} images={feature.images} variant="tabs" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
