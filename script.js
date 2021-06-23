const container = document.querySelector('#container');
// const divs = container.querySelectorAll('div');
const button = document.querySelector('button');
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

// divs.forEach(div => div.addEventListener('mouseenter', () => div.setAttribute('style', 'height: 100%; width: 100%; background-color: black;')));

function createGrid(size) {
    container.setAttribute('style', `display: grid; grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr);`);
    for(let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.setAttribute('style', 'height: 100%; width: 100%; background-color: red;');
        container.appendChild(div);
    }
    const divs = container.querySelectorAll('div');
    divs.forEach(div => div.addEventListener('mouseenter', () => div.setAttribute('style', 'height: 100%; width: 100%; background-color: black;')));
}

createGrid(16);

button.addEventListener('click', () => {
    const divs = container.querySelectorAll('div');
    divs.forEach(div => div.setAttribute('style', 'height: 100%; width: 100%; background-color: red;'));
    const newSize = parseInt(prompt('Select size of new grid'));
/*     container.setAttribute('style', `display: grid; grid-template-rows: repeat(${newSize}, 1fr); grid-template-columns: repeat(${newSize}, 1fr);`);
    for(let i = 0; i < newSize * newSize; i++) {
        const div1 = document.createElement('div');
        div1.setAttribute('style', 'height: 100%; width: 100%; background-color: red;');
        div1.addEventListener('mouseenter', () => div1.setAttribute('style', 'height: 100%; width: 100%; background-color: black;'));
        container.appendChild(div1);
    } */
    createGrid(newSize);
});