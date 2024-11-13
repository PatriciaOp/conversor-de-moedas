

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
//const convertDolar = document.querySelector("#dolar").value
//const convertEuro = document.querySelector("#euro").value


const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".inputCurrency").value
    const currencyValueToConvert = document.querySelector(".value-to-convert") //real
    const currencyValueConverted = document.querySelector(".converted-value") //outras moedas

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
   // console.log(currencySelect.value)

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = 6.8
    const pesoArgToday = 2
    const bitcoinToday = data.BTCBRL.high

//const convertedValue = inputCurrencyValue/dolarToday

if (currencySelect.value == "dolar") {

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToday)

}
if (currencySelect.value == "euro") {

    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / euroToday)
}
if (currencySelect.value == "libra") {

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue / libraToday)
}
if (currencySelect.value == "pesoArgentino") {

    currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(inputCurrencyValue / pesoArgToday)
}
if (currencySelect.value == "bitcoin") {

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "BTC" }).format(inputCurrencyValue / bitcoinToday)
}


currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const imgCurrency = document.querySelector(".img-currency")

    if (currencySelect.value == "dolar"){
       
          currencyName.innerHTML= "Dólar Americano"
          imgCurrency.src= "./assets/dolar.png"
    }
    if (currencySelect.value == "euro"){

        currencyName.innerHTML= "Euro"
        imgCurrency.src= "./assets/euro.png"
    }
    if (currencySelect.value == "libra"){

        currencyName.innerHTML= "Libra Esterlina"
        imgCurrency.src= "./assets/libra 1.png"
    }
    if (currencySelect.value == "pesoArgentino"){

        currencyName.innerHTML= "Peso Argentino"
        imgCurrency.src= "./assets/peso argentino.png"
    }
    if (currencySelect.value == "bitcoin"){

        currencyName.innerHTML= "Bitcoin"
        imgCurrency.src= "./assets/bitcoin 1.png"
    }
    //convertValues()
}  
 
currencySelect.addEventListener("change",changeCurrency) 
convertButton.addEventListener("click", convertValues)