const content = document.querySelector("#content");

const divImages = document.createElement("div");
divImages.id = "imageDiv";

const buttonBack = document.createElement("img");
buttonBack.src = "./images/ProjectImage/backBtn.png";
buttonBack.style.width = "5vw";
buttonBack.style.height = "10vh";
buttonBack.addEventListener("click", function () {
  setImageWithTransition(--index, false);
});

const buttonFoward = document.createElement("img");
buttonFoward.src = "./images/ProjectImage/fowardBtn.png";
buttonFoward.style.width = "5vw";
buttonFoward.style.height = "10vh";
buttonFoward.addEventListener("click", function () {
  setImageWithTransition(++index, true);
});

const carouselDiv = document.createElement("div");
carouselDiv.id = "carouselDiv";
const photos = [];
let index = 0;
let slide = true;

loadPhotos();
photoSlide();

divImages.appendChild(buttonBack);
divImages.appendChild(carouselDiv);
divImages.appendChild(buttonFoward);

content.appendChild(divImages);

function loadPhotos() {
  for (let i = 1; i <= 5; i++) {
    let img = document.createElement("img");
    img.src = "./images/UserImage/a" + i + ".jpg";
    photos.push(img);
  }
  carouselDiv.appendChild(photos[index]);
}

function photoSlide() {
  if (slide) {
    setInterval(carousel, 2500);
  }
}

function carousel() {
  carouselDiv.removeChild(carouselDiv.lastChild);
  carouselDiv.appendChild(photos[index++]);
  if (index > 4) {
    index = 0;
  }
}

function setImageWithTransition(imageIndex, foward) {
  slide = false;
  carouselDiv.style.opacity = "0";
  setTimeout(() => {
    setImageOnCarousel(imageIndex);
    carouselDiv.style.opacity = "1";
  }, 700);
}

function setImageOnCarousel(imageIndex) {
  if (imageIndex === photos.length) {
    imageIndex = 0;
  } else if (imageIndex < 0) {
    imageIndex = 4;
  }
  index = imageIndex;
  carouselDiv.removeChild(carouselDiv.lastChild);
  carouselDiv.appendChild(photos[imageIndex]);

  setTimeout(() => {
    slide = true;
  }, 700);
}
