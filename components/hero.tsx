import { ShieldCheck, Zap, Gift, LogIn } from 'lucide-react'

const badges = [
  { icon: ShieldCheck, label: 'Лицензия Curacao' },
  { icon: Zap, label: 'Выплаты СБП 5 мин' },
  { icon: Gift, label: 'Бонус 100%' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-casino.png"
          alt="La Casino — золотые карты, рулетка и фишки на тёмном фоне"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="mb-4 inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          Официальный сайт La Casino 2026
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
          La Casino — официальный сайт и рабочее зеркало <span className="text-primary">Ля Казино</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          La Casino (Ля Казино) — это лицензионное онлайн-казино с быстрыми выплатами, тысячами слотов и
          щедрыми бонусами. Используйте рабочее зеркало La Casino, чтобы играть онлайн без блокировок в
          любое время суток.
        </p>

        <ul className="mt-8 flex flex-wrap gap-3">
          {badges.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/70 px-4 py-2 text-sm font-medium text-card-foreground"
            >
              <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#registraciya"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-accent"
          >
            <LogIn className="h-5 w-5" aria-hidden="true" />
            Войти и играть
          </a>
          <a
            href="#zerkalo"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-7 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            Рабочее зеркало на сегодня
          </a>
        </div>
      </div>
    </section>
  )
}
