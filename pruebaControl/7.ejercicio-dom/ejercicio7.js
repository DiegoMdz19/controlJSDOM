window.onload = init;
function init() {
    document.querySelector('.boton').addEventListener('click', añadir);
}

function añadir() {
    const newDiv = document.createElement('div');
    const newContent = document.createTextNode('item');
    newDiv.appendChild(newContent);

    const currentDiv = document.getElementById('a');
    document.body.insertBefore(newDiv, currentDiv);
}

const cuadros = document.querySelector('.grid');

const getRandomRGB = () => {
    const getRandom = () => Math.floor(Math.random() * 256);

    return `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
};
setInterval(() => {
    const squares = document.querySelectorAll('div');
    for (const square of squares) {
        square.style.background = getRandomRGB();
    }
}, 1000);
