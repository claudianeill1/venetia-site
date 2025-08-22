// app/layout.js
import { Red_Hat_Display, Reem_Kufi_Ink } from "next/font/google";
import "./globals.css";

const redhat = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-redhat",
  display: "swap",
});

const reemkufi = Reem_Kufi_Ink({
  subsets: ["latin"],
  weight: ["400"],     // adjust if you only want one weight
  variable: "--font-reemkufi",
  display: "swap",
});

export const metadata = {
  title: "Venetia Wynter-Blyth — Nurse · Innovator · Entrepreneur",
  description: "Oncology nursing, digital health, and service transformation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* expose both font variables on <body> */}
      <body className={`${redhat.variable} ${reemkufi.variable}`}>{children}</body>
    </html>
  );
}

export const viewport = { width: "device-width", initialScale: 1 };