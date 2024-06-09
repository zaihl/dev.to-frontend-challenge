const header = document.getElementById("header");
const headerTitle = document.getElementById("header-title");
const container = document.getElementById("container");
const hero = document.getElementById("hero");
const heroTitle = document.getElementById("hero-title");
const heroDescription = document.getElementById("hero-description");
const content = document.getElementById("content");
const contentTitle = document.getElementById("content-title");
const contentList = document.getElementById("content-list");
const items = document.querySelectorAll(".item");
const itemsTitle = document.querySelectorAll(".item-title");
const itemsDescription = document.querySelectorAll(".item-description");

const imgLinks = {
  0: "https://res.cloudinary.com/dnk5yrlz1/image/upload/fl_preserve_transparency/v1717956871/sample_beach/xfm0mw9lfvtpgmffbusb.jpg?_s=public-apps",
  1: "https://res.cloudinary.com/dnk5yrlz1/image/upload/fl_preserve_transparency/v1717956871/sample_beach/gpujjnqgww8jypqnlidy.jpg?_s=public-apps",
  2: "https://res.cloudinary.com/dnk5yrlz1/image/upload/fl_preserve_transparency/v1717956872/sample_beach/qprmvn0bjsshc3dvcww5.jpg?_s=public-apps",
  3: "https://res.cloudinary.com/dnk5yrlz1/image/upload/fl_preserve_transparency/v1717956871/sample_beach/ajvygkggs4thnwtpjnkl.jpg?_s=public-apps",
  4: "https://res.cloudinary.com/dnk5yrlz1/image/upload/fl_preserve_transparency/v1717956870/sample_beach/etmqs3thytls0gbnaaky.jpg?_s=public-apps",
  5: "https://res.cloudinary.com/dnk5yrlz1/image/upload/fl_preserve_transparency/v1717956872/sample_beach/bj9ownlkx65vmygywn3d.jpg?_s=public-apps",
  6: "https://res.cloudinary.com/dnk5yrlz1/image/upload/fl_preserve_transparency/v1717956872/sample_beach/nyfgf3erbgxam7xkgck8.jpg?_s=public-apps",
  7: "https://res.cloudinary.com/dnk5yrlz1/image/upload/fl_preserve_transparency/v1717956871/sample_beach/d3agdkaenpw0qnrl34k4.jpg?_s=public-apps",
  8: "https://res.cloudinary.com/dnk5yrlz1/image/upload/fl_preserve_transparency/v1717956871/sample_beach/gvuf7jnnrf07tmkohify.jpg?_s=public-apps",
  9: "https://res.cloudinary.com/dnk5yrlz1/image/upload/fl_preserve_transparency/v1717956871/sample_beach/dil0dz0buhqz8xdnxe0s.jpg?_s=public-apps",
};

// --------------------------Adding icons-----------------------------------

items.forEach((item, i) => {
  if (imgLinks[i]) {
    // Ensure imgLinks[i] exists
    const anchor = document.createElement("a");
    const image = document.createElement("img");
    image.src = imgLinks[i];
    image.alt = `Image ${i}`;
    image.title = "source: imgur.com";
    anchor.appendChild(image);
    item.appendChild(anchor);
  }
});

const faScript = document.createElement("script");
faScript.src = "https://kit.fontawesome.com/ffc94cefa6.js"; // Font Awesome Kit URL
faScript.crossOrigin = "anonymous";

// Get the head element
const head = document.getElementsByTagName("head")[0]; // Assuming you have a <head> tag

// Append the script to the head
head.appendChild(faScript);

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
head.appendChild(meta);

const nextBtn = document.createElement("button");
nextBtn.classList.add("next-btn");

const prevBtn = document.createElement("button");
prevBtn.classList.add("prev-btn");

const nextIcon = document.createElement("i");
nextIcon.classList.add("fas", "fa-chevron-right");
nextBtn.appendChild(nextIcon);

const prevIcon = document.createElement("i");
prevIcon.classList.add("fas", "fa-chevron-left");
prevBtn.appendChild(prevIcon);

container.appendChild(nextBtn);
container.appendChild(prevBtn);

// --------------------------Adding Background Animations-----------------------------------

