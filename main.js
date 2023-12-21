let menu = document.querySelector("#menu");
let navBar = document.querySelector(".navbar");
let flag = false;
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navBar.classList.toggle("active");
  flag = !flag;
  if (flag) {
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  dealy: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".feature-content, .collapsible, .review-container, .credit-container",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1", { origin: "left" });
ScrollReveal().reveal(".home-content p", { origin: "right" });

// Typing
const typed = new Typed(".multiple-text", {
  strings: [
    "The Bot that never calls in sick!",
    "Your server's resident jokester",
    "Laugh out loud with our bot",
    "Bringing fun back to your server",
    "The Bot with a sense of humor",
    "Your server's official comedian",
    "Endless fun and shenanigans",
    "Making Discord funny again",
    "Your server's laughter therapy",
    "Laughter guaranteed, or your money back",
    "The bot that tells better jokes than your friends",
    "More puns than a dad at a barbecue",
    "Your server's stand-up comedy act",
    "Turning your server into a comedy club",
    "The Bot with a PhD in humor",
    "Your server's funny bone specialist",
    "Spreading smiles one command at a time",
    "Laugh now, moderate later",
    "Your server's unofficial comedy hour",
    "Where jokes meet moderation",
    "Banishing boredom one punchline at a time",
    "The Bot that laughs at your jokes (even the bad ones)",
    "Your server's resident prankster",
    "Adding a dash of humor to your server",
    "The Bot that can out-funny your friends",
    "Your server's comedy central",
    "Laughs, memes, and more!",
    "Bringing smiles, one command at a time",
    "Your server's daily dose of giggles",
    "The Bot that knows all the best punchlines",
    "Comedy gold at your service",
    "Your server's stand-up star",
    "The Bot with an infectious laughter feature",
    "Where fun and moderation collide",
    "Adding a touch of levity to your server",
    "Laughter as a service",
    "Your server's source of daily chuckles",
    "The Bot that won't stop cracking jokes",
    "Turning moderation into a comedy show",
    "Because servers are better with a side of humor",
    "Banter, jokes, and mischief – all in one bot",
  ],
  typeSpeed: 60,
  backSpeed: 20,
  backDelay: 1000,
  loop: true,
});

// Collapsibles
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  const header = collapsible.querySelector(".collapsible-header");
  const content = collapsible.querySelector(".collapsible-content");
  const arrowIcon = header.querySelector("i");

  header.addEventListener("click", () => {
    const isOpen = content.classList.contains("show-content");

    collapsibles.forEach((otherCollapsible) => {
      const otherContent = otherCollapsible.querySelector(
        ".collapsible-content"
      );
      const otherArrowIcon = otherCollapsible.querySelector("i");

      otherContent.classList.remove("show-content");
      otherArrowIcon.classList.replace("bx-chevron-down", "bx-chevron-right");
      otherContent.style.maxHeight = 0;
    });

    if (!isOpen) {
      content.classList.add("show-content");
      arrowIcon.classList.replace("bx-chevron-right", "bx-chevron-down");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Header style change
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("transparent");
  } else {
    header.classList.remove("transparent");
  }
});

// Reviews
const reviewContainer = document.querySelector(".review-container");
const prevReviewBtn = document.getElementById("prevReviewBtn");
const nextReviewBtn = document.getElementById("nextReviewBtn");

const reviews = document.querySelectorAll(".review-box");
let currentIndex = 0;

function showReviews(startIndex) {
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }

  for (let i = startIndex; i < startIndex + 2; i++) {
    if (i < reviews.length) {
      reviews[i].style.display = "block";
    }
  }
}

function showNextReviews() {
  currentIndex += 2;
  if (currentIndex >= reviews.length) {
    currentIndex = 0;
  }
  showReviews(currentIndex);
}

function showPrevReviews() {
  currentIndex -= 2;
  if (currentIndex < 0) {
    currentIndex = reviews.length - 2;
  }
  showReviews(currentIndex);
}

prevReviewBtn.addEventListener("click", showPrevReviews);
nextReviewBtn.addEventListener("click", showNextReviews);

showReviews(currentIndex);

// Scroll to top
let mybutton = document.getElementById("scroll-to-top-btn");
let myicon = document.getElementById("scroll-to-top-icon");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    mybutton.style.opacity = 1;
    mybutton.style.cursor = "pointer";
    myicon.style.cursor = "pointer";
  } else {
    mybutton.style.opacity = 0;
    mybutton.style.cursor = "default";
    myicon.style.cursor = "default";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

const modeSwitch = document.getElementById("dark-mode-toggle");
modeSwitch.addEventListener("change", () => {
  if (modeSwitch.checked) {
    localStorage.setItem("dark-mode", "enabled");
    toggleDarkMode();
  } else {
    localStorage.setItem("dark-mode", "disabled");
    toggleDarkMode();
  }
});

if (localStorage.getItem("dark-mode") === "enabled") {
  toggleDarkMode();
  modeSwitch.checked = true;
}