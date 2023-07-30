
    const swapper = document.getElementById('swapper');
    const inputNumber = document.getElementById('currInput');
    const outputNumber = document.getElementById('currOutput');
    const inputCurrencySelector = document.getElementById('inputCurrencySelector');
    const outputCurrencySelector = document.getElementById('outputCurrencySelector');
    
    swapper.addEventListener('click', swap);
    
    inputNumber.addEventListener( 'input', converter);
    inputCurrencySelector.addEventListener('change', converter);
    outputCurrencySelector.addEventListener('change', converter);
    
    
    async function converter() {
         
        let inputCurrency = inputCurrencySelector.value;
        let outputCurrency = outputCurrencySelector.value;
        let number = Number(inputNumber.value);
        let data = {
            firstCurrency: inputCurrency,
            amount: number,
            secondCurrency: outputCurrency
        };
        
         await fetch('http://localhost:8081', {
            method: 'POST',
            //headers: {'Content-Type': 'application/json'},
            'Access-Control-Allow-Origin': '*',
            mode: 'cors',
            body: JSON.stringify(data)
        })
        .then ((res) => res.json())
        .then ((output) => outputNumber.value = Number(output.Value).toFixed(2))
         
    };
    
    
    function swap () {
        temp = inputCurrencySelector.value;
        inputCurrencySelector.value = outputCurrencySelector.value;
        outputCurrencySelector.value = temp;
        converter(); 
    }
    