const body = document.body;

// Create main container
const main = document.createElement("div");
main.classList.add("main-container");

// Create scene container
const sceneContainer = document.createElement("div");
sceneContainer.classList.add("scene-container");
main.appendChild(sceneContainer);

// Create star container
const starContainer = document.createElement("div");
starContainer.classList.add("star-container");
sceneContainer.appendChild(starContainer);

// Create sun
const sun = document.createElement("div");
sun.classList.add("sun");
sceneContainer.appendChild(sun);

// Create moon
const moon = document.createElement("div");
moon.classList.add("moon");
sceneContainer.appendChild(moon);

// Create circles (1-4)
const firstCircle = document.createElement("div");
firstCircle.classList.add("first-circle");
sceneContainer.appendChild(firstCircle);

const secondCircle = document.createElement("div");
secondCircle.classList.add("second-circle");
sceneContainer.appendChild(secondCircle);

const thirdCircle = document.createElement("div");
thirdCircle.classList.add("third-circle");
sceneContainer.appendChild(thirdCircle);

const fourthCircle = document.createElement("div");
fourthCircle.classList.add("fourth-circle");
sceneContainer.appendChild(fourthCircle);

// Create toggle button
const toggleButton = document.createElement("button");
const toggleIcon = document.createElement("i");
toggleIcon.classList.add("fa-solid", "fa-moon");
const eyeIcon = document.createElement("i");
eyeIcon.classList.add("fas", "fa-eye-slash");
toggleButton.id = "toggle";

const eyeButton = document.createElement("button");
eyeButton.classList.add("eye-button");
eyeButton.id = "eye";
eyeButton.appendChild(eyeIcon);
toggleButton.appendChild(toggleIcon);
header.appendChild(eyeButton);
header.appendChild(toggleButton);

// Append everything to the body
body.appendChild(main);

let lightMode = true;

async function changeMode() {
  toggleButton.style.cursor = "not-allowed";
  if (!lightMode) {
    main.style.background = "#10104f";
  } else {
    main.style.background = "#f0f0f0";
  }
  main.style.transition = "background 1s";
  if (!lightMode) {
    textToggle("dark");
    sceneContainer.style.animation =
      "dayToNight 2s cubic-bezier(0.290, 0.010, 0.880, 0.145) forwards";
    sun.style.animation =
      "disappearDownwards 2s cubic-bezier(0.290, 0.010, 0.880, 0.145) forwards";
    await delay(1000);
    firstCircle.style.animation =
      "duckDown 3s cubic-bezier(0.235, 0.625, 0.000, 0.910) forwards";
    firstCircle.style.boxShadow =
      "inset 0px 0px 30px rgba(0, 0, 0, 0.3), 0px 0px 10px rgba(0, 0, 0, 0.3)";
    firstCircle.style.transition = "box-shadow 1s";
    secondCircle.style.animation =
      "duckDown 3s cubic-bezier(0.235, 0.625, 0.000, 0.910) forwards";
    secondCircle.style.boxShadow =
      "inset 0px 0px 30px rgba(0, 0, 0, 0.3), 0px 0px 10px rgba(0, 0, 0, 0.3)";
    secondCircle.style.transition = "box-shadow 1s";
    thirdCircle.style.animation =
      "duckDown 3s cubic-bezier(0.235, 0.625, 0.000, 0.910) forwards";
    thirdCircle.style.boxShadow =
      "inset 0px 0px 30px rgba(0, 0, 0, 0.3), 0px 0px 10px rgba(0, 0, 0, 0.3)";
    thirdCircle.style.transition = "box-shadow 1s";
    fourthCircle.style.animation =
      "duckDown 3s cubic-bezier(0.235, 0.625, 0.000, 0.910) forwards";
    fourthCircle.style.boxShadow =
      "inset 0px 0px 30px rgba(0, 0, 0, 0.3), 0px 0px 10px rgba(0, 0, 0, 0.3)";
    fourthCircle.style.transition = "box-shadow 1s";
    await delay(1000);
    moon.style.animation =
      "appearUpwards 2s cubic-bezier(0.290, 0.010, 0.025, 0.955) forwards";
    delay(2000);
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");
  } else {
    textToggle("light");
    moon.style.animation =
      "moonOriginal 2s cubic-bezier(1.000, -0.035, 1.000, 0.450) forwards";
    sceneContainer.style.animation =
      "nightToDay 2s cubic-bezier(0.290, 0.010, 0.880, 0.145) forwards";
    await delay(1000);
    sun.style.animation =
      "sunOriginal 2s cubic-bezier(0.235, 0.625, 0.000, 0.910) forwards";
    await delay(1000);
    firstCircle.style.animation =
      "duckOriginal 3s cubic-bezier(0.235, 0.625, 0.000, 0.910) forwards";
    firstCircle.style.boxShadow = "";
    firstCircle.style.transition = "box-shadow 1s";
    secondCircle.style.animation =
      "duckOriginal 3s cubic-bezier(0.235, 0.625, 0.000, 0.910) forwards";
    secondCircle.style.boxShadow = "";
    secondCircle.style.transition = "box-shadow 1s";
    thirdCircle.style.animation =
      "duckOriginal 3s cubic-bezier(0.235, 0.625, 0.000, 0.910) forwards";
    thirdCircle.style.boxShadow = "";
    thirdCircle.style.transition = "box-shadow 1s";
    fourthCircle.style.animation =
      "duckOriginal 3s cubic-bezier(0.235, 0.625, 0.000, 0.910) forwards";
    fourthCircle.style.boxShadow = "";
    fourthCircle.style.transition = "box-shadow 1s";
    await delay(2000);
    toggleIcon.classList.remove("fa-sun");
    toggleIcon.classList.add("fa-moon");
  }
  return new Promise((resolve) =>
    setTimeout(() => {
      toggleButton.style.cursor = "pointer";
      resolve();
    }, 3000)
  );
}

