import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import './ui/global.css'

export const metadata: Metadata = {
  title: 'Demo car shop',
  description: 'Demo car shop',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <header className="bg-black p-10 flex justify-between">
          Demo de produtos layout root
          <div>
            <a className="text-white mr-5" href="/products">
              Produtos
            </a>
            <a className="text-white" href="/car-shop">
              Carrinho
            </a>
          </div>
        </header>
        {children}
        <footer className="bg-black p-10 fixed w-full" style={{ bottom: 0, right: 0, left: 0 }}>
          <p style={{ color: 'white' }}>Footer dos produtos layout root</p>
        </footer>
      </body>
    </html>
  )
}
