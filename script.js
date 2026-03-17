const lampOff = document.getElementById('lampOff');
const lampOn = document.getElementById('lampOn');

console.log(lampOff);
console.log(lampOn);

function getLight () {

    lampOff.classList.remove('d-block')
    lampOff.classList.add('d-none');

    lampOn.classList.remove('d-none');
    lampOn.classList.add('d-block');

}