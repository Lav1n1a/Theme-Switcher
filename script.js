var moon = document.querySelector('#moon');
var sun = document.querySelector('#sun');

var body = document.querySelector('body');

moon.addEventListener('click', function() {
    moon.style.background = 'white';
    sun.style.background = 'rgb(177, 176, 176)';
    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition = '2s';
})
sun.addEventListener('click', function() {
    sun.style.background = 'white';
    moon.style.background = 'rgb(177, 176, 176)';
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '2s';
})