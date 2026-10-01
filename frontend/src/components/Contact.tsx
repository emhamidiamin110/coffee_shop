import { useTranslations } from "next-intl";
import { MapPin, Clock, Phone } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

export default function Contact() {
  const t = useTranslations("contact");

  const rows: { label: string; value: string; icon: Icon }[] = [
    { label: t("addressLabel"), value: t("address"), icon: MapPin },
    { label: t("hoursLabel"), value: t("hours"), icon: Clock },
    { label: t("phoneLabel"), value: t("phone"), icon: Phone },
  ];

  return (
    <section
      id="contact"
      className="border-t border-line bg-ink-raised/40 py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-ember">
            {t("eyebrow")}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-tan sm:text-4xl">
            {t("title")}
          </h2>

          <dl className="mt-8 space-y-5">
            {rows.map((row) => (
              <div key={row.label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-raised-2 text-ember">
                  <row.icon weight="duotone" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-sm text-tan-dim">{row.label}</dt>
                  <dd className="font-medium text-tan">{row.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex h-64 items-center justify-center rounded-2xl border border-line sm:h-80">
          <MapPin weight="duotone" className="h-16 w-16 text-ember" />
        </div>
      </div>
    </section>
  );
}
