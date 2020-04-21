const div = document.querySelector('div');
const randomColor = () => '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
const fps = 0.8;
let isPause = false;
let changeColorInterval;

const changeColor = () => {
    div.style.background = randomColor();
    changeColorInterval = requestAnimationFrame(changeColor);
};

changeColor();

const pause = () => {
    if (isPause) {
        changeColor();
        isPause = false;
    } else {
        cancelAnimationFrame(changeColorInterval);
        isPause = true;
    }
};

div.addEventListener('click', pause);