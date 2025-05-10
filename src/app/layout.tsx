import React from 'react'
import '@/css/main.scss'

export const metadata = {
  title: 'Wacko - Tidlös elegans i äkta skinn',
  description: '',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon_dark.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
