import React from 'react'
import '@/css/main.scss'

export const metadata = {
  title: 'Wacko - Tidlös elegans i äkta skinn',
  description: '',
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
