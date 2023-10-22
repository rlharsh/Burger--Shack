const BUTTON_NEXT = document.getElementById("next-daily-button");
const BUTTON_PREVIOUS = document.getElementById("previous-daily-button");
const CAROUSEL = document.getElementById("deal-carousel");
const CARD_COUNT = document.querySelectorAll(".deal-item").length + 1;
let currentCard = 1;
let selectedCarousel = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    goPreviousDeal();
  }
  if (event.key === "ArrowRight") {
    goNextDeal();
  }
  if (event.key === "Enter") {
    console.log("enter check");
  }
});

setInterval(() => {
  /*
    if (currentCard + 1 < CARD_COUNT) {
        currentCard++;
    } else {
        currentCard = 1;
    }

    moveSlider();
    */
}, 10000);

const goNextDeal = () => {
  if (currentCard + 1 < CARD_COUNT) {
    currentCard++;
  } else {
    currentCard = 1;
  }

  moveSlider();
};

const goPreviousDeal = () => {
  if (currentCard != 1) {
    currentCard--;
  } else {
    currentCard = CARD_COUNT - 1;
  }

  moveSlider();
};

BUTTON_NEXT.addEventListener("click", () => {
  console.log("HELLO!");
  goNextDeal();
});

BUTTON_PREVIOUS.addEventListener("click", () => {
  goPreviousDeal();
});

const moveSlider = () => {
  const selector = `.deal-item:nth-child(${currentCard})`;
  const box = document.querySelector(selector);
  box.scrollIntoView({
    behavior: "smooth",
    inline: "start",
  });
};
