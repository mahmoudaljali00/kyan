"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactInfoItems = [
  { icon: MapPin, titleKey: "contact.address_title", valueKey: "contact.address_value", valueKey2: "", href1: null, href2: null },
  { icon: Mail, titleKey: "contact.email_title", valueKey: "contact.email_value", valueKey2: "contact.email_value2", href: "mailto:Info@Kyan.sa", href2: "mailto:noon.Adam@kyan.sa"  },
  { icon: Phone, titleKey: "contact.phone_title", valueKey: "contact.phone_value", valueKey2: "contact.phone_value2", href: "tel:+966595777447", href2: "tel:+966590026897" },
  { icon: Clock, titleKey: "contact.hours_title", valueKey: "contact.hours_value",valueKey2: "", href1: null, href2: null },
];

export default function ContactPage() {
  const { t, locale, dir } = useI18n();
  const fontFamily = locale === "ar" ? "var(--font-cairo)" : "var(--font-inter)";

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    setSubmitted(true);
  };

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
              {t("contact.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>
        </section>

        {/* ── FORM + INFO ── */}
        <section className="py-24 bg-kyan-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

              {/* Contact Info column */}
              <div className="lg:col-span-2 flex flex-col gap-5">
                {/* Contact cards */}
                {contactInfoItems.map((item) => {
                  const Icon = item.icon;
                  const value = t(item.valueKey);
                  const value2 = t(item.valueKey2);
                  return (
                    <div
                      key={item.titleKey}
                      className="rounded-2xl bg-white border border-kyan-border p-5 flex items-start gap-4 kyan-card-hover"
                    >
                      <div className="w-10 h-10 rounded-xl bg-kyan-blue-light flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-kyan-blue" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-kyan-green uppercase tracking-wider mb-0.5">
                          {t(item.titleKey)}
                        </p>
                        {item.href ? (
                          <>  
                          <a
                            href={item.href}
                            className="text-kyan-blue font-medium text-sm hover:text-kyan-green kyan-transition px-2"
                            dir="ltr"
                          >
                            {value}
                          </a>
                          -
                          <a
                            href={item.href2}
                            className="text-kyan-blue font-medium text-sm hover:text-kyan-green kyan-transition px-2"
                            dir="ltr"
                          >
                            {value2}
                          </a>
                          </>
                        ) : (
                          <p className="text-foreground font-medium text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Map placeholder */}
                <div className="rounded-2xl bg-kyan-blue-light border border-kyan-border overflow-hidden h-48 flex items-center justify-center">
                  <div className="text-center px-6">
                    <a href="https://maps.app.goo.gl/pgGfVtt1XhbW8ZXYA?g_st=iw" target="_blank" rel="noopener noreferrer">
                      <MapPin className="w-8 h-8 text-kyan-blue mx-auto mb-2 opacity-50" />
                      <p className="text-kyan-blue text-sm font-medium opacity-60">
                        {t("contact.map_placeholder")}
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              {/* Form column */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl bg-white border border-kyan-border p-8 md:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                      <div className="w-16 h-16 rounded-full bg-kyan-green-light flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-kyan-green" />
                      </div>
                      <h2 className="text-2xl font-bold text-kyan-blue">
                        {locale === "ar" ? "تم إرسال رسالتك بنجاح!" : "Message sent successfully!"}
                      </h2>
                      <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                        {locale === "ar"
                          ? "شكراً لتواصلك معنا. سيتواصل معك فريقنا في أقرب وقت ممكن."
                          : "Thank you for reaching out. Our team will get back to you as soon as possible."}
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", message: "" }); }}
                        className="mt-2 px-6 py-3 rounded-full bg-kyan-blue text-white text-sm font-semibold hover:bg-kyan-green kyan-transition"
                      >
                        {locale === "ar" ? "إرسال رسالة أخرى" : "Send another message"}
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold text-kyan-blue mb-6">
                        {locale === "ar" ? "أرسل لنا رسالة" : "Send us a message"}
                      </h2>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="name" className="text-xs font-semibold text-kyan-blue uppercase tracking-wider">
                              {t("contact.name")} <span className="text-destructive">*</span>
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={form.name}
                              onChange={handleChange}
                              placeholder={t("contact.name_placeholder")}
                              className="rounded-xl border border-kyan-border bg-kyan-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-kyan-blue focus:ring-2 focus:ring-kyan-blue/10 kyan-transition"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="company" className="text-xs font-semibold text-kyan-blue uppercase tracking-wider">
                              {t("contact.company")}
                            </label>
                            <input
                              id="company"
                              name="company"
                              type="text"
                              value={form.company}
                              onChange={handleChange}
                              placeholder={t("contact.company_placeholder")}
                              className="rounded-xl border border-kyan-border bg-kyan-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-kyan-blue focus:ring-2 focus:ring-kyan-blue/10 kyan-transition"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-xs font-semibold text-kyan-blue uppercase tracking-wider">
                              {t("contact.email")} <span className="text-destructive">*</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={form.email}
                              onChange={handleChange}
                              placeholder={t("contact.email_placeholder")}
                              dir="ltr"
                              className="rounded-xl border border-kyan-border bg-kyan-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-kyan-blue focus:ring-2 focus:ring-kyan-blue/10 kyan-transition"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="phone" className="text-xs font-semibold text-kyan-blue uppercase tracking-wider">
                              {t("contact.phone")}
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder={t("contact.phone_placeholder")}
                              dir="ltr"
                              className="rounded-xl border border-kyan-border bg-kyan-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-kyan-blue focus:ring-2 focus:ring-kyan-blue/10 kyan-transition"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="message" className="text-xs font-semibold text-kyan-blue uppercase tracking-wider">
                            {t("contact.message")} <span className="text-destructive">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            placeholder={t("contact.message_placeholder")}
                            className="rounded-xl border border-kyan-border bg-kyan-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-kyan-blue focus:ring-2 focus:ring-kyan-blue/10 kyan-transition resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="self-start inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-kyan-blue hover:bg-kyan-green kyan-transition text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          ) : (
                            <Send className="w-4 h-4" />
                          )}
                          {loading
                            ? (locale === "ar" ? "جاري الإرسال..." : "Sending...")
                            : t("contact.submit")}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
