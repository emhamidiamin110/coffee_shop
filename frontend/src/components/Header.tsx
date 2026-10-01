import { useTranslations } from "next-intl";
import { Coffee } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("nav");

  const links = [
    { href: "#menu", label: t("menu") },
    { href: "#about", label: t("about") },
    { href: "#gallery", label: t("gallery") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Coffee weight="duotone" className="h-6 w-6 text-ember" />
          <span className="text-lg font-bold tracking-tight text-tan">
            {t("brand")}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-tan-dim transition-colors hover:text-tan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <a
            href="#contact"
            className="hidden rounded-full bg-ember px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ember-dim sm:inline-block"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
