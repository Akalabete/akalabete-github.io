const carouselFiles = [
  {
    url: "./assets/images/slider/ryoji-iwata-corporate-photo-slider-xl-unsplash.avif",
    alt: "Photo d'un homme d'affaire traversant une rue"
  },
  {
    url: "./assets/images/slider/nicholas-green-evenement-photo-slider-xl-unsplash.avif",
    alt: "Photo d'une foule lors d'un événement festif"
  },
  {
    url: "./assets/images/slider/edward-cisneros-mariage-photo-slider-xl-unsplash.avif",
    alt: "Photo d'un couple qui s'embrasse au cours de leur mariage"
  }
];

const carouselInner = document.getElementById('carousel-inner');
const carouselIndicators = document.getElementById('carousel-indicators');


carouselFiles.forEach((_, index) => {
  const indicator = document.createElement('button');
  indicator.setAttribute('type', 'button');
  indicator.setAttribute("aria-label", "boutton du carroussel")
  indicator.classList.add('carousel-indicator');
  indicator.addEventListener('click', () => showSlide(index));
  carouselIndicators.appendChild(indicator);
});
const indicators = document.querySelectorAll(".carousel-indicator");

let currentSlide = 0;
showSlide(currentSlide);

function showSlide(slideIndex) {
  const currentImage = document.createElement('img');
  const prevImage = document.createElement('img');
  const nextImage = document.createElement('img');
  const numSlides = carouselFiles.length;

  prevImage.src = carouselFiles[(slideIndex - 1 + numSlides) % numSlides].url;
  nextImage.src = carouselFiles[(slideIndex + 1) % numSlides].url;
  prevImage.alt = carouselFiles[(slideIndex - 1 + numSlides) % numSlides].alt;
  nextImage.alt = carouselFiles[(slideIndex + 1) % numSlides].alt;

  prevImage.classList.add('carousel-inner-image', 'previous');
  currentImage.classList.add('carousel-inner-image', 'current');
  nextImage.classList.add('carousel-inner-image', 'next');

  currentImage.src = carouselFiles[slideIndex].url;
  currentImage.alt = carouselFiles[slideIndex].alt;


  carouselInner.appendChild(prevImage);
  carouselInner.appendChild(currentImage);
  carouselInner.appendChild(nextImage);

  indicators.forEach((indicator) => {
    indicator.classList.remove('active');
  });
  indicators[slideIndex].classList.add('active');
}

function animateCarousel(slideIndex, direction) {
  const currentImage = carouselInner.querySelector('.current');
  const nextImage = carouselInner.querySelector('.next');
  const prevImage = carouselInner.querySelector('.previous');

  currentImage.style.transform = "translateX(0)";
  nextImage.style.transform = "translateX(100%)";
  prevImage.style.transform = "translateX(-100%)";

  currentImage.offsetHeight;
  nextImage.offsetHeight;
  prevImage.offsetHeight;

  currentImage.style.transition = "transform 0.3s ease-in-out";
  if (direction === "next") {
    currentImage.style.transform = "translateX(-100%)";
    nextImage.style.transition = "transform 0.3s ease-in-out";
    nextImage.style.transform = "translateX(0)";
  } else {
    currentImage.style.transform = "translateX(100%)";
    prevImage.style.transition = "transform 0.3s ease-in-out";
    prevImage.style.transform = "translateX(0)";
  }

  setTimeout(() => {
    currentImage.classList.remove('current');
    nextImage.classList.remove('next');
    prevImage.classList.remove('previous');
    currentImage.style.transition = "";
    currentImage.style.transform = "";
    nextImage.style.transition = "";
    nextImage.style.transform = "";
    prevImage.style.transition = "";
    prevImage.style.transform = "";
    showSlide(slideIndex);
  }, 300);
}

const arrowLeft = document.querySelector('.arrow-left');

const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + carouselFiles.length) % carouselFiles.length;
  animateCarousel(currentSlide, "prev");
});

arrowRight.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % carouselFiles.length;
  animateCarousel(currentSlide, "next");
});

 
function nextSlide() {
  currentSlide = (currentSlide + 1 + carouselFiles.length) % carouselFiles.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + carouselFiles.length) % carouselFiles.length;
  showSlide(currentSlide);
}
