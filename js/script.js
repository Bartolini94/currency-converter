let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.5654;
let rateGBP = 5.2491;
let rateUSD = 3.7746;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "USD":
            result = amount / rateUSD;
            break;
    }

    resultElement.innerHTML = `Otrzymasz <strong>${result.toFixed(2)} ${currency}</strong>`;
})