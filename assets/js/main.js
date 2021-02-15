// Scroll section
const scrollBtn = document.querySelector('.scroll-top');

scrollBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
});

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 200) {
        scrollBtn.style.visibility = "visible";
        scrollBtn.style.opacity = 1;
    } else {
        scrollBtn.style.visibility = "hidden";
        scrollBtn.style.opacity = 0;
    }
})

// Slider 
let slideIndex = 0;
slideShow();

function slideShow() {
    const slides = Array.from(document.querySelectorAll('.slide'));
    slides.forEach((slide) => {
        slide.style.display = "none";
    })

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex -1].style.display = "block";

    setTimeout(slideShow, 5000);
}