import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as {
    name: string;
    role: string;
    quote: string;
  }[];

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-gold-600">
          {t("eyebrow")}
        </span>
        <h2 className="mt-2 text-3xl font-bold text-coffee-900 sm:text-4xl">
          {t("title")}
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <figure
            key={item.name}
            className="flex flex-col rounded-2xl border border-coffee-700/10 bg-cream-100/40 p-6"
          >
            <span className="text-2xl text-gold-500" aria-hidden>
              “
            </span>
            <blockquote className="grow text-coffee-800">
              {item.quote}
            </blockquote>
            <figcaption className="mt-4 border-t border-coffee-700/10 pt-4">
              <span className="block font-bold text-coffee-900">
                {item.name}
              </span>
              <span className="text-sm text-coffee-700">{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
