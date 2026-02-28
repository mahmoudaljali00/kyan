"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, FlaskConical, Factory } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pillars = [
  {
    icon: CheckCircle2,
    titleKey: "about.commitment_title",
    textKey: "about.commitment_text",
    iconBg: "bg-kyan-green-light",
    iconColor: "text-kyan-green",
  },
  {
    icon: ShieldCheck,
    titleKey: "about.quality_title",
    textKey: "about.quality_text",
    iconBg: "bg-kyan-blue-light",
    iconColor: "text-kyan-blue",
  },
  {
    icon: FlaskConical,
    titleKey: "about.safety_title",
    textKey: "about.safety_text",
    iconBg: "bg-kyan-green-light",
    iconColor: "text-kyan-green",
  },
  {
    icon: Factory,
    titleKey: "about.factory_title",
    textKey: "about.factory_text",
    iconBg: "bg-kyan-blue-light",
    iconColor: "text-kyan-blue",
  },
];

export default function AboutPage() {
  const { t, locale, dir } = useI18n();
  const fontFamily = locale === "ar" ? "var(--font-cairo)" : "var(--font-inter)";
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div style={{ fontFamily }} dir={dir}>
      <Header />
      <main>
        {/* ── PAGE HERO ── */}
        <section className="bg-kyan-blue py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 end-0 w-64 h-64 rounded-full bg-kyan-green/10 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kyan-green/20 border border-kyan-green/40 text-kyan-green text-sm font-medium mb-4">
                {t("about.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
                {t("about.title")}
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed">
                {t("about.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className={`relative ${dir === "rtl" ? "" : "lg:order-last"}`}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <Image
                    src="/about-factory.jpg"
                    alt="مصنع كيان فودز"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative green accent */}
                <div className="absolute -top-4 -end-4 w-24 h-24 rounded-2xl bg-kyan-green/20 -z-10" />
              </div>

              <div className="flex flex-col gap-6">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-kyan-green uppercase tracking-widest">
                  <span className="w-8 h-0.5 bg-kyan-green rounded-full" />
                  {t("about.overview_title")}
                </span>
                <div className="flex flex-col gap-4">
                  <p className="text-foreground leading-relaxed">{t("about.overview_text1")}</p>
                  <p className="text-muted-foreground leading-relaxed">{t("about.overview_text2")}</p>
                  <p className="text-muted-foreground leading-relaxed">{t("about.overview_text3")}</p>
                </div>
                {/* ISO/HACCP badges */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {["ISO 22000", "HACCP", "100% Natural"].map((badge) => (
                    <span
                      key={badge}
                      className="px-4 py-1.5 rounded-full border-2 border-kyan-green text-kyan-blue text-sm font-semibold bg-kyan-green-light"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FRESH FRUITS IMAGE BANNER ── */}
        <section className="relative h-72 overflow-hidden">
          <Image
            src="/fresh-fruits.jpg"
            alt="فواكه طازجة طبيعية"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-kyan-blue/70 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <p className="text-2xl md:text-3xl font-bold text-balance">
                {locale === "ar"
                  ? "طبيعي 100% — بدون إضافات أو مواد حافظة"
                  : "100% Natural — No Additives or Preservatives"}
              </p>
              <p className="text-kyan-green mt-2 font-medium text-lg">
                {locale === "ar"
                  ? "التزامنا الراسخ منذ اليوم الأول"
                  : "Our steadfast commitment from day one"}
              </p>
            </div>
          </div>
        </section>

        {/* ── PILLARS ── */}
        <section className="py-24 bg-kyan-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.titleKey}
                    className="rounded-2xl p-8 bg-white border border-kyan-border kyan-card-hover flex gap-5"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${pillar.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-7 h-7 ${pillar.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-kyan-blue text-lg mb-2">
                        {t(pillar.titleKey)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {t(pillar.textKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-kyan-blue text-balance mb-4">
              {locale === "ar"
                ? "هل أنت مستعد للشراكة مع الرائد في صناعة العصائر الطازجة؟"
                : "Ready to partner with the fresh juice manufacturing leader?"}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-kyan-blue hover:bg-kyan-green kyan-transition text-base"
              >
                {t("nav.products")}
                <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-kyan-blue border-2 border-kyan-blue hover:bg-kyan-blue hover:text-white kyan-transition text-base"
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
