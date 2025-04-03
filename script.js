
function converter(){

    const exchangeRates = [
        { from: "BRL", to: "USD", rate: 0.20 },
        { from: "BRL", to: "EUR", rate: 0.18 },
        { from: "BRL", to: "KRW", rate: 260 },
        { from: "USD", to: "BRL", rate: 5.00 },
        { from: "USD", to: "EUR", rate: 0.90 },
        { from: "USD", to: "KRW", rate: 1300 },
        { from: "EUR", to: "BRL", rate: 5.50 },
        { from: "EUR", to: "USD", rate: 1.10 },
        { from: "EUR", to: "KRW", rate: 1450 },
        { from: "KRW", to: "BRL", rate: 0.0038 },
        { from: "KRW", to: "USD", rate: 0.00077 },
        { from: "KRW", to: "EUR", rate: 0.00069 }
    ];

    let typedValue = parseFloat(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

    if (typedValue === "" || isNaN(typedValue)){
        alert("Please, type a valid value");
        return;
    }


    function getExchangeRate(from, to) {
       for(let i = 0; i < exchangeRates.length; i++){
        let currentRate = exchangeRates[i]
        if (currentRate.from === from && currentRate.to == to){
            return currentRate.rate;
        }
       }
       return null;
    }

    let exchangeRate = getExchangeRate(fromCurrency, toCurrency);

    if (exchangeRate === null) {
        alert("Exchange rate not found!");
        return;
    }

    let convertedValue = (typedValue * exchangeRate);

    document.getElementById("converted").value = convertedValue;

};
