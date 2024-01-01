import type { Metadata } from 'next'
import '@/styles/globals.css'

import { GeistSans } from 'geist/font/sans';
import {cn} from "@/lib/utils";
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from "@/components/navbar";
import React from "react";

export const metadata: Metadata = {
  title: 'H3xWizz',
  description: 'H3xWizz - Official Website',
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
        </ThemeProvider>
      </body>
    </html>
  )
}
