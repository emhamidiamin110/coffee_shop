import { useTranslations } from "next-intl";

export default function Footer() {
  const nav = useTranslations("nav");
  const t = useTranslations("footer");

  const links = [
    { href: "#home", label: nav("home") },
    { href: "#menu", label: nav("menu") },
    { href: "#about", label: nav("about") },
    { href: "#contact", label: nav("contact") },
  ];

  const socials = ["Instagram", "Telegram", "WhatsApp"];

  return (
    <footer className="border-t border-coffee-700/10 bg-cream-100/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <span className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coffee-800 text-cream">
              ☕
            </span>
            <span className="text-lg font-bold text-coffee-900">
              {nav("brand")}
            </span>
          </span>
          <p className="mt-3 text-sm text-coffee-700">{t("tagline")}</p>
        </div>

        <div>
          <h3 className="font-bold text-coffee-900">{t("linksTitle")}</h3>
          <ul className="mt-3 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-coffee-700 hover:text-coffee-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-coffee-900">{t("socialTitle")}</h3>
          <ul className="mt-3 space-y-2">
            {socials.map((social) => (
              <li key={social}>
                <a
                  href="#"
                  className="text-sm text-coffee-700 hover:text-coffee-900"
                >
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-coffee-700/10 py-6 text-center text-sm text-coffee-600">
        {t("rights")}
      </div>
    </footer>
  );
}
