var scrollBtn = document.querySelector('.scroll-top');

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