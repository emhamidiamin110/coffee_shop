import { useTranslations } from "next-intl";
import { CoffeeBean, ChefHat, Armchair, WifiHigh } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

const FEATURE_KEYS = ["beans", "baristas", "cozy", "wifi"] as const;
const ICONS: Record<(typeof FEATURE_KEYS)[number], Icon> = {
  beans: CoffeeBean,
  baristas: ChefHat,
  cozy: Armchair,
  wifi: WifiHigh,
};

export default function Features() {
  const t = useTranslations("features");

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="max-w-md text-3xl font-bold text-tan sm:text-4xl">
        {t("title")}
      </h2>

      <div className="mt-12 grid divide-y divide-line border-y border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {FEATURE_KEYS.map((key) => {
          const ItemIcon = ICONS[key];
          return (
            <div key={key} className="flex flex-col gap-3 px-6 py-8 first:ps-0 last:pe-0">
              <ItemIcon weight="duotone" className="h-8 w-8 text-ember" />
              <h3 className="font-bold text-tan">{t(`items.${key}.title`)}</h3>
              <p className="text-sm text-tan-dim">{t(`items.${key}.desc`)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
