import { Diamond, LogIn } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="La Casino — на главную">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Diamond className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">
            La<span className="text-primary"> Casino</span>
          </span>
        </a>

        <a
          href="#registraciya"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent sm:px-5 sm:text-base"
        >
          <LogIn className="h-4 w-4" aria-hidden="true" />
          Вход / Регистрация
        </a>
      </div>
    </header>
  )
}
