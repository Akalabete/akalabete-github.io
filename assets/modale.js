document.addEventListener("DOMContentLoaded", function () {
    

 
  
    const galleryItems = document.querySelectorAll(".gallery-item");
    const modal = document.querySelector(".modal");
    const modalImage = document.querySelector(".modal-image");
    const modalPrevBtn = document.querySelector(".modal-prev-btn");
    const modalNextBtn = document.querySelector(".modal-next-btn");
    const modalCloseBtn = document.querySelector(".modal-close-btn");
        
    let currentImageIndex = 0;

    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            console.log("clicked")
            modal.style.display = "block";
            currentImageIndex = index;
            updateModalImage();
        });
    });

    
    function updateModalImage() {
        modalImage.src = galleryItems[currentImageIndex].src;
        modalImage.alt = galleryItems[currentImageIndex].alt;
    }

    
     modalPrevBtn.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        updateModalImage();
    });

    modalNextBtn.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        updateModalImage();
    });

    
    modalCloseBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });


  });

  
  
