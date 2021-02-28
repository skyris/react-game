const questions = [
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 2,
    question: "Что входит в состав симфонического оркестра?",
    answers: {
      a: "Чашки",
      b: "Чайники",
      c: "Блюдца",
      d: "Тарелки"
    },
    correctAnswer: "d"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 2,
    question: "Что делает парикмахер на голове клиента?",
    answers: {
      a: "Воронку",
      b: "Стрижку",
      c: "Попугайку",
      d: "Ласточку"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 2,
    question: "Как заканчивается строка знаменитого стихотворения М. Ю. Лермонтова: «Выхожу один я…»?",
    answers: {
      a: "На дорогу",
      b: "На сцену",
      c: "На трибуну",
      d: "На штурм миллиона"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 2,
    question: "Как называется одна из опер Моцарта?",
    answers: {
      a: "«Волшебная флейта»",
      b: "«Чудесная арфа»",
      c: "«Дивный рояль»",
      d: "«Фантастическая дудка»"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 2,
    question: "Какая участь постигла теремок в сказке?",
    answers: {
      a: "Развалился",
      b: "Сгорел",
      c: "Обветшал",
      d: "Подвергся рейдерскому захвату"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 15,
    question: "Кто из этих философов в 1864 году написал музыку на стихи А.С. Пушкина «Заклинание» и «Зимний вечер»?",
    answers: {
      a: "Юнг",
      b: "Гегель",
      c: "Ницше",
      d: "Шопенгауэр"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 14,
    question: "Сколько раз в сутки подзаводят куранты Спасской башни Кремля?",
    answers: {
      a: "Один",
      b: "Два",
      c: "Три",
      d: "Четыре"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 13,
    question: "Кто 1-м получил Нобелевскую премию по литературе?",
    answers: {
      a: "Романист",
      b: "Драматург",
      c: "Поэт",
      d: "Эссеист"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 15,
    question: "С какой буквы начинаются слова, опубликованные в 16-м томе последнего издания Большой советской энциклопедии?",
    answers: {
      a: "М",
      b: "Н",
      c: "О",
      d: "П"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 14,
    question: "Кто из перечисленных был пажом во времена Екатерины II?",
    answers: {
      a: "Д.И. Фонвизин",
      b: "Г.Р. Державин",
      c: "А.Н. Радищев",
      d: "Н.М. Карамзин"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 12,
    question: "Какой химический элемент назван в честь злого подземного гнома?",
    answers: {
      a: "Гафний",
      b: "Кобальт",
      c: "Бериллий",
      d: "Теллур"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 11,
    question: "В какой из этих столиц бывших союзных республик раньше появилось метро?",
    answers: {
      a: "Тбилиси",
      b: "Ереван",
      c: "Баку",
      d: "Минск"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 14,
    question: "Сколько морей омывают Балканский полуостров?",
    answers: {
      a: "3",
      b: "4",
      c: "5",
      d: "6"
    },
    correctAnswer: "d"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 13,
    question: "Реки с каким названием нет на территории России?",
    answers: {
      a: "Шея",
      b: "Уста",
      c: "Спина",
      d: "Палец"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 12,
    question: "Что такое лобогрейка?",
    answers: {
      a: "Жнейка",
      b: "Шапка",
      c: "Болезнь",
      d: "Печка"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 13,
    question: "Какой роман Фенимор Купер написал на спор с женой?",
    answers: {
      a: "«Предосторожность»",
      b: "«Пионеры»",
      c: "«Последний из могикан»",
      d: "«Зверобой»"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 14,
    question: "Какой вид кавалерии предназначался для боевых действий как в конном, так и в пешем строю?",
    answers: {
      a: "Кирасиры",
      b: "Уланы",
      c: "Драгуны",
      d: "Гусары"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 12,
    question: "Какое имя не принимал ни один папа римский?",
    answers: {
      a: "Валентин",
      b: "Евгений",
      c: "Георгий",
      d: "Виктор"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 14,
    question: "В каком немецком городе родилась будущая императрица России Екатерина II?",
    answers: {
      a: "Висбаден",
      b: "Цербст",
      c: "Штеттин",
      d: "Дармштадт"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 11,
    question: "Что запрещал указ, который в 1726 году подписала Екатерина I?",
    answers: {
      a: "Точить лясы",
      b: "Бить баклуши",
      c: "Пускать пыль в глаза",
      d: "Переливать из пустого в порожнее"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 9,
    question: "Какое растение существует на самом деле?",
    answers: {
      a: "Лох чилийский",
      b: "Лох индийский",
      c: "Лох греческий",
      d: "Лох русский"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 3,
    question: "Что за место, попав в которое, человек делает селфи на кухне, которую не может себе позволить?",
    answers: {
      a: "Рим",
      b: "Париж",
      c: "Лондон",
      d: "Икея"
    },
    correctAnswer: "d"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 6,
    question: "Какой город объявлен официальной родиной русского Деда Мороза?",
    answers: {
      a: "Малая Вишера",
      b: "Великий Устюг",
      c: "Вышний Волочек",
      d: "Нижний Новгород"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 9,
    question: "Что проводит боксер, наносящий удар противнику снизу?",
    answers: {
      a: "Свинг",
      b: "Хук",
      c: "Апперкот",
      d: "Джэб"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 5,
    question: "К кому первому обратились за помощью дед и бабка, не справившись с репкой?",
    answers: {
      a: "К Жучке",
      b: "К дочке",
      c: "К внучке",
      d: "К залу"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 8,
    question: "Кого нет среди смешариков?",
    answers: {
      a: "Барана",
      b: "Свиньи",
      c: "Коня",
      d: "Лося"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 4,
    question: "Как называется ближайшая к Земле звезда?",
    answers: {
      a: "Проксиома Центавра",
      b: "Солнце",
      c: "Полярная",
      d: "Сириус"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 9,
    question: "Что помогает запомнить мнемоническое правило «Это я знаю и помню прекрасно»?",
    answers: {
      a: "Число Пи",
      b: "Ряд активности металлов",
      c: "Цвета радуги",
      d: "Порядок падежей"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 4,
    question: "Какую площадь имеет клетка стандартной школьной тетради?",
    answers: {
      a: "0.25 кв.см",
      b: "1 кв.см",
      c: "0.5 кв.см",
      d: "1.25 кв.см"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 7,
    question: "Что происходит на соревнованиях по стрельбе, если соперники набрали одинаковое количество очков?",
    answers: {
      a: "Перевербовка",
      b: "Перепалка",
      c: "Перебранка",
      d: "Перестрелка"
    },
    correctAnswer: "d"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 10,
    question: "Что вращается вокруг Земли?",
    answers: {
      a: "Луна",
      b: "Солнце",
      c: "Марс",
      d: "Венера"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 10,
    question: "Как назывались старинные русские пушки-гаубицы?",
    answers: {
      a: "Кентавр",
      b: "Грифон",
      c: "Василиск",
      d: "Единорог"
    },
    correctAnswer: "d"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 2,
    question: "В 1896 году на станции Одинцово появился нарядный царский павильон. Кого там планировали встречать?",
    answers: {
      a: "Николая II",
      b: "Николая I",
      c: "Петра II",
      d: "Петра I"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 3,
    question: "На 22-м километре от Белорусского вокзала находится станция Баковка, а прежде она называлась 20-я...",
    answers: {
      a: "Миля",
      b: "Верста",
      c: "Сажень",
      d: "Ладонь"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 9,
    question: "В 1618 году вдова думного дьяка и одного из владельцев села Сколково поднесла в дар царю Михаилу Федоровичу братину. А что это такое — братина?",
    answers: {
      a: "Деревянная кукла",
      b: "Сосуд для напитков",
      c: "Оброзок для ношения на шее",
      d: "Надел земли, жертвуемый в казну"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 11,
    question: "Недалеко от станции Немчиновка можно увидеть белый куб из бетона. Какой известный деятель искусства похоронен в этой местности?",
    answers: {
      a: "Александр Блок",
      b: "Владимир Ворошилов",
      c: "Вера Мухина",
      d: "Каземир Малевич"
    },
    correctAnswer: "d"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 5,
    question: "Какой газ преобладает в атмосфере Земли?",
    answers: {
      a: "Кислород",
      b: "Азот",
      c: "Углекислый газ",
      d: "Водород"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 4,
    question: "Как назывался первый советский фильм-катастрофа?",
    answers: {
      a: "«34-й скорый»",
      b: "«Остановился поезд»",
      c: "«Экипаж»",
      d: "«Берегись автомобиля»"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 14,
    question: "Кто из этих деятелей искусства стал директором первого профессионального публичного театра России?",
    answers: {
      a: "Александр Сумароков",
      b: "Василий Каратыгин",
      c: "Павел Молчанов",
      d: "Яков Княжнин"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 10,
    question: "Какой вид спорта не входит в современное пятиборье?",
    answers: {
      a: "Метание копья",
      b: "Верховая езда",
      c: "Фехтование",
      d: "Плавание"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 5,
    question: "Как иначе называют пиратский флаг?",
    answers: {
      a: "Весёлый Роджер",
      b: "Грязный Гарри",
      c: "Бедный Йорик",
      d: "Лимонадный Джо"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 8,
    question: "Какой фильм Феллини сделал имя Папарацци нарицательным?",
    answers: {
      a: "«Сладкая жизнь»",
      b: "«Восемь с половиной»",
      c: "«Ночи Кабирии»",
      d: "«Дорога»"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 2,
    question: "Как называется популярный рецепт приготовления макарон с мясом?",
    answers: {
      a: "По-деревенски",
      b: "По-флотски",
      c: "По-братски",
      d: "По-божески"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 1,
    question: "Что является характеристикой коллекционного вина?",
    answers: {
      a: "Стойкость",
      b: "Выдержка",
      c: "Выносливость",
      d: "Трезвость"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 1,
    question: "Морской путь в какую страну искала экспедиция Колумба, доплыв вместо этого до Америки?",
    answers: {
      a: "Эфиопия",
      b: "Япония",
      c: "Индия",
      d: "Китай"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 4,
    question: "Как называется один из к/ф с участием Михаила Боярского?",
    answers: {
      a: "«Сватовство гусара»",
      b: "«Развод кирасира»",
      c: "«Бегство гренадера»",
      d: "«Адюльтер поручика»"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 7,
    question: "Как называется одна из станций Московского метрополитена?",
    answers: {
      a: "«Спартак»",
      b: "«Динамо»",
      c: "«Торпедо»",
      d: "«Локомотив»"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 5,
    question: "Как называется один из конкурсов телеигры «КВН»?",
    answers: {
      a: "Контрольная работа",
      b: "Диктант",
      c: "Домашнее задание",
      d: "Работа над ошибками"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 1,
    question: "Что, согласно известному выражению, должен сделать последовательный человек, сказавший «А»?",
    answers: {
      a: "Сказать «Б»",
      b: "Задать вопрос",
      c: "Дождаться ответа",
      d: "Продолжить тост"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 5,
    question: "Какое государство ежегодно дарит Лондону ёлку для Трафальгарской площади?",
    answers: {
      a: "Дания",
      b: "Норвегия",
      c: "Швеция",
      d: "Эстония"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 8,
    question: "Какая из перечисленных башен самая низкая?",
    answers: {
      a: "Останкинская",
      b: "Эйфелева",
      c: "Пизанская",
      d: "Спасская"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 4,
    question: "Чему равна сумма внутренних углов треугольника?",
    answers: {
      a: "360 градусов",
      b: "90 градусов",
      c: "180 градусов",
      d: "40 градусов"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 2,
    question: "Как называется фигура высшего пилотажа?",
    answers: {
      a: "Шайка",
      b: "Лейка",
      c: "Бочка",
      d: "Тачка"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 6,
    question: "Как называется крепкий спиртной напиток из сока сахарного тростника?",
    answers: {
      a: "Кальвадос",
      b: "Ром",
      c: "Джин",
      d: "Виски"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 13,
    question: "На самолёте какого авиаконструктора экипаж Валерия Чкалова совершил первый беспосадочный перелёт из СССР в США?",
    answers: {
      a: "Антонова",
      b: "Ильюшина",
      c: "Яковлева",
      d: "Туполева"
    },
    correctAnswer: "d"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 10,
    question: "Какие пальцы рук не участвуют при игре на современной арфе?",
    answers: {
      a: "Большие",
      b: "Указательные",
      c: "Безымянные",
      d: "Мизинцы"
    },
    correctAnswer: "d"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 6,
    question: "Как называется единственное в Европе герцогство?	",
    answers: {
      a: "Монако",
      b: "Андорра",
      c: "Люксембург",
      d: "Лихтенштейн"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 7,
    question: "Какую птицу американцы традиционно готовят на День Благодарения?",
    answers: {
      a: "Курицу",
      b: "Индейку",
      c: "Гуся",
      d: "Утку"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 2,
    question: "Чем был вооружён месяц в популярной детской считалочке?",
    answers: {
      a: "Ножом",
      b: "Пистолетом",
      c: "Огнемётом",
      d: "Установкой «Град»"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 7,
    question: "На территории какой современной страны находился Карфаген?",
    answers: {
      a: "Тунис",
      b: "Египет",
      c: "Судан",
      d: "Израиль"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 6,
    question: "Каким голосом пел Фёдор Шаляпин?",
    answers: {
      a: "Бас",
      b: "Тенор",
      c: "Баритон",
      d: "Фальцет"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 8,
    question: "Какого цвета нет на государственном флаге Армении?",
    answers: {
      a: "Красного",
      b: "Синего",
      c: "Оранжевого",
      d: "Белого"
    },
    correctAnswer: "d"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 8,
    question: "В каком океане находится самое глубокое место в мире — Марианская впадина?",
    answers: {
      a: "Атлантический",
      b: "Северный Ледовитый",
      c: "Тихий",
      d: "Индийский"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 4,
    question: "Как заканчивается первая строчка считалочки: «Аты-баты…»?",
    answers: {
      a: "Шли солдаты",
      b: "Плыли моряки",
      c: "Скакали кавалеристы",
      d: "Кричали депутаты"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 3,
    question: "Как называют открытого, простого в общении человека?",
    answers: {
      a: "Футболка-мальчик",
      b: "Рубаха-парень",
      c: "Пижама-мужик",
      d: "Жилетка-старик"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 7,
    question: "Что забил «в пушку туго» герой стихотворения М. Ю. Лермонтова «Бородино»?",
    answers: {
      a: "Снаряд",
      b: "Заряд",
      c: "Картечь",
      d: "Ядро"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 4,
    question: "Из какого меха сделаны шапки королевских гвардейцев Великобритании?",
    answers: {
      a: "Овечий",
      b: "Волчий",
      c: "Соболиный",
      d: "Медвежий"
    },
    correctAnswer: "d"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 5,
    question: "В каком виде спорта разыгрывают кубок Стэнли?",
    answers: {
      a: "Футбол",
      b: "Теннис",
      c: "Велоспорт",
      d: "Хоккей"
    },
    correctAnswer: "d"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 8,
    question: "Что означает итальянское слово, от которого произошло слово «вермишель»?",
    answers: {
      a: "Соломинки",
      b: "Проволочки",
      c: "Ниточки",
      d: "Червячки"
    },
    correctAnswer: "d"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 8,
    question: "За сына какого царя выдавали себя Лжедмитрий I и Лжедмитрий II?",
    answers: {
      a: "Алексея Михайловича",
      b: "Ивана IV",
      c: "Бориса Годунова",
      d: "Михаила Фёдоровича"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 9,
    question: "Какой город считается родиной джаза?",
    answers: {
      a: "Чикаго",
      b: "Нью-Йорк",
      c: "Новый Орлеан",
      d: "Одесса"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 1,
    question: "Как называется яйцо, сваренное гуще, чем всмятку, но не вкрутую?",
    answers: {
      a: "В сумочку",
      b: "В кулёчек",
      c: "В мешочек",
      d: "В рюкзачок"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 5,
    question: "Какая нота дважды встречалась в названии фильма Георгия Данелии?",
    answers: {
      a: "До",
      b: "Ре",
      c: "Ми",
      d: "Фа"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 10,
    question: "Премьера какой программы состоялась 1 января 1968 года?",
    answers: {
      a: "«Время»",
      b: "«Голубой огонёк»",
      c: "«Кинопанорама»",
      d: "«Очевидное-невероятное»"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 8,
    question: "	Что собирает девушка на картине Карла Брюллова «Итальянский полдень»?",
    answers: {
      a: "Вишни",
      b: "Абрикосы",
      c: "Виноград",
      d: "Яблоки"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 5,
    question: "Какой легкоатлетический снаряд спортсмены толкают?",
    answers: {
      a: "Копьё",
      b: "Диск",
      c: "Ядро",
      d: "Молот"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 9,
    question: "Что борцы сумо разбрасывают по рингу перед поединком?",
    answers: {
      a: "Соль",
      b: "Опилки",
      c: "Пшено",
      d: "Песок"
    },
    correctAnswer: "a"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 1,
    question: "Что открыл Христофор Колумб?",
    answers: {
      a: "Африку",
      b: "Азию",
      c: "Америку",
      d: "Консервы «Завтрак туриста»"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 12,
    question: "Какой камень венчает Большую Российскую Императорскую корону?",
    answers: {
      a: "Топаз",
      b: "Изумруд",
      c: "Шпинель",
      d: "Сапфир"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 7,
    question: "Сколько куполов у Собора Василия Блаженного?",
    answers: {
      a: "7",
      b: "9",
      c: "10",
      d: "11"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 1,
    question: "Что потерял Ослик Иа в сказке про Винни-Пуха?",
    answers: {
      a: "Память",
      b: "Хвост",
      c: "Зубы",
      d: "Совесть"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 6,
    question: "Какого цвета мультипликационный герой Шрек?",
    answers: {
      a: "Синего",
      b: "Красного",
      c: "Зелёного",
      d: "Жёлтого"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 8,
    question: "Кто является главой государства Монако?",
    answers: {
      a: "Король",
      b: "Князь",
      c: "Великий герцог",
      d: "Султан"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 1,
    question: "Кого в русской армии XIX века называли «пластун»?",
    answers: {
      a: "Моряка",
      b: "Артиллериста",
      c: "Разведчика",
      d: "Кирасира"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 11,
    question: "Кто первым применил таран в воздушном бою?",
    answers: {
      a: "Арцеулов",
      b: "Кожедуб",
      c: "Нестеров",
      d: "Талалихин"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 1,
    question: "Что Красная Шапочка несла своей бабушке?",
    answers: {
      a: "Блины",
      b: "Пирожки",
      c: "Пончики",
      d: "Ахинею"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 10,
    question: "Кто из этих легендарных личностей не входит в число трёх братьев, основавших Киев?",
    answers: {
      a: "Кий",
      b: "Рюрик",
      c: "Щек",
      d: "Хорив"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 2,
    question: "На чём спал герой романа «Что делать?» Рахметов, закаляя революционную волю?",
    answers: {
      a: "На стёклах",
      b: "На гвоздях",
      c: "На углях",
      d: "На горошине"
    },
    correctAnswer: "b"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 7,
    question: "В какое море впадает река Хуанхэ?",
    answers: {
      a: "Красное",
      b: "Чёрное",
      c: "Жёлтое",
      d: "Белое"
    },
    correctAnswer: "c"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 6,
    question: "Что отсутствовало в классическом варианте салата, который придумал Л. Оливье?",
    answers: {
      a: "Яйца",
      b: "Телячий язык",
      c: "Огурец",
      d: "Колбаса"
    },
    correctAnswer: "d"
  }),
  new GameQuestion({
    lang: "ru",
    difficultyLevel: 6,
    question: "Что отсутствовало в классическом варианте салата, который придумал Л. Оливье?",
    answers: {
      a: "Яйца",
      b: "Телячий язык",
      c: "Огурец",
      d: "Колбаса"
    },
    correctAnswer: "d"
  }),
]

export default questions;
