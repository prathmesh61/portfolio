import type { Metadata } from "next";
import { Jost, Lato } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
