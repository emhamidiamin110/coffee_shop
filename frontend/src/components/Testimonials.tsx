import { useTranslations } from "next-intl";
import { Quotes } from "@phosphor-icons/react/dist/ssr";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as {
    name: string;
    role: string;
    quote: string;
  }[];

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="max-w-md text-3xl font-bold text-tan sm:text-4xl">
        {t("title")}
      </h2>

      <div className="mt-12 space-y-10">
        {items.map((item) => (
          <figure
            key={item.name}
            className="grid gap-4 border-t border-line pt-8 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8"
          >
            <Quotes weight="fill" className="h-8 w-8 shrink-0 text-ember" />
            <div>
              <blockquote className="max-w-2xl text-lg text-tan">
                {item.quote}
              </blockquote>
              <figcaption className="mt-3 text-sm text-tan-dim">
                <span className="font-semibold text-tan">{item.name}</span>
                {" — "}
                {item.role}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
