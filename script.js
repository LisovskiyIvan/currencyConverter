window.onload = function () {

const swapper = document.getElementById('swapper');
const inputNumber = document.getElementById('currInput');
const outputNumber = document.getElementById('currOutput');
const inputCurrencySelector = document.getElementById('inputCurrencySelector');
const outputCurrencySelector = document.getElementById('outputCurrencySelector');

swapper.addEventListener('click', swap);

inputNumber.addEventListener( 'input', converter);
inputCurrencySelector.addEventListener('change', converter);
outputCurrencySelector.addEventListener('change', converter);

const apiKey = 'bcCXAafaaVY+jb94CCxHog==GfI9vDTO8hdnDMxw';
const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/JSON',
    },

}

async function converter() {
    inputNumber.toLocaleString('ru-RU');
    outputNumber.toLocaleString('ru-RU');
    let URL = `https://api.api-ninjas.com/v1/convertcurrency?have=${inputCurrencySelector.value}&want=${outputCurrencySelector.value}&amount=${inputNumber.value}`;
    
    const response = await fetch(URL, options);
    const data = await response.json();
    outputNumber.value = data.new_amount;
    
     
}
function swap () {
    temp = inputCurrencySelector.value;
    inputCurrencySelector.value = outputCurrencySelector.value;
    outputCurrencySelector.value = temp;
    converter();
}
}
