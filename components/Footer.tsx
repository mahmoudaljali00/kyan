"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const navLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.mission", href: "/mission" },
  { key: "nav.products", href: "/products" },
  { key: "nav.why", href: "/why" },
  { key: "nav.contact", href: "/contact" },
];

export default function Footer() {
  const { t, locale } = useI18n();
  const fontFamily =
    locale === "ar" ? "var(--font-cairo)" : "var(--font-inter)";

  return (
    <footer
      className="bg-kyan-blue text-white"
      style={{ fontFamily }}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand column */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {locale === "ar" ? "كيان فودز" : "Kyan Foods"}
            </h2>
            <p className="text-kyan-green text-sm mt-1 font-medium">
              {t("footer.tagline")}
            </p>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed">
            {locale === "ar"
              ? "أول مصنع متخصص لعصائر الفاكهة الطازجة في المملكة العربية السعودية، نقدم منتجات طبيعية 100% بلا إضافات."
              : "Saudi Arabia's first specialized fresh juice factory, delivering 100% natural products with no additives."}
          </p>
          {/* Green accent line */}
          <div className="w-12 h-1 rounded-full bg-kyan-green mt-2" />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-kyan-green uppercase tracking-widest mb-5">
            {t("footer.quick_links")}
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-blue-200 hover:text-kyan-green text-sm kyan-transition"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-kyan-green uppercase tracking-widest mb-5">
            {t("footer.contact_us")}
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-kyan-green mt-0.5 flex-shrink-0" />
              <span className="text-blue-200 text-sm">{t("contact.address_value")}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-kyan-green flex-shrink-0" />
              <a
                href={`mailto:${t("contact.email_value")}`}
                className="text-blue-200 hover:text-kyan-green text-sm kyan-transition"
                dir="ltr"
              >
                {t("contact.email_value")}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-kyan-green flex-shrink-0" />
              <a
                href={`tel:${t("contact.phone_value")}`}
                className="text-blue-200 hover:text-kyan-green text-sm kyan-transition"
                dir="ltr"
              >
                {t("contact.phone_value")}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-kyan-green mt-0.5 flex-shrink-0" />
              <span className="text-blue-200 text-sm">{t("contact.hours_value")}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-blue-300 text-xs">
            &copy; {new Date().getFullYear()} {t("footer.company")} &mdash;{" "}
            {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-kyan-green" />
            <span className="text-blue-300 text-xs">
              {locale === "ar"
                ? "مصنع معتمد بالمملكة العربية السعودية"
                : "Certified Factory in Saudi Arabia"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
