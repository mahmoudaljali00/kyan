"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { ArrowLeft, ArrowRight, Package, Clock, Layers } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Category = "all" | "juices" | "ramadan" | "blends";

const products = [
  {
    id: 1,
    image: "/products/orange-juice.jpg",
    nameKey: "products.product1_name",
    descKey: "products.product1_desc",
    category: "juices" as Category,
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
    tagKey: "products.fresh",
  },
  {
    id: 2,
    image: "/products/pomegranate-juice.jpg",
    nameKey: "products.product2_name",
    descKey: "products.product2_desc",
    category: "juices" as Category,
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
    tagKey: "products.fresh",
  },
  {
    id: 3,
    image: "/products/guava-juice.jpg",
    nameKey: "products.product3_name",
    descKey: "products.product3_desc",
    category: "juices" as Category,
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
    tagKey: "products.natural",
  },
  {
    id: 4,
    image: "/products/carrot-juice.jpg",
    nameKey: "products.product4_name",
    descKey: "products.product4_desc",
    category: "juices" as Category,
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
    tagKey: "products.natural",
  },
  {
    id: 5,
    image: "/products/mango-juice.jpg",
    nameKey: "products.product8_name",
    descKey: "products.product8_desc",
    category: "juices" as Category,
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-100",
    tagKey: "products.fresh",
  },
  {
    id: 6,
    image: "/products/tropical-blend.jpg",
    nameKey: "products.product5_name",
    descKey: "products.product5_desc",
    category: "blends" as Category,
    bgColor: "bg-pink-50",
    borderColor: "border-pink-100",
    tagKey: "products.natural",
  },
  {
    id: 7,
    image: "/products/ramadan-blend.jpg",
    nameKey: "products.product6_name",
    descKey: "products.product6_desc",
    category: "ramadan" as Category,
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
    tagKey: "products.natural",
  },
  {
    id: 8,
    image: "/products/tamarind-juice.jpg",
    nameKey: "products.product7_name",
    descKey: "products.product7_desc",
    category: "ramadan" as Category,
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
    tagKey: "products.natural",
  },
];

const sizes = ["125 مل / 125ml", "250 مل / 250ml", "330 مل / 330ml", "1 لتر / 1L", "2 لتر / 2L", "4 لتر / 4L", "20 لتر / 20L", "50 لتر / 50L"];

const infoCards = [
  { icon: Package, titleKey: "products.packaging_title", textKey: "products.packaging_text", iconBg: "bg-kyan-blue-light", iconColor: "text-kyan-blue" },
  { icon: Clock, titleKey: "products.validity_title", textKey: "products.validity_text", iconBg: "bg-kyan-green-light", iconColor: "text-kyan-green" },
  { icon: Layers, titleKey: "products.sizes_title", textKey: "products.sizes_text", iconBg: "bg-kyan-blue-light", iconColor: "text-kyan-blue" },
];

export default function ProductsPage() {
  const { t, locale, dir } = useI18n();
  const fontFamily = locale === "ar" ? "var(--font-cairo)" : "var(--font-inter)";
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: locale === "ar" ? "الكل" : "All" },
    { key: "juices", label: t("products.category_juices") },
    { key: "ramadan", label: t("products.category_ramadan") },
    { key: "blends", label: t("products.category_blends") },
  ];

  const filtered = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div style={{ fontFamily }} dir={dir}>
      <Header />
      <main>
        {/* ── PAGE HERO ── */}
        <section className="bg-kyan-blue py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 end-0 w-72 h-72 rounded-full bg-kyan-green/10 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kyan-green/20 border border-kyan-green/40 text-kyan-green text-sm font-medium mb-4">
              {t("products.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
              {t("products.title")}
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
              {t("products.subtitle")}
            </p>
            {/* Tag pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {[t("products.no_additives"), t("products.fresh"), t("products.natural")].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FILTER TABS ── */}
        <section className="py-10 bg-white border-b border-kyan-border sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold kyan-transition ${
                    activeCategory === cat.key
                      ? "bg-kyan-blue text-white shadow-md"
                      : "bg-kyan-surface text-muted-foreground hover:bg-kyan-blue-light hover:text-kyan-blue border border-kyan-border"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS GRID ── */}
        <section className="py-20 bg-kyan-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className={`rounded-2xl overflow-hidden bg-white border ${product.borderColor} kyan-card-hover flex flex-col`}
                >
                  {/* Product Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={t(product.nameKey)}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col gap-2 flex-1 p-5">
                    <h3 className="font-bold text-kyan-blue text-base">
                      {t(product.nameKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(product.descKey)}
                    </p>
                  </div>
                  {/* Footer tags */}
                  <div className="flex items-center gap-2 flex-wrap px-5 pb-5 pt-2 border-t border-black/5 mt-auto">
                    <span className="inline-block px-3 py-1 rounded-full bg-kyan-green/15 text-kyan-green text-xs font-semibold">
                      {t(product.tagKey)}
                    </span>
                    <span className="inline-block px-3 py-1 rounded-full bg-kyan-blue/10 text-kyan-blue text-xs font-medium">
                      {locale === "ar" ? "بدون إضافات" : "No Additives"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SIZES ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-kyan-blue text-balance mb-2">
                {t("products.sizes_title")}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
                {t("products.sizes_text")}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {sizes.map((size) => (
                <div
                  key={size}
                  className="px-6 py-3 rounded-2xl bg-kyan-surface border-2 border-kyan-border text-kyan-blue font-semibold text-sm hover:border-kyan-green hover:bg-kyan-green-light kyan-transition"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PACKAGING INFO ── */}
        <section className="py-20 bg-kyan-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {infoCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.titleKey} className="rounded-2xl bg-white border border-kyan-border p-8 flex flex-col gap-4 kyan-card-hover">
                    <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-kyan-blue text-lg">{t(card.titleKey)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t(card.textKey)}</p>
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
                ? "هل تحتاج إلى طلب مخصص أو شراكة تجارية؟"
                : "Need a custom order or business partnership?"}
            </h2>
            <p className="text-blue-200 mb-8 leading-relaxed">
              {locale === "ar"
                ? "نوفر حلولاً مرنة للشركات والموزعين. تواصل معنا لمناقشة احتياجاتك."
                : "We provide flexible solutions for businesses and distributors. Contact us to discuss your needs."}
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
