"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const navLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.mission", href: "/mission" },
  { key: "nav.products", href: "/products" },
  { key: "nav.why", href: "/why" },
  { key: "nav.contact", href: "/contact" },
];

export default function Header() {
  const { t, locale, setLocale } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLang = () => {
    setLocale(locale === "ar" ? "en" : "ar");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-kyan-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-kyan-blue-light flex items-center justify-center">
              <Image
                src="/kyan-logo.jpg"
                alt="كيان فودز"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="font-bold text-kyan-blue"
                style={{
                  fontFamily:
                    locale === "ar"
                      ? "var(--font-cairo)"
                      : "var(--font-inter)",
                  fontSize: "1rem",
                  lineHeight: "1.2",
                }}
              >
                {locale === "ar" ? "كيان فودز" : "Kyan Foods"}
              </span>
              <span
                className="text-xs text-muted-foreground"
                style={{
                  fontFamily:
                    locale === "ar"
                      ? "var(--font-cairo)"
                      : "var(--font-inter)",
                }}
              >
                {locale === "ar" ? "عصائر طبيعية طازجة" : "Fresh Natural Juices"}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-kyan-blue hover:bg-kyan-blue-light kyan-transition"
                style={{
                  fontFamily:
                    locale === "ar"
                      ? "var(--font-cairo)"
                      : "var(--font-inter)",
                }}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Right side: lang switcher + mobile menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="px-4 py-2 rounded-full border-2 border-kyan-green text-kyan-blue text-sm font-semibold hover:bg-kyan-green hover:text-white kyan-transition"
              style={{
                fontFamily:
                  locale === "ar"
                    ? "var(--font-inter)"
                    : "var(--font-cairo)",
              }}
              aria-label="Switch language"
            >
              {t("common.lang_switch")}
            </button>

            {/* Contact CTA (desktop) */}
            <Link
              href="/contact"
              className="hidden lg:block px-5 py-2 rounded-full text-sm font-semibold text-white kyan-gradient kyan-transition hover:opacity-90"
              style={{
                fontFamily:
                  locale === "ar"
                    ? "var(--font-cairo)"
                    : "var(--font-inter)",
              }}
            >
              {t("nav.contact")}
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg hover:bg-kyan-blue-light kyan-transition"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-kyan-blue" />
              ) : (
                <Menu className="w-5 h-5 text-kyan-blue" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-kyan-border">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:text-kyan-blue hover:bg-kyan-blue-light kyan-transition"
                style={{
                  fontFamily:
                    locale === "ar"
                      ? "var(--font-cairo)"
                      : "var(--font-inter)",
                }}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
