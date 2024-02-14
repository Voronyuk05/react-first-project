export const consultationData = [
    {
        name: 'goal',
        title: 'Экспертная Консультация',
        paragraph: 'Ответьте на 3 вопроса, чтобы получить расчет стоимости, это займет не более 30 секунд',
        options: [
            {
                type: 'button',
                width: '100%',
                value: 'Ответить на вопросы для расчета ',
            },
            {
                type: 'button',
                width: '100%',
                value: 'Получить консультацию по телефону',
                call: true,
            },
            {
                type: 'button',
                width: '100%',
                value: 'Вызвать замерщика на объект',
                call: true,
            },
        ],
    },
    {
        name: 'object',
        title: 'Шаг 1',
        direction: 'Выберите объект',
        options: [
            {
                type: 'button',
                value: 'Дом',
            },
            {
                type: 'button',
                value: 'Баня',
            },
            {
                type: 'button',
                value: 'Нежилое',
            },
            {
                type: 'button',
                value: 'Другое',
            },
        ],
    },
    {
        name: 'area',
        title: 'Шаг 2',
        direction: 'Введите общую площадь помещения',
        options: [
            {
                type: 'input',
                placeholder: '100 м2',
            },
            {
                type: 'send',
                width: '12.5vw',
                value: 'Пока не знаю',
            },
            {
                type: 'send',
                width: '12.5vw',
                value: 'Далее',
            },
        ],
    },
    {
        name: 'time',
        title: 'Шаг 3',
        direction: 'Когда вы планируете установку системы отопления?',
        options: [
            {
                type: 'button',
                height: '4vw',
                value: 'В течение месяца',
            },
            {
                type: 'button',
                height: '4vw',
                value: 'Через 3-5 месяцев',
            },
            {
                type: 'button',
                height: '4vw',
                value: 'Через 6 месяцев',
            },
            {
                type: 'button',
                height: '4vw',
                value: 'Пока не решил когда',
            },
        ],
    },
    {
        name: 'method',
        title: 'Вы ответили на все вопросы',
        paragraph: 'Куда прислать расчет стоимости и сравнительную таблицу?',
        options: [
            {
                type: 'button',
                width: '15.6vw',
                value: 'WhatsApp',
            },
            {
                type: 'button',
                width: '15.6vw',
                value: 'Telegram',
            },
            {
                type: 'button',
                width: '32.4vw',
                value: 'Позвоните, у меня остались вопросы',
            },
        ],
    },
]