import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div
          aria-hidden
          className="flex h-72 items-center justify-center rounded-3xl bg-linear-to-br from-coffee-600 to-coffee-900 text-7xl shadow-xl sm:h-96"
        >
          ☕
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-gold-600">
            {t("eyebrow")}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-coffee-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-coffee-700">
            {t("body")}
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-coffee-700/10 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-extrabold text-coffee-900 sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-sm text-coffee-700">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
