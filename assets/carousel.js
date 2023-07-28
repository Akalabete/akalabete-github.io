const carouselFiles = [
    {
      url: "./assets/images/slider/edward-cisneros-mariage-photo-slider-lg-unsplash.avif",
      alt: "Photo d'un couple qui s'embrasse au cours de leur mariage"
    },
    {
      url: "./assets/images/slider/nicholas-green-evenement-photo-slider-lg-unsplash.avif",
      alt: "Photo d'une foule lors d'un événement festif"
    },
    {
      url: "./assets/images/slider/ryoji-iwata-corporate-photo-slider-lg-unsplash.avif",
      alt: "Photo d'un homme d'affaire traversant une rue"
    }
  ];
  
const carouselInner = document.getElementById('carousel-inner');
const carouselIndicators = document.getElementById('carousel-indicators');



  carouselFiles.forEach((file, index) => {
    // Create a slide for each image
    const slide = document.createElement('div');
    slide.classList.add('carousel-item');
    if (index === 0) {
      slide.classList.add('active');
    }
    const image = document.createElement('img');
    image.src = file.url;
    image.alt = file.alt;
    slide.appendChild(image);
    carouselInner.appendChild(slide);
  
    // Create a bullet point for each slide
    const indicator = document.createElement('button');
    indicator.setAttribute('type', 'button');
    indicator.classList.add('carousel-indicator');
    if (index === 0) {
      indicator.classList.add('active');
    }
    indicator.addEventListener('click', () => showSlide(index));
    carouselIndicators.appendChild(indicator);
  });
  
  let currentSlide = 0;
  function showSlide(slideIndex) {
    const slides = document.getElementsByClassName('carousel-item');
    const indicators = document.getElementsByClassName('carousel-indicator');
    if (slideIndex < 0 || slideIndex >= slides.length) {
      return;
    }
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
      indicators[i].classList.remove('active');
  
      // Set z-index to -1 for all images
      const image = slides[i].querySelector('img');
      image.style.zIndex = -1;
    }
  
    slides[slideIndex].classList.add('active');
    indicators[slideIndex].classList.add('active');
  
    // Set z-index to 1 for the active image
    const activeImage = slides[slideIndex].querySelector('img');
    activeImage.style.zIndex = 1;
  
    // Reload the image to force it to update
    activeImage.src = carouselFiles[slideIndex].url + '?' + new Date().getTime();
  
    currentSlide = slideIndex;
  }
  
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselFiles.length;
    showSlide(currentSlide);
    console.log("next clicked");
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselFiles.length) % carouselFiles.length;
    showSlide(currentSlide);
    console.log("previous clicked");
  }
  
  // Add event listeners for navigation arrows
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  arrowLeft.addEventListener('click', prevSlide);
  arrowRight.addEventListener('click', nextSlide);
  