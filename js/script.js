const lang = 'ru'; // 'ru' or 'en'
const week_ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const week_en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.info('Дни недели if:');
if (lang == 'ru') {
    console.log(week_ru);
} else if (lang == 'en') {
    console.log(week_en);
}

console.info('\nДни недели switch:');
switch (lang) {
    case 'ru':
        console.log(week_ru);
        break;
    case 'en':
        console.log(week_en);
        break;
}

const langs = ['ru', 'en'];
const lang_id = langs.indexOf(lang);
const week_arr = [
    week_ru,
    week_en
];
console.info('\nДни недели из массива:');
console.log(week_arr[lang_id]);

const namePerson = 'Максим';
const positionPerson = namePerson == 'Артем' ? 'директор' : namePerson == 'Максим' ? 'преподаватель' : 'студент';
console.log('\n' + namePerson + ' - ' + positionPerson);