function caclulate() {
  fetch("item.json")
    .then((res) => res.json())
    .then((data) => (document.body.innerHTML = data[0].text));
}

console.log;

caclulate();
