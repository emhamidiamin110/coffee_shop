import { useTranslations } from "next-intl";

const GALLERY_ITEMS = ["☕", "🛋️", "🥐", "🌱", "🍰", "🪴"];

export default function Gallery() {
  const t = useTranslations("gallery");

  return (
    <section id="gallery" className="bg-cream-100/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold-600">
            {t("eyebrow")}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-coffee-900 sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY_ITEMS.map((icon, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-2xl bg-linear-to-br from-coffee-600 to-coffee-900 text-5xl text-cream shadow-sm transition-transform hover:scale-[1.03]"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
