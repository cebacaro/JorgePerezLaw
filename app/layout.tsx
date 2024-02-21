import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jorge Perez",
  description: "Lawyer website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen w-full scrollbar-hide scroll-smooth ">
        <Providers>
          <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <div className="fixed top-0 z-20 w-full">
              <Navbar />
            </div>

            {/* Main Content */}
            <div
              className="flex-grow"
              style={{ height: "calc(100vh - navbarHeight - footerHeight)" }}
            >
              {children}
            </div>

            {/* Footer */}
            <div className="flex justify-center">
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
