import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shadcn/ui Progress bar max reproduction",
  description:
    "A reproduction of the progress bar issue, where the max does not work if it isn't 100 - https://github.com/shadcn-ui/ui/issues/3082",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
