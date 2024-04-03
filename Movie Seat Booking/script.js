const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
// document.querySelector() 메서드는 문서에서 주어진 CSS 선택자와 일치하는 첫 번째 요소를 반환
// document.querySelectorAll() 메서드는 문서에서 주어진 CSS 선택자와 일치하는 모든 요소를 반환
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

const ticketPrice = +movieSelect.value;
