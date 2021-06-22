const container = document.querySelector('#container');

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
container.setAttribute('style', 'display: grid; grid-template-rows: repeat(16, 1fr); grid-template-columns: repeat(16, 1fr);');
for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', ' background-color: red;');
    div.addEventListener('mouseenter', () => div.setAttribute('style', 'height: 100%; width: 100%; background-color: black;'));
    container.appendChild(div);
}