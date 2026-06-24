import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medscribeai.in"),
  title: "MedScribeAI | Double Your Capacity. Zero New Hires.",
  description:
    "The AI platform for medical transcription operations. Proven at production scale: live across 70+ diverse US healthcare organizations — hospitals, ASCs, physician groups, and clinics.",
  keywords:
    "medical transcription, AI platform, transcription software, healthcare documentation, MTSO, clinical documentation, HIPAA",
  openGraph: {
    title: "MedScribeAI | Double Your Capacity. Zero New Hires.",
    description:
      "The AI platform for medical transcription operations. Proven at production scale across 70+ diverse US healthcare organizations.",
    type: "website",
    url: "https://medscribeai.in",
    siteName: "MedScribeAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedScribeAI | Double Your Capacity. Zero New Hires.",
    description:
      "The AI platform for medical transcription operations. Proven across 70+ diverse US healthcare organizations.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
