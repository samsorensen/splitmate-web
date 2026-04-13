import { FeatureDetails } from "@/components/features/feature-details";
import { FeatureScreenshots } from "@/components/features/feature-screenshots";
import type { Feature } from "@/components/features/features";

type FeatureCardProps = {
  feature: Feature;
  isActive: boolean;
};

export function FeatureCard({ feature, isActive }: FeatureCardProps) {
  const hasMultipleScreenshots = feature.images.length > 1;

  return (
    <div className="flex w-(--carousel-item-width) flex-col items-center gap-5 px-2 py-6">
      <FeatureDetails feature={feature} isActive={isActive} />
      <div
        className={
          hasMultipleScreenshots
            ? "bg-card w-full rounded-lg border px-6 py-8"
            : "bg-card w-full rounded-lg border p-8"
        }
      >
        <FeatureScreenshots title={feature.title} images={feature.images} variant="carousel" />
      </div>
    </div>
  );
}
