import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './_components/Nav/Nav'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loot Language',
  description: 'A language translation app for gamers',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
