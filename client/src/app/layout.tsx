import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import Header from './components/header'
import Hero from './components/Hero'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <CssBaseline />
        <body>
          <Header />
            {children}
        </body>
      </AppRouterCacheProvider>
    </html>
  )
}
