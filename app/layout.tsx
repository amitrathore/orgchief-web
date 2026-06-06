import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        {/* Set theme immediately before hydration to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('orgchief-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full w-full">
        <div className="grain-overlay" aria-hidden="true" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
