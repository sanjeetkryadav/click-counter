let count = 0;
const countDisplay = document.getElementById("count");
const button = document.getElementById("clickBtn");

button.onclick = function () {
  count++;
  countDisplay.innerText = count;
};
