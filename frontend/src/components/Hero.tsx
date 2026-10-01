import { useTranslations } from "next-intl";
import { Coffee } from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="home" className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-ember">
            {t("eyebrow")}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-tan sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-md text-lg text-tan-dim">{t("subtitle")}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="rounded-full bg-ember px-7 py-3 font-semibold text-ink transition-transform hover:scale-[1.03] hover:bg-ember-dim"
            >
              {t("primaryCta")}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line-strong px-7 py-3 font-semibold text-tan transition-colors hover:border-tan-dim"
            >
              {t("secondaryCta")}
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
          <div
            aria-hidden
            className="absolute inset-0 rounded-full border border-line-strong"
          />
          <div
            aria-hidden
            className="absolute inset-8 rounded-full border border-line"
          />
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 220deg, var(--color-ember) 0deg, transparent 70deg)",
              maskImage:
                "radial-gradient(closest-side, transparent 92%, black 93%)",
              WebkitMaskImage:
                "radial-gradient(closest-side, transparent 92%, black 93%)",
            }}
          />
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-ink-raised sm:h-52 sm:w-52">
            <Coffee weight="duotone" className="h-20 w-20 text-ember sm:h-24 sm:w-24" />
          </div>
        </div>
      </div>
    </section>
  );
}
