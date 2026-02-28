"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { ArrowLeft, ArrowRight, Target, Eye, Heart, Star, Lightbulb, Leaf, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Heart,
    titleKey: "mission.value1_title",
    textKey: "mission.value1_text",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Star,
    titleKey: "mission.value2_title",
    textKey: "mission.value2_text",
    color: "text-kyan-green",
    bg: "bg-kyan-green-light",
  },
  {
    icon: Lightbulb,
    titleKey: "mission.value3_title",
    textKey: "mission.value3_text",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: Leaf,
    titleKey: "mission.value4_title",
    textKey: "mission.value4_text",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

export default function MissionPage() {
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
            <div className="absolute bottom-0 start-0 w-72 h-72 rounded-full bg-kyan-green/10 blur-3xl" />
            <div className="absolute top-0 end-0 w-48 h-48 rounded-full bg-white/5 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kyan-green/20 border border-kyan-green/40 text-kyan-green text-sm font-medium mb-4">
              {t("mission.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
              {t("mission.title")}
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
              {t("mission.subtitle")}
            </p>
          </div>
        </section>

        {/* ── MISSION & VISION ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="rounded-3xl bg-kyan-surface border border-kyan-border p-10 flex flex-col gap-6 kyan-card-hover">
                <div className="w-16 h-16 rounded-2xl bg-kyan-blue flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-kyan-blue mb-4">
                    {t("mission.mission_title")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {t("mission.mission_text")}
                  </p>
                </div>
                <div className="w-12 h-1 rounded-full bg-kyan-blue mt-auto" />
              </div>

              {/* Vision */}
              <div className="rounded-3xl bg-kyan-blue p-10 flex flex-col gap-6 kyan-card-hover">
                <div className="w-16 h-16 rounded-2xl bg-kyan-green flex items-center justify-center">
                  <Eye className="w-8 h-8 text-kyan-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t("mission.vision_title")}
                  </h2>
                  <p className="text-blue-200 leading-relaxed text-base">
                    {t("mission.vision_text")}
                  </p>
                </div>
                <div className="w-12 h-1 rounded-full bg-kyan-green mt-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="py-24 bg-kyan-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-kyan-green uppercase tracking-widest mb-3">
                <span className="w-8 h-0.5 bg-kyan-green rounded-full" />
                {t("mission.values_title")}
                <span className="w-8 h-0.5 bg-kyan-green rounded-full" />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-kyan-blue text-balance">
                {t("mission.values_title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.titleKey}
                    className="rounded-2xl bg-white border border-kyan-border p-6 kyan-card-hover text-center flex flex-col items-center gap-4"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${value.bg} flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${value.color}`} />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-kyan-blue/10 mb-1">
                        0{i + 1}
                      </div>
                      <h3 className="font-bold text-kyan-blue text-base mb-2">
                        {t(value.titleKey)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(value.textKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── GCC LEADERSHIP ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-kyan-blue to-blue-900 p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 end-0 w-64 h-64 rounded-full bg-kyan-green/10 blur-3xl pointer-events-none" />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-kyan-green flex items-center justify-center">
                    <Globe className="w-7 h-7 text-kyan-blue" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">
                    {t("mission.leadership_title")}
                  </h2>
                  <p className="text-blue-200 leading-relaxed">
                    {t("mission.leadership_text")}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {(locale === "ar"
                    ? ["المملكة السعودية", "الإمارات", "الكويت", "قطر", "البحرين", "عُمان"]
                    : ["Saudi Arabia", "UAE", "Kuwait", "Qatar", "Bahrain", "Oman"]
                  ).map((country) => (
                    <div
                      key={country}
                      className="rounded-xl bg-white/10 border border-white/20 px-3 py-3 text-center"
                    >
                      <p className="text-white text-xs font-medium">{country}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-kyan-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-kyan-blue text-balance mb-8">
              {locale === "ar"
                ? "انضم إلى مسيرتنا نحو مستقبل أكثر صحة وطبيعية"
                : "Join us on our journey towards a healthier, more natural future"}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white kyan-gradient kyan-transition hover:opacity-90 text-base"
              >
                {t("nav.contact")}
                <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/why"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-kyan-blue border-2 border-kyan-blue hover:bg-kyan-blue hover:text-white kyan-transition text-base"
              >
                {t("nav.why")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
