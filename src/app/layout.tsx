import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Euphoria_Script, Kumbh_Sans } from "next/font/google";
export const metadata: Metadata = {
  title: "Portfolio Prathmesh Pol",
  description:
    "Experienced in building full stack web applications,Website UI's and Web Designes",
};
const europa = Euphoria_Script({ subsets: ["latin"], weight: ["400"] });
const kumbh = Kumbh_Sans({ subsets: ["latin"], weight: ["100", "400", "600"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className={kumbh.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
