// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  // Close mobile menu after clicking a link

  navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


// =========================
// FOOTER YEAR
// =========================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// =========================
// IMAGE LIGHTBOX
// =========================

const lightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.querySelector(".lightbox-close");

const galleryImages = document.querySelectorAll(
  ".gallery-item img"
);


galleryImages.forEach(image => {

  image.addEventListener("click", () => {

    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt;

    const label = image.parentElement.querySelector("span");

    if (label) {
      lightboxCaption.textContent = label.textContent;
    } else {
      lightboxCaption.textContent = "";
    }

    lightbox.classList.add("active");

    lightbox.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow = "hidden";

  });

});


// Close button

if (lightboxClose) {

  lightboxClose.addEventListener("click", closeLightbox);

}


// Close when clicking the dark background

if (lightbox) {

  lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {
      closeLightbox();
    }

  });

}


// Close using Escape key

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeLightbox();
  }

});


function closeLightbox() {

  if (!lightbox) return;

  lightbox.classList.remove("active");

  lightbox.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";

}