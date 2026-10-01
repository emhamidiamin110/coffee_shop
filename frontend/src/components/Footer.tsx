import { useTranslations } from "next-intl";
import {
  Coffee,
  InstagramLogo,
  TelegramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

export default function Footer() {
  const nav = useTranslations("nav");
  const t = useTranslations("footer");

  const links = [
    { href: "#home", label: nav("home") },
    { href: "#menu", label: nav("menu") },
    { href: "#about", label: nav("about") },
    { href: "#contact", label: nav("contact") },
  ];

  const socials: { name: string; icon: Icon }[] = [
    { name: "Instagram", icon: InstagramLogo },
    { name: "Telegram", icon: TelegramLogo },
    { name: "WhatsApp", icon: WhatsappLogo },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <span className="flex items-center gap-2">
            <Coffee weight="duotone" className="h-6 w-6 text-ember" />
            <span className="text-lg font-bold text-tan">{nav("brand")}</span>
          </span>
          <p className="mt-3 text-sm text-tan-dim">{t("tagline")}</p>
        </div>

        <div>
          <h3 className="font-bold text-tan">{t("linksTitle")}</h3>
          <ul className="mt-3 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-tan-dim hover:text-tan"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-tan">{t("socialTitle")}</h3>
          <ul className="mt-3 flex gap-3">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href="#"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-tan-dim transition-colors hover:border-line-strong hover:text-tan"
                >
                  <social.icon weight="bold" className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-6 text-center text-sm text-tan-faint">
        {t("rights")}
      </div>
    </footer>
  );
}
