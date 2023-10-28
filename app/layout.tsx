import { Footer } from "@/components/footer/footer_obsolete";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "써치라이트 SEARCHLIGHT",
  description: "By LOFA SEOUL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
