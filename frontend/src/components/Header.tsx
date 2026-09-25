import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("nav");

  const links = [
    { href: "#home", label: t("home") },
    { href: "#menu", label: t("menu") },
    { href: "#about", label: t("about") },
    { href: "#gallery", label: t("gallery") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-coffee-700/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coffee-800 text-cream">
            ☕
          </span>
          <span className="text-lg font-bold tracking-tight text-coffee-900">
            {t("brand")}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-coffee-700 transition-colors hover:text-coffee-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <a
            href="#contact"
            className="hidden rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-coffee-900 shadow-sm transition-colors hover:bg-gold-400 sm:inline-block"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
