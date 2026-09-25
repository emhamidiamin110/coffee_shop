import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-b from-coffee-900 via-coffee-800 to-coffee-900 text-cream"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--color-gold-500) 0%, transparent 35%), radial-gradient(circle at 80% 60%, var(--color-gold-400) 0%, transparent 40%)",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
        <span className="mb-4 rounded-full border border-gold-400/40 px-4 py-1 text-sm font-medium text-gold-200">
          {t("eyebrow")}
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream-100/90">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="rounded-full bg-gold-500 px-7 py-3 font-semibold text-coffee-900 shadow-lg shadow-gold-500/20 transition-transform hover:scale-105 hover:bg-gold-400"
          >
            {t("primaryCta")}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-cream/30 px-7 py-3 font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            {t("secondaryCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
