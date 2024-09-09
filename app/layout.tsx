"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const metadata: Metadata = {
  title: "Jorge Perez",
  description: "Lawyer website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag("config", "G-WSDKW650C9", {
        page_path: url,
      });
    };

    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=G-WSDKW650C9`;
    document.head.appendChild(gtagScript);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-WSDKW650C9');
    `;
    document.head.appendChild(inlineScript);

    const handleComplete = () => handleRouteChange(window.location.pathname);

    router.push(window.location.pathname);
    window.addEventListener("popstate", handleComplete);

    return () => {
      window.removeEventListener("popstate", handleComplete);
    };
  }, [router]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen w-full scrollbar-hide scroll-smooth">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <div className="fixed top-0 z-20 w-full">
              <Navbar />
            </div>

            <div
              className="flex-grow"
              style={{ height: "calc(100vh - navbarHeight - footerHeight)" }}
            >
              {children}
            </div>

            <div className="flex justify-center">
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
