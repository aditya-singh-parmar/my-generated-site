import './globals.css'
import type { Metadata } from 'next'

export const metadata = {
  title: "My Site",
  description: "Built with Website Builder",
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
