import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "Portfolio Prathmesh Pol",
  description:
    "Experienced in building full stack web applications,Website UI's and Web Designes",
};

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
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
