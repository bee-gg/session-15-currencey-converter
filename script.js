document.getElementById("submit").addEventListener('click', convertCurrency) //instead of onclick

function convertCurrency() { //function is a set of instructions how to do little bits
  const amount = gbpounds.value;

  const myHeaders = new Headers();
  myHeaders.append("apikey", "0Ain61x3cUlzOhHrTmTIKkjqFSAfou2D"); //link to the api

  const requestOptions = {
    method: 'GET', 
    headers: myHeaders
  };

  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=eur&from=gbp&amount=${amount}`, requestOptions)
    .then((response) => { // response is the information received back from the 'fetch'
      return response.json() 
    })
    .then((data) => {
      console.log(data);
      document.getElementById("result").innerHTML = data.result.toFixed(2); // 2 is a paraemeter
    })
}




