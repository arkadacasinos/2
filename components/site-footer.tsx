import { Diamond } from 'lucide-react'

const hashtags = [
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
]

function toHashtag(phrase: string) {
  return (
    '#' +
    phrase
      .split(' ')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join('')
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Diamond className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-bold text-foreground">
            La<span className="text-primary"> Casino</span>
          </span>
        </div>

        <nav aria-label="Популярные запросы" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {hashtags.map((tag) => (
              <li key={tag}>
                <a
                  href="#top"
                  className="inline-block rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {toHashtag(tag)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            La Casino (Ля Казино) — информационный обзор бренда. Азартные игры связаны с риском.
            Играйте ответственно и только на средства, которые готовы потратить.
          </p>
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary text-sm font-bold text-primary">
            18+
          </span>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          © 2026 La Casino. Все права защищены.
        </p>
      </div>
    </footer>
  )
}
