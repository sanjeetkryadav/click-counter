let count = 0;

const countDisplay = document.getElementById("count");
const clickBtn = document.getElementById("clickBtn");
const resetBtn = document.getElementById("resetBtn");

// Load click sound
function playClickSound() {
    const sound = new Audio("click.mp3");
    sound.play();
  }
  

clickBtn.onclick = function () {
  count++;
  countDisplay.innerText = count;

  // Animate
  countDisplay.style.transform = "scale(1.2)";
  setTimeout(() => {
    countDisplay.style.transform = "scale(1)";
  }, 150);

  // Play sound
  playClickSound();
};

resetBtn.onclick = function () {
  count = 0;
  countDisplay.innerText = count;

  // Reset animation
  countDisplay.style.transform = "scale(0.8)";
  setTimeout(() => {
    countDisplay.style.transform = "scale(1)";
  }, 150);
};
