const quoteBox = document.getElementById("quote-box");
const inputBox = document.getElementById("input-box");
const timer = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart-btn");
const totalTyped = document.getElementById("totalTyped");
const correctTyped = document.getElementById("correctTyped");

const keySound = document.getElementById("key-sound");

let timerStarted = false;
let time = 0;
let timerInterval;
let quote = "";

//   Render quote as spans
const renderQuote = (text) => {
  quote = text;
  quoteBox.innerHTML = "";
  quote.split("").forEach((char) => {
    const span = document.createElement("span");
    span.innerText = char;
    quoteBox.appendChild(span);
  });
};

//   Fetch random quote from API
const fetchApi = async () => {
  try {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    );
    const data = await res.json();
    renderQuote(data.data.content);
  } catch (error) {
    console.error(error);
  }
};

inputBox.addEventListener("input", () => {
  // 🎧 Typing sound
  keySound.currentTime = 0;
  keySound.play();
  if (!timerStarted && inputBox.value.trim()) {
    timerStarted = true;
    timerInterval = setInterval(() => {
      time++;
      timer.innerText = time;
    }, 1000);
  }

  const quoteSpans = quoteBox.querySelectorAll("span");
  const typedText = inputBox.value;

  let correctCount = 0;

  quoteSpans.forEach((span, i) => {
    const typedChar = typedText[i];

    if (typedChar == null) {
      span.classList.remove("correct", "incorrect");
    } else if (typedChar === span.innerText) {
      span.classList.add("correct");
      span.classList.remove("incorrect");
      correctCount++;
    } else {
      span.classList.add("incorrect");
      span.classList.remove("correct");
    }
  });

  totalTyped.innerText = typedText.length;
  correctTyped.innerText = correctCount;

  //   Live WPM & Accuracy
  const minutes = time > 0 ? time / 60 : 1 / 60;
  const wpm = Math.round(typedText.length / 5 / minutes);
  const acc =
    typedText.length > 0
      ? Math.round((correctCount / typedText.length) * 100)
      : 0;

  wpmDisplay.innerText = wpm;
  accuracyDisplay.innerText = `${acc}%`;

  if (typedText === quote) {
    clearInterval(timerInterval);
    saveScore(wpm, acc);
  }
});

//   Restart
restartBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  time = 0;
  timer.innerText = 0;
  timerStarted = false;
  inputBox.value = "";
  totalTyped.innerText = "0";
  correctTyped.innerText = "0";
  wpmDisplay.innerText = "0";
  accuracyDisplay.innerText = "0%";
  fetchApi();
});
fetchApi();
 


