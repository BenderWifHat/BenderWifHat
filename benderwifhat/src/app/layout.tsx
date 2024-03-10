import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BENDERWIFHAT",
  description: "Bender puts on his hat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <body className={inter.className}>{children}</body>
    </div>
  );
}
