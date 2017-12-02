var search = document.querySelector(".button-sedona-search");
var popup = document.querySelector(".hotel-form");
var arrival = document.querySelector("[name=arrival]");
var departure = document.querySelector("[name=departure]");
var adults = document.querySelector("[name=adults]");
var children = document.querySelector("[name=children]");

popup.classList.add("hotel-form-show");

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("hotel-form-show");
});

popup.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value
   || !children.value ) {
  evt.preventDefault();
}
});