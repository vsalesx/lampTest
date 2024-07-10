const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp')
const body = document.body;
const title = document.querySelector('h1')

function isCrashed() {
    return lamp.src.indexOf('q') > -1
}

function lampOn() {
    if (!isCrashed()) {

        lamp.src = 'ligada.png';
        document.documentElement.style.background = 'radial-gradient(circle, #fff, yellow)';
        title.style.color = '#181818'
    }
}
function lampOff() {
    if (!isCrashed()) {

        lamp.src = 'desligada.png'
        document.documentElement.style.background = 'radial-gradient(circle, #000000 0%, #8e8888 100%)';
        title.style.color = "#fff"
    }
}

function lampCrashed() {
    lamp.src = 'quebrada.png'
    document.documentElement.style.background = 'radial-gradient(circle, #000000 0%, #8e8888 100%)';
    title.style.color = "#fff"
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);


lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);

lamp.addEventListener('dblclick', lampCrashed);