import '@/css/tailwind.css'
import '@/css/prism.css'
import Router from 'next/router'
import React, { useEffect } from 'react'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import siteMetadata from '@/data/siteMetadata'

const isDevelopment = process.env.NODE_ENV === 'development'

Router.events.on('routeChangeStart', () => {
  if (typeof window === 'undefined') {
    return
  }
  void new Audio('/pop.mp3').play()
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
