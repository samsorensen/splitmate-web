import { FeatureDetails } from "@/components/features/feature-details";
import { FeatureScreenshots } from "@/components/features/feature-screenshots";
import type { Feature } from "@/components/features/features";

type FeatureCardProps = {
  feature: Feature;
  isActive: boolean;
};

export function FeatureCard({ feature, isActive }: FeatureCardProps) {
  return (
    <div className="flex h-full w-(--carousel-item-width) flex-col items-center justify-between gap-5 px-2 py-6">
      <FeatureDetails feature={feature} isActive={isActive} />
      <div className="bg-card w-full rounded-lg border p-5 sm:p-8">
        <FeatureScreenshots title={feature.title} images={[feature.carouselImage]} variant="carousel" />
      </div>
    </div>
  );
}
