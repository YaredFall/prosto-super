import './globals.css'
import { Roboto } from 'next/font/google'
import SiteHeader from "@/components/SiteHeader";
import React from "react";

const roboto = Roboto({ subsets: ['cyrillic'], weight: ["100", "300", "400", "500", "700", "900"] })

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
    <html lang="ru">
      <body className={roboto.className}>
      <SiteHeader />
      {children}
      </body>
    </html>
  )
}
