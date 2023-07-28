function updateSliderImages() {
    const sliderImages = document.getElementById("sliderImages");
  
    // Chemins d'accès aux images pour chaque breakpoint
    const imagePaths = {
      xs: [
        "./assets/images/slider/slider-sm/edward-cisnero-mariage-photo-slider-sm-unsplash.jpg",
        "./assets/images/slider/slider-sm/nicholas-green-evenement-photo-slider-sm-unsplash.jpg",
        "./assets/images/slider/slider-sm/ryoji-iwata-corporate-photo-slider-sm-unsplash.jpg",

      ],
      sm: [
        "./assets/images/slider/slider-sm/edward-cisnero-mariage-photo-slider-sm-unsplash.jpg",
        "./assets/images/slider/slider-sm/nicholas-green-evenement-photo-slider-sm-unsplash.jpg",
        "./assets/images/slider/slider-sm/ryoji-iwata-corporate-photo-slider-sm-unsplash.jpg",
      ],
      md: [
        "./assets/images/slider/slider-md/edward-cisnero-mariage-photo-slider-sm-unsplash.jpg",
        "./assets/images/slider/slider-md/nicholas-green-evenement-photo-slider-sm-unsplash.jpg",
        "./assets/images/slider/slider-md/ryoji-iwata-corporate-photo-slider-sm-unsplash.jpg",
      ],
      lg: [
        "./assets/images/slider/slider-lg/edward-cisnero-mariage-photo-slider-sm-unsplash.jpg",
        "./assets/images/slider/slider-lg/nicholas-green-evenement-photo-slider-sm-unsplash.jpg",
        "./assets/images/slider/slider-lg/ryoji-iwata-corporate-photo-slider-sm-unsplash.jpg",
      ],
      xl: [
        "./assets/images/slider/slider-xl/edward-cisnero-mariage-photo-slider-sm-unsplash.jpg",
        "./assets/images/slider/slider-xl/nicholas-green-evenement-photo-slider-sm-unsplash.jpg",
        "./assets/images/slider/slider-xl/ryoji-iwata-corporate-photo-slider-sm-unsplash.jpg",
      ],
    };
  
    // Obtenir la taille d'écran actuelle
    const currentScreenWidth = window.innerWidth;
  
    // Déterminer le breakpoint actuel en fonction de la taille d'écran
    let currentBreakpoint = "xs";
    if (currentScreenWidth >= 576 && currentScreenWidth < 768) {
      currentBreakpoint = "sm";
    } else if (currentScreenWidth >= 768 && currentScreenWidth < 992) {
      currentBreakpoint = "md";
    } else if (currentScreenWidth >= 992 && currentScreenWidth < 1200) {
      currentBreakpoint = "lg";
    } else if (currentScreenWidth >= 1200) {
      currentBreakpoint = "xl";
    }
  
    // Générer le code HTML pour les images du slider en fonction du breakpoint actuel
    const imageHTML = imagePaths[currentBreakpoint].map((path) => {
      return `<div class="carousel-item"><img src="${path}" class="d-block w-100" alt="Photo du slider"></div>`;
    }).join('');
  
    // Mettre à jour les images du slider
    sliderImages.innerHTML = imageHTML;
  }
  
  // Mettre à jour les images du slider lors du chargement initial de la page
  updateSliderImages();
  
  // Mettre à jour les images du slider lors du redimensionnement de la fenêtre
  window.addEventListener("resize", updateSliderImages);