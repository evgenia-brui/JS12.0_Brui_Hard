const num = 266219;

const num_multiply = String(num).split('').reduce((multiply, current) => multiply * current, 1);
console.log('num_multiply = ' + num_multiply);

const num_pow = num_multiply ** 3;
console.log('num_pow = ' + num_pow);

alert('Первые 2 цифры полученного числа: ' + String(num_pow).slice(0, 2));