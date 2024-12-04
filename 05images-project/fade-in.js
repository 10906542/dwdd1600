
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.fade-in-on-scroll');

    function checkVisibility() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        images.forEach(image => {
            const imageTop = image.getBoundingClientRect().top + scrollY;
            if (imageTop < scrollY + windowHeight && imageTop + image.height > scrollY) {
                image.classList.add('visible');
            } else {
                image.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});
