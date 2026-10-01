import { useTranslations } from "next-intl";
import {
  Coffee,
  Armchair,
  Bread,
  CoffeeBean,
  Cake,
  Leaf,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

const GALLERY_ICONS: Icon[] = [Coffee, Armchair, Bread, CoffeeBean, Cake, Leaf];

export default function Gallery() {
  const t = useTranslations("gallery");

  return (
    <section id="gallery" className="border-t border-line bg-ink-raised/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-md text-3xl font-bold text-tan sm:text-4xl">
          {t("title")}
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY_ICONS.map((GalleryIcon, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-2xl border border-line bg-ink transition-colors hover:border-line-strong"
            >
              <GalleryIcon weight="duotone" className="h-10 w-10 text-ember" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
