import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./providers";
import Navbar from "@/components/navbar";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Portfolio | TechWithTwin",
  description: "Developer Portfolio by TechWithTwin",
  creator: "TechWithTwin",
  icons: {
    icon: "/boni.png",
  },
  keywords: ["TechWithTwin"],
};
