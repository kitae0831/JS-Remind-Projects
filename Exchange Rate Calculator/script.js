const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

function caclulate() {
  fetch("item.json")
    .then((res) => res.json())
    .then((data) => (document.body.innerHTML = data[0].text));
}

caclulate();
