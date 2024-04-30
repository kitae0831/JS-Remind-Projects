function caclulate() {
  fetch("item.json")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

caclulate();
