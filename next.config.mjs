import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL('https://utfs.io/**')],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
