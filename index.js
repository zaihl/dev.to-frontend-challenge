let headingArray = document.querySelectorAll(".content-list-item-title");
let gridItemArray = document.querySelectorAll(".content-list-item");
let descriptionArray = document.querySelectorAll(".content-list-item-description");
const heroTitle = document.getElementById("hero-title");
const heroDesc = document.getElementById("hero-description");
const content = document.getElementById("content");

const cardArray = [];
const cardElementArray = [];
let a, b;

let shufflePaused = false;

async function assignShuffledArray() {
  b = await new Promise((resolve) => setTimeout(resolve, 1000))
  while (!shufflePaused) {
    if (shufflePaused) {
      break;
    } else {
        await shuffle(cardArray)
    let i = 0;
    for (const heading of headingArray) {
      heading.textContent = cardArray[i].title;
      i++;
    }
    i = 0;
    for (const description of descriptionArray) {
      description.textContent = cardArray[i].info;
      i++;
    }
    a = await new Promise((resolve) => setTimeout(resolve, 4000));
    if (shufflePaused) {
      break;
    }
    }
  }
}

async function shuffle(cardArray) {
  for (let i = cardArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i
    [cardArray[i], cardArray[randomIndex]] = [
      cardArray[randomIndex],
      cardArray[i],
    ];
  }
}

async function pauseShuffle(e) {
  shufflePaused = true;
  e.target.childNodes[1].style.opacity = 0;
  e.target.childNodes[3].style.opacity = 1;
  e.target.style["border-color"] = "#e63946";
}

async function resumeShuffle(e) {
  shufflePaused = false;
  await new Promise(resolve => setTimeout(resolve, 100))
  e.target.childNodes[1].style.opacity = 1;
  e.target.childNodes[3].style.opacity = 0;
  e.target.style["border-color"] = "#545b6a";
  await a.clearTimeout();
  await b.clearTimeout();
  await assignShuffledArray();
}

async function handleClick(e) {
  e.target.style.transform = "translate(0, -400px)";
  heroDesc.style.transform = "translate(0, -50%)";
  await new Promise((resolve) => setTimeout(resolve, 10000));
  await handleAnimation(heroDesc);
  heroDesc.style.border = "4px solid white"
  heroDesc.style.animation = "loading 10s linear forwards"
  headingArray = document.querySelectorAll(".content-list-item-title");
  gridItemArray = document.querySelectorAll(".content-list-item");
  descriptionArray = document.querySelectorAll(
    ".content-list-item-description"
  );
  let i = 0;
  for (const heading of headingArray) {
    cardArray[i] = { title: heading.textContent, info: undefined };
    cardElementArray[i] = { head: heading, desc: undefined };
    i++;
  }
  i = 0;
  for (const description of descriptionArray) {
    cardArray[i] = { ...cardArray[i], info: description.textContent };
    cardElementArray[i] = { ...cardElementArray[i], desc: description };
    i++;
  }

  document.body.style.overflow = "visible"
  assignShuffledArray();
}

async function handleAnimation(element) {
  heroTitle.style.display = "none";
  let count = 1;
  while (count <= 100) {
    element.style.transform = "translate(-0%, -50%)";
    element.style.transform += `scale(${1 + count / 10})`;
    element.style.opacity = `${100 - 2 * count}%`;
    await new Promise((resolve) => setTimeout(resolve, 10));
    count++;
  }
  element.style.display = "none";
  content.style.display = "flex";

}

let index = 0;
for (const item of gridItemArray) {
  item.addEventListener("mouseenter", pauseShuffle);
  item.addEventListener("mouseleave", resumeShuffle);
  index++;
}

heroTitle.addEventListener("click", handleClick);
