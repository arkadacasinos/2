import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
})

const SITE_URL = 'https://la1casino.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'La Casino — официальный сайт и рабочее зеркало Ля Казино играть онлайн',
  description:
    'La Casino (Ля Казино) — официальный сайт и рабочее зеркало на сегодня. Играть онлайн в слоты и игровые автоматы, бонус 100%, выплаты по СБП за 5 минут. Ля казино официальный сайт: вход и регистрация.',
  generator: 'v0.app',
  applicationName: 'La Casino',
  keywords: [
    'la casino',
    'la casino зеркало',
    'la casino играть',
    'la casino официальный',
    'la casino официальный сайт',
    'la казино',
    'ля казино',
    'ля казино зеркало',
    'ля казино зеркало рабочее',
    'ля казино играть',
    'ля казино онлайн',
    'ля казино официальный',
    'ля казино официальный сайт',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'La Casino — официальный сайт и рабочее зеркало Ля Казино',
    description:
      'Ля Казино официальный сайт и рабочее зеркало на сегодня. La Casino играть онлайн: слоты, бонусы, быстрые выплаты по СБП.',
    url: SITE_URL,
    siteName: 'La Casino',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0c0f1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${manrope.variable} bg-background`}>
      <head>
        {/* Здесь можно вставлять дополнительные пользовательские теги */}
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content="#0c0f1a" />
        <meta name="rating" content="adult" />
        <meta name="geo.region" content="RU" />
        <meta property="og:locale" content="ru_RU" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
