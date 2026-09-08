'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Где найти La Casino официальный сайт?',
    a: 'La Casino официальный сайт доступен по основному адресу бренда, а также через актуальное рабочее зеркало. Ля казино официальный сайт всегда предлагает вход, регистрацию и полный каталог игр. Если основной домен заблокирован, используйте La Casino зеркало из раздела «Доступ».',
  },
  {
    q: 'Что делать, если не открывается La Casino зеркало?',
    a: 'Если La Casino зеркало временно недоступно, обновите страницу, включите VPN или смените DNS. Мы регулярно публикуем Ля казино зеркало рабочее на сегодня, поэтому свежая ссылка всегда есть в разделе о зеркалах. Ля Казино зеркало ведёт на тот же аккаунт, повторная регистрация не нужна.',
  },
  {
    q: 'Как в La Casino играть на реальные деньги?',
    a: 'Чтобы La Casino играть на деньги, зарегистрируйтесь, пополните счёт по СБП, карте или в крипте и выберите слот. Формат ля казино онлайн позволяет ля казино играть прямо в браузере без скачивания. Новичкам доступен демо-режим на виртуальные фишки.',
  },
  {
    q: 'Насколько безопасно Ля Казино и быстрые ли выплаты?',
    a: 'Ля Казино работает по лицензии, использует шифрование и проходит аудит честности игр. La казино официальный сервис выплачивает выигрыши по СБП обычно за 5 минут после верификации. Ля казино официальный клуб не берёт комиссию и не задерживает вывод без причины.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-14 sm:px-6">
      <div className="mb-4 flex items-center gap-3 text-primary">
        <HelpCircle className="h-6 w-6" aria-hidden="true" />
        <span className="text-sm font-semibold uppercase tracking-wider">FAQ</span>
      </div>
      <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
        Частые вопросы о La Casino и Ля Казино
      </h2>

      <div className="mt-8 space-y-3">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold text-card-foreground">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <p className="border-t border-border px-5 py-4 leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