async function toggleDarkMode() {
  lightMode = !lightMode;
  toggleButton.removeEventListener("click", toggleDarkMode);
  await changeMode();
  toggleButton.addEventListener("click", toggleDarkMode);
}

function toggleBlur() {
  sceneContainer.style.filter = "blur(5px)";
  sceneContainer.style.transition = "filter 2s";
  if (!lightMode) {
    main.style.background = "#10104f";
  } else {
    main.style.background = "rgba(135, 207, 235, 0.6)";
  }
  main.style.transition = "background 1s";
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


toggleButton.addEventListener("click", toggleDarkMode);

// ----------------------Hero Animations-----------------------

const initialHide = () => {
  document.body.style.overflow = "hidden";
  content.style.display = "none";
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
  heroTitle.addEventListener("click", showContent);
};


const hide = async () => {
  eyeIcon.removeEventListener("click", hide);
  eyeIcon.style.cursor = "not-allowed";
  content.style.animation = "fadeout 2s ease forwards";
  const mode = lightMode ? "light" : "dark";
  refreshColor(mode);
  heroTitle.style.animation = "heroTitleAppear 2s forwards";
  heroDescription.style.animation = "heroDescriptionReverse 2s forwards";
  await delay(2000);
  initialHide();
  heroDescription.style.display = "block";
}

const refreshColor = (mode) => {
  if (mode === "dark") {
    heroTitle.style.color = "azure";
  } else {
    heroTitle.style.color = "rgb(0, 26, 53)";
  }
}

const showContent = async () => {
  heroTitle.removeEventListener("click", showContent);
  heroTitle.style.animation =
    "heroTitleHide 1s cubic-bezier(1.000, -0.035, 1.000, 0.450) forwards";
  !lightMode && (heroTitle.style.color = "azure");
   await delay(1000);
  heroDescription.style.animation =
    "heroDescriptionAppear 2s cubic-bezier(0.000, 1.185, 0.440, 0.990) forwards";
   await delay(10000);
  heroDescription.style.animation = "heroDescriptionHide 2s forwards";
   await delay(2000);
  heroDescription.style.display = "none";
  document.body.style.overflow = "hidden";
  content.style.display = "block";
  content.style.animation = "fadein 2s ease forwards";
  prevBtn.style.display = "block";
  nextBtn.style.display = "block";
  toggleBlur();
  eyeIcon.addEventListener("click", hide);
  eyeIcon.style.cursor = "pointer";
};

initialHide();

// ---------------------------------item changing--------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  let carousel = document.querySelector("#content-list");
  let items = document.querySelectorAll(".item");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  // for (let i = 3; i >= 0; i--) {
  //   const item = items[items.length - 1 - i].cloneNode(true);
  //   item.classList.add("item");
  //   carousel.insertAdjacentElement("afterbegin", item);
  // }
  items = document.querySelectorAll(".item");
  // for (const item of items) {
  //   item.style.transform += " translateX(-400%)";
  // }
  let index = 0;
  const totalItems = items.length;

  let i = 0;
  nextBtn.addEventListener("click", () => {
    const item = items[i].cloneNode(true);
    i = (i + 1) % totalItems;
    item.classList.add("item");
    carousel.insertAdjacentElement("beforeend", item);
    items = document.querySelectorAll(".item");
    items.forEach((item) => {
      if (item.classList.contains("expand")) {
        item.style.transform += " scale(0.5)";
      }
      item.classList.remove("expand");
      item.addEventListener("click", expand);
    });
    items.forEach((item) => {
      item.style.transform += " translateX(-100%)";
    });
  });
  let j = 0;
  prevBtn.addEventListener("click", () => {
    const item = items[j + 9].cloneNode(true);
    item.classList.add("item");
    carousel.insertAdjacentElement("afterbegin", item);
    items = document.querySelectorAll(".item");
    items.forEach((item) => {
      if (item.classList.contains("expand")) {
        item.style.transform += " scale(0.5)";
      }
      item.classList.remove("expand");
      item.addEventListener("click", expand);
    });
  });
});

