import type { Metadata } from 'next'
import '@/styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/dist/next/index';
import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from 'geist/font/sans';
import {cn} from "@/lib/utils";
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from "@/components/navbar";
import React from "react";
import Toast from "@/components/toast";

export const metadata: Metadata = {
  title: {
    template: 'H3xWizz | %s',
    default: 'H3xWizz',
  },
  description: 'H3xWizz - Official Website',
  icons: {
    icon: '/logo-light.png'
  }
}

export const revalidate = 1

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(GeistSans.className, 'bg-background')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
            <div className={"flex"}>
              <Navbar/>
              {children}
            </div>
          <Toast/>
          <Analytics/>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
