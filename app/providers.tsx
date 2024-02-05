"use client";

// import { NextUIProvider } from "@nextui-org/react";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { NextUIProvider } from "@nextui-org/react";

// This component will include both the NextThemesProvider and NextUIProvider
export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {" "}
      {/* This is the outer provider for theme handling */}
       <NextUIProvider>  {/* This is the inner provider for NextUI */}
      {children}
       </NextUIProvider> 
    </NextThemesProvider>
  );
}
