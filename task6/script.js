const trafficLight = document.querySelector('#trafficLight');
const trafficLightEl = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');
    trafficLight.removeEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('yellow');
    trafficLightE3.style.background = ('black');
    trafficLight.removeEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('red');
    trafficLight.removeEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeGreen);

}

trafficLight.addEventListener('click', makeRed);
trafficLight.addEventListener('click', makeYellow);
trafficLight.addEventListener('click', makeGreen);