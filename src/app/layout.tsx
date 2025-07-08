import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tabero - AI Menu Translation App",
  description: "Breaking down language barriers, one menu at a time. Instantly translate menus in 26 languages with AI-powered accuracy.",
  keywords: "menu translation, travel app, food translation, restaurant menu, AI translation",
  authors: [{ name: "Tabero" }],
  openGraph: {
    title: "Tabero - AI Menu Translation App",
    description: "Breaking down language barriers, one menu at a time. Instantly translate menus in 26 languages.",
    url: "https://tabero.app",
    siteName: "Tabero",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
