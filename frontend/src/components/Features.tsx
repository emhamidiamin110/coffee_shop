import { useTranslations } from "next-intl";

const FEATURE_KEYS = ["beans", "baristas", "cozy", "wifi"] as const;
const ICONS: Record<(typeof FEATURE_KEYS)[number], string> = {
  beans: "🌱",
  baristas: "👩‍🍳",
  cozy: "🛋️",
  wifi: "📶",
};

export default function Features() {
  const t = useTranslations("features");

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-gold-600">
          {t("eyebrow")}
        </span>
        <h2 className="mt-2 text-3xl font-bold text-coffee-900 sm:text-4xl">
          {t("title")}
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURE_KEYS.map((key) => (
          <div
            key={key}
            className="rounded-2xl border border-coffee-700/10 bg-cream-100/60 p-6 text-center"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-coffee-800 text-2xl text-cream">
              {ICONS[key]}
            </span>
            <h3 className="mt-4 font-bold text-coffee-900">
              {t(`items.${key}.title`)}
            </h3>
            <p className="mt-2 text-sm text-coffee-700">
              {t(`items.${key}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
