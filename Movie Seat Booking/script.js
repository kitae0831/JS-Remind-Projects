const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
// document.querySelector() 메서드는 문서에서 주어진 CSS 선택자와 일치하는 첫 번째 요소를 반환
// document.querySelectorAll() 메서드는 문서에서 주어진 CSS 선택자와 일치하는 모든 요소를 반환
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
    // 빈자리에만 작동하도록 조건을 부여!
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
