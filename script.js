const cards = document.querySelectorAll(".card");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".header ul");

const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => {
      item.classList.remove("active");
    });
    link.classList.add("active");
  });
});

let currentCard = 0;

showCard(currentCard);

function showCard(i) {
  cards.forEach(card => {
    card.classList.remove("active");
  });
  cards[i].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentCard++;
  if(currentCard >= cards.length) {
    currentCard = 0;
  }
  showCard(currentCard);
});

prevBtn.addEventListener("click", () => {
  currentCard--;
  if(currentCard < 0) {
    currentCard = cards.length - 1;
  }
  showCard(currentCard);
});