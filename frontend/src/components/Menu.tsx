import { getLocale, getTranslations } from "next-intl/server";
import { Coffee, Snowflake, Bread, Cake } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { getMenuItems } from "@/lib/api";

const ICONS: Record<string, Icon> = {
  coffee: Coffee,
  snowflake: Snowflake,
  bread: Bread,
  cake: Cake,
};

export default async function Menu() {
  const t = await getTranslations("menu");
  const locale = await getLocale();
  const items = (await getMenuItems()).filter((item) => item.isFeatured);

  const numberFormat = new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US");

  return (
    <section id="menu" className="border-t border-line bg-ink-raised/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-ember">
            {t("eyebrow")}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-tan sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-tan-dim">{t("subtitle")}</p>
        </div>

        {items.length === 0 ? (
          <p className="mt-12 text-center text-tan-dim">{t("empty")}</p>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
              const ItemIcon = ICONS[item.icon] ?? Coffee;
              return (
                <div
                  key={item.id}
                  className="group flex flex-col rounded-2xl border border-line bg-ink p-6 transition-colors hover:border-line-strong"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ink-raised-2 text-ember">
                    <ItemIcon weight="duotone" className="h-7 w-7" />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-tan">
                      {locale === "fa" ? item.nameFa : item.nameEn}
                    </h3>
                    <span className="whitespace-nowrap font-bold text-ember">
                      {numberFormat.format(item.priceToman)} {t("currency")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-tan-dim">
                    {locale === "fa" ? item.descriptionFa : item.descriptionEn}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full border border-line-strong px-6 py-3 font-semibold text-tan transition-colors hover:border-tan-dim"
          >
            {t("viewAll")}
          </a>
        </div>
      </div>
    </section>
  );
}
