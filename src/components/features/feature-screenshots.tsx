import { cn } from "@/lib/utils";
import Image from "next/image";

type FeatureScreenshotsProps = {
  title: string;
  images: string[];
  /** Carousel is narrow; tabs panel is wide — layout adapts per surface. */
  variant: "carousel" | "tabs";
};

export function FeatureScreenshots({ title, images, variant }: FeatureScreenshotsProps) {
  const multi = images.length > 1;

  return (
    <div
      className={cn(
        "flex w-full justify-center",
        !multi && "items-center",
        multi && variant === "carousel" && "flex-col items-center gap-5",
        multi && variant === "tabs" && "flex-row flex-wrap items-end justify-center gap-6 sm:gap-10",
      )}
    >
      {images.map((src, index) => (
        <figure
          key={src}
          className={cn("m-0 shrink-0", multi && variant === "tabs" && "max-w-[min(48%,300px)]")}
        >
          <Image
            src={src}
            alt={
              multi
                ? `${title} — screen ${index + 1} of ${images.length}`
                : `${title} — app screen`
            }
            width={304}
            height={445}
            sizes={
              multi
                ? variant === "carousel"
                  ? "(max-width: 640px) 72vw, 260px"
                  : "(max-width: 1280px) 42vw, 300px"
                : "(max-width: 768px) 85vw, 304px"
            }
            className={cn(
              "h-auto object-contain",
              multi && variant === "carousel" && "w-full max-w-[260px]",
              multi && variant === "tabs" && "w-full",
              !multi && "w-full max-w-[min(100%,304px)]",
            )}
          />
        </figure>
      ))}
    </div>
  );
}
