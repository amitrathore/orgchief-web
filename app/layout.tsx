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
    images: [
      {
        url: "https://orgchief.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Orgchief — Your AI Exec Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orgchief — Your AI Exec Team",
    description: "Give your business a CMO, COO, CRO and more — AI executives built for how modern businesses actually run.",
    images: ["https://orgchief.com/opengraph-image.png"],
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
