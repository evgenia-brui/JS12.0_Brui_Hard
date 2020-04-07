const HOURS_STRING = ['час', 'часа', 'часов'];
const MINUTES_STRING = ['минута', 'минуты', 'минут'];
const SECONDS_STRING = ['секунда', 'секунды', 'секунд'];
const DAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

function declOfNum(n, titles, from) {
    return n + ' ' + titles[from ? n % 10 === 1 && n % 100 !== 11 ? 1 : 2 :
        n % 10 === 1 && n % 100 !== 11 ? 0 :
        n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
}

function addZero(n) {
    return n < 10 ? '0' + n : n;
}

let clock = setInterval(() => {
    const date = new Date();
    console.log(`Сегодня ${DAYS[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()} года, ${declOfNum(date.getHours(), HOURS_STRING)} ${declOfNum(date.getMinutes(), MINUTES_STRING)} ${declOfNum(date.getSeconds(), SECONDS_STRING)}`);
    console.log(`${addZero(date.getDate())}.${addZero(date.getMonth()+1)}.${date.getFullYear()} - ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`);
}, 1000);