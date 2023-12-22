async function getCoinList() {
    const API_URL = "https://api.coinpaprika.com/v1/coins";
    try {
        const coins = await fetch(API_URL);
        const coinList = await coins.json();
        const top10 = coinList.slice(0,10);
        return top10;
    }
    catch(err) {
        document.getElementById("rate").innerHTML = err.message;
    }
}

async function getOption() {
    let pair = []; // symbol e.g. BTC
    let ids = []; // id e.g. btc-bitcoin

    selectElement1 = document.querySelector('#select1');
    ids.push(selectElement1.options[selectElement1.selectedIndex].value);
    let price1 = await getPrice(selectElement1.options[selectElement1.selectedIndex].value);
    pair.push(selectElement1.options[selectElement1.selectedIndex].text);

    selectElement2 = document.querySelector('#select2');
    ids.push(selectElement2.options[selectElement2.selectedIndex].value);
    let price2 = await getPrice(selectElement2.options[selectElement2.selectedIndex].value);
    pair.push(selectElement2.options[selectElement2.selectedIndex].text);

    const conversionRate = price1/price2;
    let rateText = document.querySelector('#rate');
    rateText.innerHTML = '1 ' + pair[0] + ' = ' + conversionRate + ' ' + pair[1];

}


async function createDropdown() {
    const coinList = await getCoinList();
    let dropDown = document.querySelector('#select1');
    dropDown.innerHTML = '';
    for ( let i = 0; i < 10; i++ ) {
        dropDown.innerHTML += `<option value="` + coinList[i].id + `">` + coinList[i].symbol + `</option>`;
    }
    dropDown = document.querySelector('#select2');
    dropDown.innerHTML = '';
    for ( let i = 0; i < 10; i++ ) {
        dropDown.innerHTML += `<option value="` + coinList[i].id + `">` + coinList[i].symbol + `</option>`;
    }
    document.querySelector('.js-check-option').removeAttribute('disabled');
}

createDropdown();


async function getPrice(token) {
    let API_URL = "https://api.coinpaprika.com/v1/tickers/";
    API_URL += token;
    const coin = await fetch(API_URL);
    const coinList = await coin.json();
    const quote = coinList.quotes.USD.price;

    return quote
}
