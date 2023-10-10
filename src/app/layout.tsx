import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], style: 'normal', weight: ['400', '500', '800', '600'] })

export const metadata: Metadata = {
  title: 'PixelTI - Gateways',
  description: 'Gerenciador de gateways',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
