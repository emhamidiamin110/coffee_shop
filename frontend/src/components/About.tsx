import { useTranslations } from "next-intl";
import { CoffeeBean } from "@phosphor-icons/react/dist/ssr";

export default function About() {
  const t = useTranslations("about");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 border-t border-line pt-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-tan sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-tan-dim">
            {t("body")}
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-extrabold text-tan sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-sm text-tan-dim">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex h-72 items-center justify-center rounded-2xl border border-line bg-ink-raised sm:h-96">
          <CoffeeBean weight="duotone" className="h-24 w-24 text-ember" />
        </div>
      </div>
    </section>
  );
}
