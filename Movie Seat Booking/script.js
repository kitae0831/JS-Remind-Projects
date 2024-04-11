const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
// document.querySelector() 메서드는 문서에서 주어진 CSS 선택자와 일치하는 첫 번째 요소를 반환
// document.querySelectorAll() 메서드는 문서에서 주어진 CSS 선택자와 일치하는 모든 요소를 반환
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // Copy selected seats into arr
  // Map through array
  // return a new array indexes
  // seats에 넘버링을 하도록 mapping하고 spread함
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  // 첫 번째 매개변수는 저장할 항목의 키. "selectedSeats"라는 키를 사용.
  // 두 번째 매개변수는 저장할 데이터. 이 데이터를 문자열로 변환하기 위해 JSON.stringify() 함수를 사용. seatsIndex 배열은 JSON 문자열로 변환.

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = localStorage.getItem("seletedSeats");

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
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

//Initial count and total set
updateSelectedCount();
