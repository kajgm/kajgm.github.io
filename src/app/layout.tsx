import type { Metadata } from "next";
import { Roboto, Permanent_Marker } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const pMarker = Permanent_Marker({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-permanent-marker",
});

export const metadata: Metadata = {
  title: "Kaj Grant-Mathiasen",
  description: "Kaj Grant-Mathiasen - Cloud Support Engineer @ Canonical",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="jeyvrEOo_8tr-0MBDz4_ic_g5ijVib97tXqPLmJ7TDc"
        />
      </head>
      <body
        className={
          `${roboto.variable} ${roboto.className} ${pMarker.variable} ` +
          "dark:bg-gradient-to-br dark:from-neutral-950 dark:to-neutral-900 bg-gradient-to-tr from-neutral-300 to-white"
        }
      >
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            {children}
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
