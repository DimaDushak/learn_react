function getTimeAgo(time: number, declinations: string[]) {
    const forDeclination = [2, 0, 1, 1, 1, 2];

    const index =
        time > 10 && time < 15 ? 2 : forDeclination[Math.min(time % 10, 5)];

    return `${time} ${declinations[index]} назад`;
}

function getPublishDate(created: number) {
    const { getDate, getMonth, getFullYear } = new Date(created);

    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];

    return `${getDate()} ${months[getMonth()]} ${getFullYear()}`;
}

export default function getPublishTime(created: number): string {
    const secondsAgo = Math.floor(Date.now() / 1000 - created);

    if (secondsAgo < 60) {
        return getTimeAgo(secondsAgo, ['секунда', 'секунды', 'секунд']);
    }

    const minutesAgo = Math.floor(secondsAgo / 60);

    if (minutesAgo < 60) {
        return getTimeAgo(minutesAgo, ['минута', 'минуты', 'минут']);
    }

    const hoursAgo = Math.floor(minutesAgo / 60);

    if (hoursAgo < 24) {
        return getTimeAgo(hoursAgo, ['час', 'часа', 'часов']);
    }

    return getPublishDate(created);
}
