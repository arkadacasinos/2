'use client'

import { useState } from 'react'
import { Star, MessageSquare, Send } from 'lucide-react'

type Review = {
  name: string
  date: string
  rating: number
  text: string
}

const seedReviews: Review[] = [
  {
    name: 'Дмитрий',
    date: '02.09.2026',
    rating: 5,
    text: 'La Casino официальный сайт реально не тормозит. Вывел по СБП за 4 минуты, приятно удивлён. Теперь захожу через La Casino зеркало, когда основной адрес лежит.',
  },
  {
    name: 'Алина',
    date: '28.08.2026',
    rating: 5,
    text: 'Ля Казино порадовало бонусом 100% и фриспинами. В ля казино онлайн играю с телефона, всё удобно и быстро грузится.',
  },
  {
    name: 'Сергей',
    date: '21.08.2026',
    rating: 4,
    text: 'Начал La Casino играть с демо, потом перешёл на реальные ставки. Слотов много, RTP честные. Ля казино зеркало рабочее нашёл сразу, вопросов нет.',
  },
  {
    name: 'Мария',
    date: '15.08.2026',
    rating: 5,
    text: 'Ля казино официальный сайт понравился поддержкой — ответили ночью за пару минут. Верификацию прошла быстро, вывод на карту пришёл в тот же день.',
  },
]

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(seedReviews)
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [rating, setRating] = useState(5)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !text.trim()) return
    const newReview: Review = {
      name: name.trim(),
      date: new Date().toLocaleDateString('ru-RU'),
      rating,
      text: text.trim(),
    }
    setReviews([newReview, ...reviews])
    setName('')
    setText('')
    setRating(5)
  }

  return (
    <section id="otzyvy" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-14 sm:px-6">
      <div className="mb-4 flex items-center gap-3 text-primary">
        <MessageSquare className="h-6 w-6" aria-hidden="true" />
        <span className="text-sm font-semibold uppercase tracking-wider">Отзывы</span>
      </div>
      <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
        Отзывы и комментарии игроков La Casino
      </h2>

      <form onSubmit={handleSubmit} className="mt-8 rounded-xl border border-border bg-card p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
            aria-label="Ваше имя"
            className="rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <div className="flex items-center gap-1" role="radiogroup" aria-label="Оценка">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setRating(n)}
                aria-label={`Оценка ${n}`}
                aria-pressed={rating === n}
              >
                <Star
                  className={`h-6 w-6 ${n <= rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ваш комментарий об La Casino / Ля Казино..."
          aria-label="Ваш комментарий"
          rows={3}
          className="mt-4 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        />
        <button
          type="submit"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-accent"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Отправить отзыв
        </button>
      </form>

      <ul className="mt-8 space-y-4">
        {reviews.map((r, i) => (
          <li key={`${r.name}-${i}`} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between gap-4">
              <span className="font-semibold text-card-foreground">{r.name}</span>
              <span className="text-sm text-muted-foreground">{r.date}</span>
            </div>
            <div className="mt-1 flex gap-0.5" aria-label={`Оценка ${r.rating} из 5`}>
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className={`h-4 w-4 ${s < r.rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">{r.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
