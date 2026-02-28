import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "كيان فودز | Kyan Foods — عصائر طبيعية طازجة",
  description:
    "كيان فودز — أول مصنع متخصص لعصائر الفاكهة الطازجة في المملكة العربية السعودية. عصائر طبيعية 100% بدون إضافات أو مواد حافظة.",
  keywords: "كيان فودز, عصائر طازجة, عصير طبيعي, مصنع عصائر, المملكة العربية السعودية, Kyan Foods",
  openGraph: {
    title: "كيان فودز | Kyan Foods",
    description: "أول مصنع متخصص لعصائر الفاكهة الطازجة في المملكة العربية السعودية",
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
  },
  robots: "index, follow",
};

export const viewport = {
  themeColor: "#19448E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
