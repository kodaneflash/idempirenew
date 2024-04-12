import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'IDEmpire - #1 Trusted Scannable Fake ID Vendor',
  title: 'IDEmpire',
  description:
    'IDEmpire is the #1 trusted fake ID vendor that offers scannable barcodes, advanced holograms, microprint, laser engraving & more. We offer fast shipping, fair prices & quality customer support.',
  images: [
    {
      url: 'https://idempire.us/og-image.jpg',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
