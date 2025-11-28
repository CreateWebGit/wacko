import React from 'react'
import '@/css/main.scss'

export const metadata = {
    title: 'Wacko - Tidlös elegans i äkta skinn',
    description:
        'Upptäck Wacko - exklusiva skinnjackor, väskor och accessoarer i tidlös design. Kvalitet, stil och attityd sedan 1989.',
    icons: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            url: '/favicon.ico',
            media: '(prefers-color-scheme: light)'
        },
        {
            rel: 'icon',
            type: 'image/png',
            url: '/favicon_dark.ico',
            media: '(prefers-color-scheme: dark)'
        }
    ]
}

export const viewport = {
    themeColor: '#8B645A'
}

export default function FrontendRootLayout({ children }) {
    return (
        <html lang="sv">
            <body>{children}</body>
        </html>
    )
}
