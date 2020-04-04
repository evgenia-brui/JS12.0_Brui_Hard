const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const style = [
    'font-style: italic;',
    'font-weight: bold;'
];

const date = new Date();

week.forEach(function(day, id) {
    if (id < 5) {
        if (id == date.getDay() - 1) {
            console.log('%c' + day, style[1]);
        } else {
            console.log(day);
        }
    } else {
        if (id == date.getDay() - 1) {
            console.log('%c' + day, style[0] + style[1]);
        } else {
            console.log('%c' + day, style[0]);
        }
    }
});