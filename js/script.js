const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const button = document.querySelector('button');

const randomColor = () => {
    const color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    body.style.background = color;
    button.style.color = color;
    h1.textContent = color;
};

button.addEventListener('click', randomColor);