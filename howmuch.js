function convertCurrency() {
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const amount = document.getElementById("amount").value;

  const apiKey = "1ad1a8e5b6764e448f9fc28a69c239ed";
  const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const exchangeRate = data.rates[toCurrency];
      const convertedAmount = (amount * exchangeRate).toFixed(2);
      document.getElementById(
        "result"
      ).innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    })
    .catch((error) => console.error("Error fetching exchange rate:", error));
}
