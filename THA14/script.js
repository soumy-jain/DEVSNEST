var drag = document.querySelector('#drag');
var click = document.querySelector('#bc');
var bmo = document.querySelector('#bmo');
var bmu = document.querySelector('#bmu');

bmo.addEventListener('mouseover', () => {
    document.querySelector('body').style.backgroundColor = 'red';
});

bmu.addEventListener('mouseup', () => {
    document.querySelector('body').style.backgroundColor = 'violet';
});


click.addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = 'yellow';
});

drag.addEventListener('dragstart', () => {
    document.querySelector('#drag-s').innerText = 'DRAG-STARTED!';
    document.querySelector('#drag-e').innerText = '';
});

drag.addEventListener('dragend', () => {
    document.querySelector('#drag-e').innerText = 'DRAG-END!';
    document.querySelector('#drag-s').innerText = '';
});