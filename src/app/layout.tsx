import './globals.css'
import { Roboto } from 'next/font/google'
import SiteHeader from "@/components/SiteHeader";
import React from "react";
import SiteFooter from "@/components/SiteFooter";
import { Toaster } from '@/components/ui/toaster';

const roboto = Roboto({ subsets: ['latin', 'cyrillic'], weight: ["100", "300", "400", "500", "700", "900"], display: 'swap' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={"text-xs sm:text-base"}>
      <body className={roboto.className}>
      <SiteHeader />
      {children}
      <SiteFooter />
      <Toaster />
      </body>
    </html>
  )
}
