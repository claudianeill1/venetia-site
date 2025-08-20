import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redhat = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-redhat",
  display: "swap",
});

export const metadata = {
  title: "Venetia Wynter-Blyth — Nurse · Innovator · Entrepreneur",
  description: "Oncology nursing, digital health, and service transformation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={redhat.variable}>{children}</body>
    </html>
  );
}