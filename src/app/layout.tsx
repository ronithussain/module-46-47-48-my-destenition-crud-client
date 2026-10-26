import type { Metadata } from "next";
import { Cormorant_Garamond, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import { Toaster } from "sonner";

const JosefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Wanderlast | Discover Your Next Adventure",
  description:
    "Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${JosefinSans.variable} ${CormorantGaramond.variable} ${JosefinSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Toaster
          position="top-right"
          richColors
          closeButton
          expand={false}
          duration={3000}
          toastOptions={{
            classNames: {
              toast:
                "rounded-xl shadow-lg border",
              title: "font-semibold text-sm",
              description: "text-sm opacity-80",
            },
          }}
        />
        <Footer/>
      </body>
    </html>
  );
}
