import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orgchief — Your C-Suite Has a New Member",
  description: "Orgchief creates AI Employees at the CxO level — purpose-built for their function, always on, always learning.",
  openGraph: {
    title: "Orgchief — Your C-Suite Has a New Member",
    description: "Orgchief creates AI Employees at the CxO level — purpose-built for their function, always on, always learning.",
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
    <html lang="en" className="h-full">
      <body className="min-h-full w-full">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
