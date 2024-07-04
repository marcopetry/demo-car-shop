import type { Metadata } from 'next'

import '../ui/global.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="flex flex-col justify-end my-20">{children}</main>
}
