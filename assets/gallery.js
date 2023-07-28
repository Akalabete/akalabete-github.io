const galleryData = {

    concerts: [
        {
            url: "./assets/images/gallery/concerts/aaron-paul-concert-photo-gallery-unsplash.jpg",
            description: "Photo du public d'un concert"
        },
        {
            url: "./assets/images/gallery/concerts/austin-neill-concert-photo-gallery-unsplash.jpg",
            description: "Photo du chanteur d'un concert"
        }
    ],
    entreprise: [

    
        {
            url: "./assets/images/gallery/entreprise/ali-morshedlou-corporate-photo-gallery-unsplash.jpg",
            description: "Photo-portrait d'un homme d'affaire en costume sombre cravatte rouge"
        },
        {
            url: "./assets/images/gallery/entreprise/jason-goodman-corporate-photo-gallery-unsplash.jpg",
            description: "Photo d'une jeune femme souriante dans une réunion en entreprise"
        },
        {
            url: "./assets/images/gallery/entreprise/mateus-campos-felipe-corporate-photo-gallery-unsplash.jpg",
            description: "Photo d'une femme joyeuse au travail"
        }
    ],
    mariage: [
        {
            url: "./assets/images/gallery/mariage/hannah-busing-mariage-photo-gallery-unsplash.jpg",
            description: "Photo d'un couple qui se tiennent les mains pour célébrer leur union"
        },
        {
            url: "./assets/images/gallery/mariage/jakob-owens-mariage-photo-gallery-unsplash.jpg",
            description: "Photo de jeunes mariés sous un palmier"
        }

    ],
    portraits:[
        {
            url: "./assets/images/gallery/portraits/ade-tunji-portrait-photo-gallery-unsplash.jpg",
            description: "Photo-portrait d'un homme afro-américain qui ferme les yeux"
        },
        {
            url: "./assets/images/gallery/portraits/nino-van-prattenburg-portrait-photo-gallery-unsplash.jpg",
            description: "Photo-portrait d'une jeune femme à lunettes à travers un grillage"
        }
    ]
        
}


document.addEventListener("DOMContentLoaded", function () {
    const galleryElement = document.getElementById("gallery");
    function createImageElement(imageUrl, imageDescription) {
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.alt = imageDescription;
      imgElement.classList.add("gallery-item");
      return imgElement;
    }
    const categories = Object.keys(galleryData);
    categories.forEach((category) => {
      const categoryTitle = document.createElement("h3");
      categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      galleryElement.appendChild(categoryTitle);
      galleryData[category].forEach((imageData) => {
        const imgElement = createImageElement(imageData.url, imageData.description);
        galleryElement.appendChild(imgElement);
      });
    });
  });
  