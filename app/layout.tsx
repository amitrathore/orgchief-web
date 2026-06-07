import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orgchief — Your AI Exec Team",
  description: "Give your business a CMO, COO, CRO and more — AI executives built for how modern businesses actually run.",
  openGraph: {
    title: "Orgchief — Your AI Exec Team",
    description: "Give your business a CMO, COO, CRO and more — AI executives built for how modern businesses actually run.",
    url: "https://orgchief.com",
    siteName: "Orgchief",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
