const galleryData = {

    Concerts: [
        {
            url: "./assets/images/gallery/concerts/aaron-paul-concert-photo-gallery-unsplash.avif",
            description: "Photo du public d'un concert"
        },
        {
            url: "./assets/images/gallery/concerts/austin-neill-concert-photo-gallery-unsplash.avif",
            description: "Photo du chanteur d'un concert"
        }
    ],
    Entreprise: [

    
        {
            url: "./assets/images/gallery/entreprise/ali-morshedlou-corporate-photo-gallery-unsplash.avif",
            description: "Photo-portrait d'un homme d'affaire en costume cravatte"
        },
        {
            url: "./assets/images/gallery/entreprise/jason-goodman-corporate-photo-gallery-unsplash.avif",
            description: "Photo d'une jeune femme souriante dans une réunion en entreprise"
        },
        {
            url: "./assets/images/gallery/entreprise/mateus-campos-felipe-corporate-photo-gallery-unsplash.avif",
            description: "Photo d'une femme joyeuse au travail"
        }
    ],
    Mariage: [
        {
            url: "./assets/images/gallery/mariage/hannah-busing-mariage-photo-gallery-unsplash.avif",
            description: "Photo d'un couple qui se tiennent les mains pour célébrer leur union"
        },
        {
            url: "./assets/images/gallery/mariage/jakob-owens-mariage-photo-gallery-unsplash.avif",
            description: "Photo de jeunes mariés sous un palmier"
        }

    ],
    Portraits:[
        {
            url: "./assets/images/gallery/portraits/ade-tunji-portrait-photo-gallery-unsplash.avif",
            description: "Photo-portrait d'un homme afro-américain qui ferme les yeux"
        },
        {
            url: "./assets/images/gallery/portraits/nino-van-prattenburg-portrait-photo-gallery-unsplash.avif",
            description: "Photo-portrait d'une jeune femme à lunettes à travers un grillage"
        }
    ]
        
}


const categories = ["Tous", ...Object.keys(galleryData)];
const galleryContainer = document.querySelector(".filters");
let activeIndex = 0;
for (let i = 0; i < categories.length; i++) {
  const galleryBtn = document.createElement("button");
  galleryBtn.setAttribute('type', 'button');
  galleryBtn.setAttribute("tabindex", "0")
  galleryBtn.classList.add(`${categories[i]}`);
  galleryBtn.classList.add("nav-link")
  galleryBtn.innerText = categories[i];
  galleryBtn.addEventListener('click', (function(index) {
    return function() {
      showGallerySpec(index);
      setActiveButton(index);
    };
  })(i));
  galleryContainer.appendChild(galleryBtn);
  if (i === 0){
    galleryBtn.classList.add("active");
  }
}

showGallerySpec(0);

function setActiveButton(index) {
    const galleryButtons = document.querySelectorAll(".nav-link");
    galleryButtons.forEach((button, buttonIndex) => {
      if (buttonIndex === index) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
}

function showGallerySpec(index) {
    switch (index) {
      case 0:
        const allData = getAllUrls(galleryData);
        printPic(allData.urls, allData.alts);
        break;
      default:
        const categoryData = getUrls(galleryData[categories[index]]);
        printPic(categoryData.urls, categoryData.alts);
        break;
    }
    
}
function getAllUrls(galleryData) {
    const allUrls = [];
    const allAlts= [];
    const categoryKeys = Object.keys(galleryData);
  
    for (const categoryKey of categoryKeys) {
      const category = galleryData[categoryKey];
  
      for (const item of category) {
        if (item.hasOwnProperty('url')) {
          allUrls.push(item.url);
          allAlts.push(item.description);
        }
      }
    }
  
    return { urls: allUrls, alts: allAlts };
}

function getUrls(galleryCategory) {
    const allUrls = [];
    const allAlts = [];
    for (const item of galleryCategory) {
      if (item.hasOwnProperty('url')) {
        allUrls.push(item.url);
        allAlts.push(item.description); // Utiliser item.description au lieu de item.alt
      }
    }
  
    return { urls: allUrls, alts: allAlts };
}
function printPic(allUrls, allAlts) {
  const galleryContainer = document.querySelector(".gallery");
  
  
  const existingGalleryContent = document.querySelector(".gallery-content");
  if (existingGalleryContent) {
      existingGalleryContent.remove();
  }

  const galleryContent = document.createElement("div");
  galleryContent.classList.add("gallery-content");
  galleryContainer.appendChild(galleryContent);    
  for (let i = 0; i < allUrls.length; i++) {
      const item = document.createElement("img");
      item.setAttribute("tabindex", "0");
      item.setAttribute("aria-label", allAlts[i]);
      item.classList.add("gallery-item")
      item.src = allUrls[i];
      item.alt = allAlts[i];
      galleryContent.appendChild(item);
  }
}


