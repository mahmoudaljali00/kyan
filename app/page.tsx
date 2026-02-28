"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { ArrowLeft, ArrowRight, Leaf, Award, Settings, Handshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { value: "١٠+", valueEn: "10+", key: "home.stats_years" },
  { value: "٢٠+", valueEn: "20+", key: "home.stats_products" },
  { value: "٥", valueEn: "5", key: "home.stats_countries" },
  { value: "ISO", valueEn: "ISO", key: "home.stats_quality" },
];

const whyCards = [
  {
    icon: Leaf,
    titleKey: "home.why_natural_title",
    textKey: "home.why_natural_text",
    bgColor: "bg-green-50",
    iconColor: "text-kyan-green",
    iconBg: "bg-kyan-green-light",
  },
  {
    icon: Award,
    titleKey: "home.why_quality_title",
    textKey: "home.why_quality_text",
    bgColor: "bg-blue-50",
    iconColor: "text-kyan-blue",
    iconBg: "bg-kyan-blue-light",
  },
  {
    icon: Settings,
    titleKey: "home.why_custom_title",
    textKey: "home.why_custom_text",
    bgColor: "bg-green-50",
    iconColor: "text-kyan-green",
    iconBg: "bg-kyan-green-light",
  },
  {
    icon: Handshake,
    titleKey: "home.why_b2b_title",
    textKey: "home.why_b2b_text",
    bgColor: "bg-blue-50",
    iconColor: "text-kyan-blue",
    iconBg: "bg-kyan-blue-light",
  },
];

const featuredProducts = [
  {
    image: "/products/orange-juice.jpg",
    nameKey: "products.product1_name",
    descKey: "products.product1_desc",
    borderColor: "border-orange-100",
  },
  {
    image: "/products/pomegranate-juice.jpg",
    nameKey: "products.product2_name",
    descKey: "products.product2_desc",
    borderColor: "border-red-100",
  },
  {
    image: "/products/mango-juice.jpg",
    nameKey: "products.product8_name",
    descKey: "products.product8_desc",
    borderColor: "border-yellow-100",
  },
  {
    image: "/products/guava-juice.jpg",
    nameKey: "products.product3_name",
    descKey: "products.product3_desc",
    borderColor: "border-green-100",
  },
];

export default function HomePage() {
  const { t, locale, dir } = useI18n();
  const fontFamily = locale === "ar" ? "var(--font-cairo)" : "var(--font-inter)";
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div style={{ fontFamily }} dir={dir}>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-kyan-blue">
          <div className="absolute inset-0">
            <Image
              src="/hero-juices.jpg"
              alt="عصائر طازجة من كيان فودز"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-kyan-blue/80 via-kyan-blue/60 to-kyan-blue/90" />
          </div>
          <div className="absolute top-20 end-20 w-96 h-96 rounded-full bg-kyan-green/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 start-10 w-64 h-64 rounded-full bg-kyan-green/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kyan-green/20 border border-kyan-green/40 mb-6">
                <span className="w-2 h-2 rounded-full bg-kyan-green animate-pulse" />
                <span className="text-kyan-green text-sm font-medium">
                  {t("home.hero_badge")}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                {t("home.hero_title")}
              </h1>
              <p className="text-lg md:text-xl text-blue-200 leading-relaxed mb-10 max-w-2xl">
                {t("home.hero_subtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white kyan-gradient kyan-transition hover:opacity-90 hover:shadow-lg text-base"
                >
                  {t("home.hero_cta")}
                  <ArrowIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border-2 border-white/40 hover:border-kyan-green hover:text-kyan-green kyan-transition text-base"
                >
                  {t("home.hero_cta_secondary")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="bg-kyan-green py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.key} className="text-center">
                  <p className="text-3xl font-bold text-kyan-blue">
                    {locale === "ar" ? stat.value : stat.valueEn}
                  </p>
                  <p className="text-kyan-blue/80 text-sm font-medium mt-1">
                    {t(stat.key)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT PREVIEW ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className={`relative ${dir === "rtl" ? "lg:order-last" : ""}`}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <Image
                    src="/about-factory.jpg"
                    alt="مصنع كيان فودز"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 start-8 bg-white rounded-2xl shadow-xl px-6 py-4 border border-kyan-border">
                  <p className="text-kyan-blue font-bold text-base">
                    {locale === "ar" ? "أول مصنع متخصص" : "First Specialized Factory"}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {locale === "ar" ? "في المملكة العربية السعودية" : "In Saudi Arabia"}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-kyan-green uppercase tracking-widest">
                  <span className="w-8 h-0.5 bg-kyan-green rounded-full" />
                  {t("home.about_badge")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-kyan-blue text-balance">
                  {t("home.about_title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {t("home.about_text")}
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-kyan-blue font-semibold hover:text-kyan-green kyan-transition group w-fit"
                >
                  {t("home.about_cta")}
                  <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 kyan-transition" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY US HIGHLIGHTS ── */}
        <section className="py-24 bg-kyan-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-kyan-green uppercase tracking-widest mb-3">
                <span className="w-8 h-0.5 bg-kyan-green rounded-full" />
                {t("home.why_badge")}
                <span className="w-8 h-0.5 bg-kyan-green rounded-full" />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-kyan-blue text-balance">
                {t("home.why_title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.titleKey}
                    className="rounded-2xl p-6 bg-white border border-kyan-border kyan-card-hover"
                  >
                    <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-kyan-blue text-base mb-2">
                      {t(card.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(card.textKey)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS PREVIEW ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-kyan-green uppercase tracking-widest mb-3">
                <span className="w-8 h-0.5 bg-kyan-green rounded-full" />
                {t("home.products_badge")}
                <span className="w-8 h-0.5 bg-kyan-green rounded-full" />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-kyan-blue text-balance mb-4">
                {t("home.products_title")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("home.products_subtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {featuredProducts.map((product) => (
                <div
                  key={product.nameKey}
                  className={`rounded-2xl overflow-hidden bg-white kyan-card-hover border ${product.borderColor} flex flex-col`}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={t(product.nameKey)}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <h3 className="font-bold text-kyan-blue text-sm">
                      {t(product.nameKey)}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {t(product.descKey)}
                    </p>
                    <div className="mt-auto pt-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-kyan-green/15 text-kyan-green text-xs font-semibold">
                        {t("products.natural")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-kyan-blue hover:bg-kyan-green kyan-transition text-base"
              >
                {t("home.products_cta")}
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── MISSION PREVIEW ── */}
        <section className="py-24 bg-kyan-blue relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 end-0 w-80 h-80 rounded-full bg-kyan-green/10 blur-3xl" />
            <div className="absolute bottom-0 start-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-kyan-green uppercase tracking-widest mb-4">
              <span className="w-8 h-0.5 bg-kyan-green rounded-full" />
              {t("home.mission_badge")}
              <span className="w-8 h-0.5 bg-kyan-green rounded-full" />
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white text-balance mb-6">
              {t("home.mission_title")}
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed mb-10">
              {t("home.mission_text")}
            </p>
            <Link
              href="/mission"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-kyan-blue bg-kyan-green hover:opacity-90 kyan-transition text-base"
            >
              {t("home.mission_cta")}
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ── CONTACT CTA ── */}
        <section className="py-24 bg-kyan-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-kyan-blue text-balance mb-4">
              {t("home.contact_title")}
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("home.contact_subtitle")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-white kyan-gradient kyan-transition hover:opacity-90 hover:shadow-xl text-lg"
            >
              {t("home.contact_cta")}
              <ArrowIcon className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
