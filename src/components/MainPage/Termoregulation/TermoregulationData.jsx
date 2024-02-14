export const termoregulationData = [
    {
        time: 'Утро',
        text: 'Во время пробуждения температура в квартире  держится на уровне +28',
        degrees: '+28',
        eclipse: require('../../../images/temperature-28.png'),
        backgroung: require('../../../images/early-bg.png'),
        type: 'short'
    },
    {
        time: 'День',
        text: 'Пока все члены семьи на работе или на учебе, температура снижается для экономии электроэнергии',
        degrees: '+20',
        eclipse: require('../../../images/temperature-20.png'),
        backgroung: require('../../../images/day-bg.png'),
        type: 'long'
    },
    {
        time: 'Вечер',
        text: 'За 1-2 часа до возвращения членов семьи домой, пол прогревается до +30',
        degrees: '+30',
        eclipse: require('../../../images/temperature-30.png'),
        backgroung: require('../../../images/midnight-bg.png'),
        type: 'long'
    },
    {
        time: 'Ночь',
        text: 'Во время сна температура пола становится +25',
        degrees: '+25',
        eclipse: require('../../../images/temperature-25.png'),
        backgroung: require('../../../images/night-bg.png'),
        type: 'short'
    }
]