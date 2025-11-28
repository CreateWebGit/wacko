import React from 'react'
import { notFound } from 'next/navigation'
import { SUPPORTED_LOCALES, validateLocale } from '@/lib/locales'

export const revalidate = 60

type RootLayoutProps = {
  children: React.ReactNode
  params: { locale?: string }
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale: paramsLocale } = await params
  const locale = validateLocale(paramsLocale ?? '')

  if (!locale) {
    notFound()
  }

  return <main data-locale={locale}>{children}</main>
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }))
}
