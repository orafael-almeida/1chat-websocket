import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "1Chat",
  description: "Um chat, conversas infinitas",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <body
              className={
                inter.className +
                "min-h-screen pt-[80px] sm:pt-[90px] md:pt-[100px]"
              }
            >
              <Header />
              {children}
            </body>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
