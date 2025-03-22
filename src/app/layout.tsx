import type { Metadata } from "next";
import TopMenuServer from "@/components/TopMenuServer";
import { Sarabun } from "next/font/google"; // Thai font import
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import "./globals.css";

const sarabun = Sarabun({ subsets: ["thai", "latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const nextAuthSession = await getServerSession(authOptions);

  return (
    <html lang="th">
      <body className={sarabun.className}>
        <ReduxProvider>
          <NextAuthProvider session={nextAuthSession}>
            <TopMenuServer />
            {children}
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
