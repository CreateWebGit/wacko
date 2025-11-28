import { redirect } from 'next/navigation'
import { DEFAULT_LOCALE, prefixPath } from '@/lib/locales'

export default function FrontendEntryPage() {
    redirect(prefixPath(DEFAULT_LOCALE, '/'))
}
