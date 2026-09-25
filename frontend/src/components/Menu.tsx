import { getLocale, getTranslations } from "next-intl/server";
import { getMenuItems } from "@/lib/api";

export default async function Menu() {
  const t = await getTranslations("menu");
  const locale = await getLocale();
  const items = (await getMenuItems()).filter((item) => item.isFeatured);

  const numberFormat = new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US");

  return (
    <section id="menu" className="bg-cream-100/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold-600">
            {t("eyebrow")}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-coffee-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-coffee-700">{t("subtitle")}</p>
        </div>

        {items.length === 0 ? (
          <p className="mt-12 text-center text-coffee-600">{t("empty")}</p>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col rounded-2xl border border-coffee-700/10 bg-cream p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-coffee-800 text-3xl text-cream">
                  {item.icon}
                </div>
                <div className="mt-4 flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-coffee-900">
                    {locale === "fa" ? item.nameFa : item.nameEn}
                  </h3>
                  <span className="whitespace-nowrap font-bold text-gold-600">
                    {numberFormat.format(item.priceToman)} {t("currency")}
                  </span>
                </div>
                <p className="mt-2 text-sm text-coffee-700">
                  {locale === "fa" ? item.descriptionFa : item.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full border border-coffee-800 px-6 py-3 font-semibold text-coffee-900 transition-colors hover:bg-coffee-800 hover:text-cream"
          >
            {t("viewAll")}
          </a>
        </div>
      </div>
    </section>
  );
}
