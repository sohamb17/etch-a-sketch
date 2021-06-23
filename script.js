const container = document.querySelector('#container');

// GRID METHODS
// float/clear
/* for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', 'float: left; height: 6.25%; width: 6.25%; background-color: red;');
    container.appendChild(div);
} */

// inline-block
/* container.setAttribute('style', 'line-height: 1px;');
for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', 'display: inline-block; height: 6.25%; width: 6.25%; vertical-align: bottom; background-color: red;');
    container.appendChild(div);
} */

// flexbox
/* container.setAttribute('style', 'display: flex; flex-wrap: wrap;');
for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', 'height: 6.25%; width: 6.25%; background-color: red;');
    container.appendChild(div);
} */

// CSS Grid
/* container.setAttribute('style', 'display: grid; grid-template-rows: repeat(16, 1fr); grid-template-columns: repeat(16, 1fr);');
for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', 'height: 100%; width: 100%; background-color: red;');
    container.appendChild(div);
} */

function createGrid(size, colorType) {
    container.setAttribute('style', `display: grid; grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr);`);
    for(let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.setAttribute('style', 'height: 100%; width: 100%; opacity: 0;');
        container.appendChild(div);
    }
    const divs = container.querySelectorAll('div');
    if(colorType === "Black") {
        divs.forEach(div => div.addEventListener('mouseenter', () => div.setAttribute('style', 'height: 100%; width: 100%; background-color: black;')));
    } else if(colorType === "Random RGB") {
        divs.forEach(div => div.addEventListener('mouseenter', () => div.setAttribute('style', `height: 100%; width: 100%; background-color: rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`)));
    } else {
        divs.forEach(div => div.addEventListener('mouseenter', () => {
            if(parseFloat(div.style.opacity) < 1) {
                div.setAttribute('style', `height: 100%; width: 100%; background-color: black; opacity: ${parseFloat(div.style.opacity) + 0.1};`);
            }
        }));
    }
}

createGrid(16, "Black");

let newSize = 0;

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    const divs = container.querySelectorAll('div');
    divs.forEach(div => container.removeChild(div));
    newSize = parseInt(prompt('Select size of new grid (between 1-100)'));
    createGrid(newSize, "Black");
});

const black = document.querySelector('#black');
black.addEventListener('click', () => {
    const divs = container.querySelectorAll('div');
    divs.forEach(div => container.removeChild(div));
    const currentSize = newSize || 16;
    createGrid(currentSize, "Black");
});

const random = document.querySelector('#random');
random.addEventListener('click', () => {
    const divs = container.querySelectorAll('div');
    divs.forEach(div => container.removeChild(div));
    const currentSize = newSize || 16;
    createGrid(currentSize, "Random RGB");
});

const grayscale = document.querySelector('#grayscale');
grayscale.addEventListener('click', () => {
    const divs = container.querySelectorAll('div');
    divs.forEach(div => container.removeChild(div));
    const currentSize = newSize || 16;
    createGrid(currentSize, "Grayscale");
});