import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Inter } from "next/font/google";
import { Rajdhani } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "EAD Plataforma - Solução completa para o ensino a distância!",
  description: "Solução completa para o ensino a distância!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' ' + rajdhani.className}>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
