'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { GoogleAnalytics } from '@next/third-parties/google'
import { getLocaleFromPathname } from '@/lib/locales'

const CONSENT_COOKIE = 'wacko_cookie_consent'
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

function readConsent() {
    if (typeof document === 'undefined') return null
    const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`))
    return match ? decodeURIComponent(match[1]) : null
}

function writeConsent(value) {
    if (typeof document === 'undefined') return
    document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(
        value
    )}; path=/; max-age=${ONE_YEAR_SECONDS}; samesite=lax`
}

export default function CookieConsent() {
    const [consent, setConsent] = useState(null)
    const [isReady, setIsReady] = useState(false)
    const pathname = usePathname()
    const locale = useMemo(() => getLocaleFromPathname(pathname || '/'), [pathname])
    const copy =
        locale === 'sv'
            ? {
                  message:
                      'Vi använder cookies för att analysera trafik och förbättra upplevelsen. Du kan välja att acceptera eller avvisa analytiska cookies.',
                  decline: 'Avvisa',
                  accept: 'Acceptera'
              }
            : {
                  message:
                      'We use cookies to analyze traffic and improve the experience. You can choose to accept or decline analytics cookies.',
                  decline: 'Decline',
                  accept: 'Accept'
              }

    useEffect(() => {
        setConsent(readConsent())
        setIsReady(true)
    }, [])

    const hasConsent = isReady && consent === 'granted'
    const shouldShowBanner = isReady && consent === null

    const handleConsent = (value) => {
        writeConsent(value)
        setConsent(value)
    }

    return (
        <>
            {hasConsent ? <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} /> : null}
            {shouldShowBanner ? (
                <div
                    style={{
                        position: 'fixed',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1000,
                        background: 'var(--cw-dark-brown-accent)',
                        color: 'white',
                        padding: '16px 16px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '14px'
                    }}
                    role="dialog"
                    aria-live="polite"
                >
                    <p>{copy.message}</p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                            className="button stroked sm"
                            type="button"
                            onClick={() => handleConsent('denied')}
                        >
                            {copy.decline}
                        </button>
                        <button
                            className="button primary sm"
                            type="button"
                            onClick={() => handleConsent('granted')}
                        >
                            {copy.accept}
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    )
}
