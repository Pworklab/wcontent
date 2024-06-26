import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ReturnIndexPathBtn } from "@/components/btn_controller";
import FeedViews from "@/components/news_feed";

const inter = Inter({ subsets: ["latin"] });
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
    <html>
      <body className="bg-fullscreen">
        <section>
          <Header></Header>
          {children}
        </section>
      </body>
    </html>
  );
}
