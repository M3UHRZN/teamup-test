import type { Metadata } from 'next'

import { Open_Sans } from 'next/font/google'
import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ModalProvider } from '@/components/providers/modal-provider'

import { cn } from '@/lib/utils'
import { SocketProvider } from '@/components/providers/socket-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import { Suspense } from 'react'
import Loading from '@/components/loading'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TeamUp | Voice Chat',
  description: 'TeamUp by Metin&Mertcan',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider afterSignInUrl={'/home'} afterSignOutUrl={'/'}>
      <html lang='en' suppressHydrationWarning>
        <body className={cn(font.className)}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={true}
            storageKey='teamup-theme'
            disableTransitionOnChange
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
