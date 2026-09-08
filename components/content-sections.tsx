import {
  BadgeCheck,
  Globe,
  ShieldCheck,
  Gamepad2,
  ListChecks,
  Gift,
  Wallet,
  Smartphone,
} from 'lucide-react'

const providers = [
  { name: 'Play’n GO', game: 'Book of Dead', rtp: '96.21%' },
  { name: 'NetEnt', game: 'Starburst', rtp: '96.09%' },
  { name: 'Pragmatic Play', game: 'Gates of Olympus', rtp: '96.50%' },
  { name: 'Nolimit City', game: 'Mental', rtp: '96.08%' },
  { name: 'Push Gaming', game: 'Jammin’ Jars', rtp: '96.83%' },
  { name: 'Yggdrasil', game: 'Vikings Go Berzerk', rtp: '96.10%' },
  { name: 'Big Time Gaming', game: 'Bonanza Megaways', rtp: '96.00%' },
  { name: 'Hacksaw Gaming', game: 'Wanted Dead or a Wild', rtp: '96.38%' },
]

export function ContentSections() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      {/* Секция 1 */}
      <section id="obzor" className="scroll-mt-24">
        <div className="mb-4 flex items-center gap-3 text-primary">
          <Globe className="h-6 w-6" aria-hidden="true" />
          <span className="text-sm font-semibold uppercase tracking-wider">Обзор</span>
        </div>
        <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
          La Casino официальный сайт: полный обзор Ля Казино
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          La Casino — это современный игровой клуб, который за короткое время стал одной из самых
          обсуждаемых площадок в русскоязычном сегменте. Официальный сайт La Casino предлагает
          пользователю всё, что нужно для комфортной игры: удобную навигацию, тысячи лицензионных слотов,
          прозрачные правила и оперативную поддержку. Когда игроки ищут La Casino официальный сайт, они
          хотят получить гарантию честности и безопасности, и именно это даёт бренд La Casino. Здесь
          каждая транзакция защищена, а генератор случайных чисел проходит независимый аудит.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Многие новички впервые слышат про Ля Казино от друзей или из тематических обзоров. Ля Казино —
          это русскоязычное название того же бренда La Casino, поэтому вы можете встретить оба написания:
          латиницей La Casino и кириллицей Ля Казино. Независимо от того, как вы вводите запрос, вы
          попадаете на один и тот же официальный ресурс. Ля Казино ценят за честные выплаты, а La Casino
          официальный сайт регулярно обновляет каталог игр и добавляет новых провайдеров.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Отдельно стоит сказать про интерфейс. La Casino официальный сайт построен по принципу Mobile
          First, то есть страница одинаково удобно открывается и на смартфоне, и на планшете, и на
          компьютере. Кнопки крупные, разделы логично сгруппированы, а поиск по слотам работает мгновенно.
          Такой подход выгодно отличает La Casino от устаревших конкурентов и объясняет, почему всё больше
          игроков выбирают именно этот бренд.
        </p>

        <h2 className="mt-10 font-serif text-2xl font-bold text-foreground sm:text-3xl">
          La казино официальный: почему выбирают бренд
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          La казино официальный статус подтверждается действующей игорной лицензией, а значит площадка
          обязана соблюдать строгие требования по защите игроков. La казино работает по международным
          стандартам ответственной игры: здесь есть лимиты на депозиты, возможность самоисключения и
          инструменты контроля времени в игре. Когда пользователь выбирает La Casino официальный ресурс,
          он получает не просто витрину со слотами, а полноценный сервис с гарантиями.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            'Лицензия и независимый аудит честности игр в La Casino.',
            'Более 5000 слотов и живых игр от топовых провайдеров.',
            'Быстрые выплаты по СБП, на карты и в криптовалюте.',
            'Круглосуточная поддержка на русском языке в Ля Казино.',
            'Приветственный бонус 100% и регулярные акции.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Именно совокупность этих факторов делает La казино официальный сайт привлекательным для
          требовательной аудитории. Игроки понимают, что La Casino не исчезнет с их деньгами, а Ля Казино
          всегда выплатит выигрыш согласно правилам.
        </p>
      </section>

      {/* Секция 2 */}
      <section id="zerkalo" className="mt-16 scroll-mt-24">
        <div className="mb-4 flex items-center gap-3 text-primary">
          <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          <span className="text-sm font-semibold uppercase tracking-wider">Доступ</span>
        </div>
        <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
          La Casino зеркало: рабочее зеркало Ля Казино на сегодня
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          La Casino зеркало — это точная копия основного сайта, размещённая на другом домене. Зеркало
          нужно для тех случаев, когда основной адрес недоступен из-за блокировки провайдера или
          технических работ. La Casino зеркало полностью повторяет функционал оригинала: тот же логин, тот
          же баланс, те же бонусы и та же история игр. Вам не нужно повторно проходить регистрацию — Ля
          Казино зеркало синхронизировано с основным аккаунтом.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Мы рекомендуем сохранять актуальное La Casino зеркало в закладки, чтобы всегда иметь быстрый
          доступ к играм. Ля Казино зеркало обновляется по мере необходимости, поэтому даже при жёстких
          ограничениях вы сможете зайти в личный кабинет. Использовать Ля Казино зеркало абсолютно
          безопасно: соединение шифруется, а данные карт и паспорта надёжно защищены.
        </p>

        <h2 className="mt-10 font-serif text-2xl font-bold text-foreground sm:text-3xl">
          Ля казино зеркало рабочее: как зайти при блокировке
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Если основной адрес не открывается, найдите Ля казино зеркало рабочее на сегодня. Ля казино
          зеркало рабочее — это проверенная ссылка, которая гарантированно ведёт на официальный сервер. Мы
          публикуем актуальное Ля казино зеркало рабочее и обновляем его сразу после появления новых
          ограничений, чтобы вы не теряли время.
        </p>
        <ol className="mt-6 space-y-3">
          {[
            'Откройте актуальную ссылку La Casino зеркало из этого раздела или из письма поддержки.',
            'Войдите под своим логином и паролем — данные полностью совпадают с основным сайтом.',
            'Если зеркало временно недоступно, включите VPN или смените DNS и попробуйте снова.',
            'Сохраните Ля казино зеркало рабочее в закладки браузера для быстрого доступа.',
          ].map((item, i) => (
            <li key={item} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Помните: Ля Казино зеркало не требует установки сомнительных программ. Достаточно перейти по
          ссылке и авторизоваться. Так вы всегда останетесь в игре, а La Casino зеркало обеспечит стабильный
          доступ даже при региональных ограничениях.
        </p>
      </section>

      {/* Секция 3 */}
      <section id="sloty" className="mt-16 scroll-mt-24">
        <div className="mb-4 flex items-center gap-3 text-primary">
          <Gamepad2 className="h-6 w-6" aria-hidden="true" />
          <span className="text-sm font-semibold uppercase tracking-wider">Игры</span>
        </div>
        <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
          La Casino играть в слоты и игровые автоматы онлайн
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Начать La Casino играть можно буквально в один клик. Каталог насчитывает более пяти тысяч
          позиций: классические трёхбарабанные автоматы, современные видеослоты с механикой Megaways,
          настольные игры и живые дилеры. La Casino играть предлагает как в демо-режиме на виртуальные
          фишки, так и на реальные деньги. Это удобно для новичков: сначала можно изучить механику
          бесплатно, а потом La Casino играть уже на настоящую ставку.
        </p>
        <img
          src="/images/slots.png"
          alt="Барабаны онлайн-слота La Casino с золотыми символами"
          loading="lazy"
          className="mt-6 w-full rounded-xl border border-border object-cover"
        />
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Отдельного внимания заслуживает раздел ля казино онлайн. Формат ля казино онлайн означает, что
          все игры запускаются прямо в браузере без скачивания клиента. Вы можете ля казино онлайн
          открывать со смартфона, планшета или ПК — прогресс сохраняется на сервере. Благодаря технологии
          HTML5 слоты в ля казино онлайн загружаются быстро и работают плавно даже на слабом интернете.
        </p>

        <h2 className="mt-10 font-serif text-2xl font-bold text-foreground sm:text-3xl">
          Ля казино играть: провайдеры и RTP
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Прежде чем ля казино играть на реальные деньги, полезно изучить показатель RTP — процент
          возврата игроку. Чем выше RTP, тем чаще слот отдаёт выигрыши на длинной дистанции. В таблице
          ниже собраны популярные игры, в которые можно ля казино играть прямо сейчас. Мы советуем ля
          казино играть в слоты с RTP от 96% и выше — это оптимальный баланс риска и доходности.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[480px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-card text-card-foreground">
                <th className="px-4 py-3 font-semibold">Провайдер</th>
                <th className="px-4 py-3 font-semibold">Популярный слот</th>
                <th className="px-4 py-3 font-semibold">RTP</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((p, i) => (
                <tr key={p.name} className={i % 2 === 0 ? 'bg-background' : 'bg-card/40'}>
                  <td className="px-4 py-3 font-medium text-foreground">{p.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{p.game}</td>
                  <td className="px-4 py-3 font-semibold text-primary">{p.rtp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Каждый провайдер в La Casino проходит проверку, а показатели RTP берутся из официальной
          документации разработчиков. Так вы можете быть уверены, что цифры не занижены. Начинайте La
          Casino играть с небольших ставок, постепенно увеличивая банк по мере роста опыта.
        </p>
      </section>

      {/* Секция 4 */}
      <section id="registraciya" className="mt-16 scroll-mt-24">
        <div className="mb-4 flex items-center gap-3 text-primary">
          <ListChecks className="h-6 w-6" aria-hidden="true" />
          <span className="text-sm font-semibold uppercase tracking-wider">Регистрация</span>
        </div>
        <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
          Ля казино официальный сайт: регистрация и вход
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Регистрация на Ля казино официальный сайт занимает меньше минуты. Ля казино официальный сайт не
          требует сложных анкет: достаточно указать электронную почту или номер телефона, придумать пароль
          и выбрать валюту. После этого вы получаете доступ ко всем разделам, а Ля казино официальный сайт
          сразу предложит активировать приветственный бонус. Ниже — пошаговая инструкция.
        </p>
        <ol className="mt-6 space-y-4">
          {[
            'Откройте официальный сайт La Casino или актуальное рабочее зеркало.',
            'Нажмите кнопку «Вход / Регистрация» в правом верхнем углу страницы.',
            'Введите e-mail или телефон, задайте надёжный пароль и выберите валюту счёта.',
            'Подтвердите совершеннолетие и согласие с правилами La Casino.',
            'Активируйте аккаунт по ссылке из письма или коду из SMS.',
            'Пополните баланс и заберите бонус 100% на первый депозит.',
          ].map((item, i) => (
            <li key={item} className="flex items-start gap-4 leading-relaxed text-muted-foreground">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Вход выполняется так же просто: на Ля казино официальный сайт нажмите «Вход», введите логин и
          пароль, при необходимости подтвердите личность через код двухфакторной аутентификации. Если вы
          забыли пароль, воспользуйтесь функцией восстановления — ссылка придёт на почту. Ля казино
          официальный сайт хранит ваши данные в зашифрованном виде, поэтому авторизация полностью
          безопасна.
        </p>
      </section>

      {/* Секция 5 */}
      <section id="bonusy" className="mt-16 scroll-mt-24">
        <div className="mb-4 flex items-center gap-3 text-primary">
          <Gift className="h-6 w-6" aria-hidden="true" />
          <span className="text-sm font-semibold uppercase tracking-wider">Бонусы</span>
        </div>
        <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
          Бонусы, фриспины и кэшбэк в La Casino
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Бонусная программа — одна из главных причин, почему игроки выбирают La Casino. Новичок получает
          приветственный пакет: 100% к первому депозиту плюс фриспины на популярные слоты. La Casino
          начисляет бонусы автоматически, а условия отыгрыша прозрачны и указаны в правилах. Помимо
          стартового поощрения, в La казино действуют еженедельный кэшбэк, релоуд-бонусы по выходным и
          программа лояльности с уровнями.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            'Приветственный бонус 100% на первый депозит от La Casino.',
            'До 200 фриспинов за пополнение в первые дни после регистрации.',
            'Еженедельный кэшбэк до 15% от проигранных ставок.',
            'Промокоды и турниры с призовым фондом в Ля Казино.',
            'VIP-программа с персональным менеджером и повышенными лимитами.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
              <Gift className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 font-serif text-2xl font-bold text-foreground sm:text-3xl">
          Ля казино официальный: бонусная программа и условия
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Ля казино официальный подход к бонусам заключается в честности: все требования по вейджеру
          прописаны заранее, без скрытых условий. Ля казино официальный сайт показывает прогресс отыгрыша
          прямо в личном кабинете, поэтому вы всегда видите, сколько осталось до полного вывода бонусных
          средств. Ля казино официальный клуб не аннулирует выигрыши без причины — если вы выполнили
          условия, деньги переводятся на основной баланс.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Совет: активируйте бонус только тогда, когда готовы играть регулярно. Так вы успеете отыграть
          вейджер в срок. La казино позволяет отказаться от бонуса, если вы предпочитаете играть на чистый
          депозит без ограничений на вывод.
        </p>
      </section>

      {/* Секция 6 */}
      <section id="vyvod" className="mt-16 scroll-mt-24">
        <div className="mb-4 flex items-center gap-3 text-primary">
          <Wallet className="h-6 w-6" aria-hidden="true" />
          <span className="text-sm font-semibold uppercase tracking-wider">Финансы</span>
        </div>
        <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
          Вывод средств и депозиты La Casino: СБП, карты, крипта
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Финансовая система — гордость бренда. La Casino официальный сайт поддерживает моментальные
          депозиты и быстрые выплаты. Пополнить счёт можно через Систему быстрых платежей (СБП),
          банковские карты Visa и Mastercard, электронные кошельки и криптовалюту. Минимальный депозит
          доступный, а зачисление происходит мгновенно. La Casino не берёт комиссию за пополнение.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { title: 'СБП', desc: 'Выплаты за 5 минут по номеру телефона, без комиссии.' },
            { title: 'Карты', desc: 'Visa и Mastercard, вывод от 1 до 24 часов.' },
            { title: 'Крипта', desc: 'BTC, USDT, ETH — анонимно и почти мгновенно.' },
          ].map((m) => (
            <div key={m.title} className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-serif text-xl font-bold text-primary">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Чтобы вывести выигрыш, нужно один раз пройти верификацию: подтвердить личность документами. Это
          требование лицензии, оно защищает ваш аккаунт от мошенников. После верификации все последующие
          выплаты в La Casino проходят автоматически. Быстрее всего деньги приходят по СБП — обычно в
          течение пяти минут, что подтверждают отзывы игроков.
        </p>
      </section>

      {/* Секция 7 */}
      <section id="mobile" className="mt-16 scroll-mt-24">
        <div className="mb-4 flex items-center gap-3 text-primary">
          <Smartphone className="h-6 w-6" aria-hidden="true" />
          <span className="text-sm font-semibold uppercase tracking-wider">Мобайл</span>
        </div>
        <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
          Мобильная версия La Casino для смартфонов
        </h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="leading-relaxed text-muted-foreground">
              Мобильная версия La Casino работает прямо в браузере телефона и не требует установки
              приложения. Сайт адаптируется под любой экран: iPhone, Android-смартфон или планшет. Все
              разделы — слоты, бонусы, касса и поддержка — доступны в пару касаний. Именно поэтому формат
              ля казино онлайн так удобен: вы можете играть в дороге, в очереди или дома на диване.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Если хотите ярлык на рабочий стол, откройте La Casino в браузере и выберите «Добавить на
              главный экран». Так вы получите иконку, как у обычного приложения, но без нагрузки на память
              устройства. Мобильная версия La Casino сохраняет все функции десктопа и работает одинаково
              стабильно на любом соединении.
            </p>
          </div>
          <img
            src="/images/mobile.png"
            alt="Мобильная версия La Casino на экране смартфона"
            loading="lazy"
            className="mx-auto w-full max-w-sm rounded-xl border border-border object-cover"
          />
        </div>
      </section>
    </article>
  )
}
