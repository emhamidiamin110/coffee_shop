"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 rounded-full border border-coffee-700/20 bg-cream-100 p-1 text-sm">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => router.replace(pathname, { locale: loc })}
          className={`rounded-full px-3 py-1 transition-colors cursor-pointer ${
            locale === loc
              ? "bg-coffee-800 text-cream"
              : "text-coffee-700 hover:bg-cream-200"
          }`}
          aria-current={locale === loc}
        >
          {loc === "fa" ? "فا" : "EN"}
        </button>
      ))}
    </div>
  );
}
