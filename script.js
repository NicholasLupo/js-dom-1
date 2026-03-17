const lampOff = document.getElementById('lampOff');
const lampOn = document.getElementById('lampOn');

console.log(lampOff);
console.log(lampOn);

const btn = document.querySelector('input');
console.log(btn);

let status = btn.value = 'Accendi';
let statusOn = status.includes('Accendi');

btn.addEventListener('click', function getLight() {

    if (statusOn == true) {

        lampOff.classList.remove('d-block')
        lampOff.classList.add('d-none');

        lampOn.classList.remove('d-none');
        lampOn.classList.add('d-block');

        btn.value = 'Spegni';
        statusOn = !statusOn;
        console.log(statusOn);


    } else {

        lampOff.classList.add('d-block')
        lampOff.classList.remove('d-none');

        lampOn.classList.add('d-none');
        lampOn.classList.remove('d-block');

        btn.value = 'Accendi';
        statusOn = !statusOn
        console.log(statusOn);

    }
})