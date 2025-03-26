import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1Chat",
  description: "Um chat, conversas infinitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
