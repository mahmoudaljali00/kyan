"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import {
  ArrowLeft,
  ArrowRight,
  Leaf,
  Award,
  Settings,
  Handshake,
  ShieldCheck,
  FlaskConical,
  TrendingUp,
  Tag,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const differentiators = [
  {
    icon: Leaf,
    titleKey: "why.diff1_title",
    textKey: "why.diff1_text",
    iconBg: "bg-kyan-green-light",
    iconColor: "text-kyan-green",
  },
  {
    icon: ShieldCheck,
    titleKey: "why.diff2_title",
    textKey: "why.diff2_text",
    iconBg: "bg-blue-50",
    iconColor: "text-kyan-blue",
  },
  {
    icon: FlaskConical,
    titleKey: "why.diff3_title",
    textKey: "why.diff3_text",
    iconBg: "bg-kyan-green-light",
    iconColor: "text-kyan-green",
  },
  {
    icon: Settings,
    titleKey: "why.diff4_title",
    textKey: "why.diff4_text",
    iconBg: "bg-blue-50",
    iconColor: "text-kyan-blue",
  },
];

const pillars = [
  {
    icon: Award,
    titleKey: "why.quality_title",
    textKey: "why.quality_text",
    num: "01",
  },
  {
    icon: ShieldCheck,
    titleKey: "why.iso_title",
    textKey: "why.iso_text",
    num: "02",
  },
  {
    icon: Handshake,
    titleKey: "why.b2b_title",
    textKey: "why.b2b_text",
    num: "03",
  },
  {
    icon: Tag,
    titleKey: "why.custom_title",
    textKey: "why.custom_text",
    num: "04",
  },
];

export default function WhyPage() {
  const { t, locale, dir } = useI18n();
  const fontFamily = locale === "ar" ? "var(--font-cairo)" : "var(--font-inter)";
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div style={{ fontFamily }} dir={dir}>
      <Header />
      <main>
        {/* ── PAGE HERO ── */}
        <section className="bg-kyan-blue py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 end-0 w-80 h-80 rounded-full bg-kyan-green/10 blur-3xl" />
            <div className="absolute bottom-0 start-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kyan-green/20 border border-kyan-green/40 text-kyan-green text-sm font-medium mb-5">
              {t("why.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
              {t("why.title")}
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
              {t("why.subtitle")}
            </p>
          </div>
        </section>

        {/* ── DIFFERENTIATORS GRID ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-kyan-green uppercase tracking-widest mb-3">
                <span className="w-8 h-0.5 bg-kyan-green rounded-full" />
                {t("why.diff_title")}
                <span className="w-8 h-0.5 bg-kyan-green rounded-full" />
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.titleKey}
                    className="rounded-2xl p-7 border border-kyan-border bg-white kyan-card-hover flex flex-col gap-4"
                  >
                    <div
                      className={`w-13 h-13 w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-kyan-blue text-base leading-snug">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(item.textKey)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── IMAGE + QUALITY PILLAR ── */}
        <section className="py-24 bg-kyan-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="/about-factory.jpg"
                  alt={locale === "ar" ? "ضبط الجودة في كيان فودز" : "Quality control at Kyan Foods"}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kyan-blue/60 to-transparent" />
                <div className="absolute bottom-6 start-6 end-6">
                  <p className="text-white font-bold text-lg leading-snug">
                    {t("why.quality_title")}
                  </p>
                  <p className="text-blue-100 text-sm mt-1 leading-relaxed">
                    {t("why.quality_text")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-kyan-green uppercase tracking-widest">
                  <span className="w-8 h-0.5 bg-kyan-green rounded-full" />
                  {t("why.iso_title")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-kyan-blue text-balance">
                  {t("why.iso_text")}
                </h2>
                <div className="flex flex-col gap-4 mt-2">
                  {[
                    { label: locale === "ar" ? "ISO 22000" : "ISO 22000", desc: locale === "ar" ? "إدارة سلامة الأغذية" : "Food Safety Management" },
                    { label: locale === "ar" ? "HACCP" : "HACCP", desc: locale === "ar" ? "نظام تحليل المخاطر" : "Hazard Analysis System" },
                    { label: locale === "ar" ? "SFDA" : "SFDA", desc: locale === "ar" ? "هيئة الغذاء والدواء السعودية" : "Saudi Food & Drug Authority" },
                  ].map((cert) => (
                    <div key={cert.label} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-kyan-border">
                      <div className="w-10 h-10 rounded-lg bg-kyan-blue flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-kyan-blue text-sm">{cert.label}</p>
                        <p className="text-muted-foreground text-xs">{cert.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 PILLARS ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-kyan-blue text-balance">
                {locale === "ar" ? "ركائز شراكتنا معكم" : "The Pillars of Our Partnership"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.titleKey}
                    className="rounded-2xl p-8 border border-kyan-border kyan-card-hover bg-white flex gap-6 items-start"
                  >
                    <span className="text-4xl font-bold text-kyan-green/25 leading-none select-none flex-shrink-0 w-10">
                      {pillar.num}
                    </span>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-kyan-green-light flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-kyan-green" />
                        </div>
                        <h3 className="font-bold text-kyan-blue text-base">
                          {t(pillar.titleKey)}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
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
        <section className="py-20 bg-kyan-blue relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 end-0 w-64 h-64 rounded-full bg-kyan-green/10 blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-balance mb-4">
              {locale === "ar"
                ? "هل أنت مستعد للشراكة مع الأفضل؟"
                : "Ready to partner with the best?"}
            </h2>
            <p className="text-blue-200 mb-8 leading-relaxed max-w-xl mx-auto">
              {locale === "ar"
                ? "تواصل معنا اليوم لمناقشة احتياجاتك ونبدأ رحلة الشراكة معاً."
                : "Contact us today to discuss your needs and start our partnership journey together."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-kyan-blue bg-kyan-green hover:opacity-90 kyan-transition text-base"
            >
              {t("nav.contact")}
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