items.forEach((item) => {
  item.addEventListener("click", expand);
});

async function expand(e) {
  const card = await createExpandedForm(
    e.currentTarget.children[0],
    e.currentTarget.children[1],
    e.currentTarget.children[2].children[0]
  );
  const container = document.createElement("div");
  container.classList.add("card-container");
  container.appendChild(card);
  body.appendChild(container);
  container.style.animation = "blurContainer 2s ease forwards";
  card.style.animation = "expandCard 0.5s ease forwards";
  await delay(500);
  const button = document.createElement("button");
  button.classList.add("expand-button");
  const buttonIcon = document.createElement("i");
  buttonIcon.classList.add("fa-solid", "fa-x");
  button.appendChild(buttonIcon);
  body.appendChild(button);
  !lightMode
    ? (button.style.color = "azure")
    : (button.style.color = "#452c01");
  button.style.animation = "expandButton 0.5s ease-out forwards";
  button.addEventListener("click", async () => {
    button.style.animation = "removeButton 2s ease forwards";
    card.style.animation = "removeCard 2s ease forwards";
    container.style.animation = "removeContainer 2s ease forwards";
    await delay(2000);
    card.remove();
    button.remove();
    container.remove();
  });
  console.log(e.target);
}

async function createExpandedForm(titleElement, descriptionElement, imageElement) {
  const image = imageElement.cloneNode(true);
  image.classList.add("expanded-image");
  const title = titleElement.textContent;
  const description = descriptionElement.textContent;
  const expandedForm = document.createElement("div");
  expandedForm.classList.add("expanded-form");
  const expandedTitle = document.createElement("h2");
  expandedTitle.textContent = title;
  expandedForm.appendChild(expandedTitle);
  const expandedDescription = document.createElement("p");
  expandedDescription.textContent = description;
  const expandedDescriptionContainer = document.createElement("div");
  expandedDescriptionContainer.classList.add("expanded-description-container");
  expandedDescriptionContainer.appendChild(image);
  expandedDescriptionContainer.appendChild(expandedDescription);
  expandedForm.appendChild(expandedDescriptionContainer);
  return expandedForm;
}

const textToggle = (mode) => {
  everything = document.querySelectorAll("*");
  if (mode === "dark") {
    everything.forEach((el) => {
      el.classList.remove("white");
      el.classList.add("dark");
    });
  } else {
    everything.forEach((el) => {
      el.classList.add("white");
      el.classList.remove("dark");
    });
  }
};

