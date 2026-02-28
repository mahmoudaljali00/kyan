"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const quickLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.products", href: "/products" },
  { key: "nav.contact", href: "/contact" },
];

export default function NotFound() {
  const { t, locale, dir } = useI18n();
  const fontFamily = locale === "ar" ? "var(--font-cairo)" : "var(--font-inter)";
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div style={{ fontFamily }} dir={dir}>
      <Header />
      <main className="min-h-[70vh] bg-kyan-surface flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="flex flex-col items-center text-center gap-6">
            {/* Large 404 number */}
            <div className="relative">
              <p
                className="text-[10rem] md:text-[14rem] font-bold leading-none select-none"
                style={{ color: "var(--kyan-green)", opacity: 0.12 }}
              >
                404
              </p>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-kyan-blue-light flex items-center justify-center">
                  <Home className="w-9 h-9 text-kyan-blue" />
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-kyan-blue text-balance">
              {locale === "ar" ? "الصفحة غير موجودة" : "Page Not Found"}
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md">
              {locale === "ar"
                ? "عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما تمت إزالتها أو تغيير عنوانها."
                : "Sorry, we couldn't find the page you're looking for. It may have been removed or its address changed."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-kyan-blue hover:bg-kyan-green kyan-transition text-sm"
              >
                <ArrowIcon className="w-4 h-4" />
                {locale === "ar" ? "العودة للرئيسية" : "Back to Home"}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-kyan-blue border-2 border-kyan-blue hover:bg-kyan-blue hover:text-white kyan-transition text-sm"
              >
                {t("nav.contact")}
              </Link>
            </div>

            {/* Quick navigation */}
            <div className="mt-8 p-6 rounded-2xl bg-white border border-kyan-border w-full max-w-sm">
              <p className="text-xs font-semibold text-kyan-green uppercase tracking-widest mb-4">
                {locale === "ar" ? "روابط سريعة" : "Quick Links"}
              </p>
              <div className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-kyan-blue-light hover:text-kyan-blue text-sm text-foreground kyan-transition group"
                  >
                    <span>{t(link.key)}</span>
                    <ArrowIcon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 kyan-transition" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
