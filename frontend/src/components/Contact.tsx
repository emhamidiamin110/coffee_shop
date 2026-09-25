import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  const rows = [
    { label: t("addressLabel"), value: t("address"), icon: "📍" },
    { label: t("hoursLabel"), value: t("hours"), icon: "🕒" },
    { label: t("phoneLabel"), value: t("phone"), icon: "📞" },
  ];

  return (
    <section
      id="contact"
      className="bg-linear-to-b from-coffee-900 to-coffee-800 py-20 text-cream"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-gold-400">
            {t("eyebrow")}
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            {t("title")}
          </h2>

          <dl className="mt-8 space-y-5">
            {rows.map((row) => (
              <div key={row.label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/10 text-lg">
                  {row.icon}
                </span>
                <div>
                  <dt className="text-sm text-gold-200">{row.label}</dt>
                  <dd className="font-medium text-cream">{row.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div
          aria-hidden
          className="flex h-64 items-center justify-center rounded-3xl border border-cream/10 bg-cream/5 text-6xl sm:h-80"
        >
          🗺️
        </div>
      </div>
    </section>
  );
}
