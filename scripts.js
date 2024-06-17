document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    let isScrolling = false;
    let currentIndex = 0;

    function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    function showPreviousItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        items[currentIndex].classList.add('active');
    }

    document.querySelector('.next').addEventListener('click', showNextItem);
    document.querySelector('.prev').addEventListener('click', showPreviousItem);

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;

                document.querySelectorAll('.parallax').forEach(parallax => {
                    const speed = parallax.dataset.speed || 0.5;
                    const offset = scrollY * speed;
                    parallax.style.backgroundPositionY = `${offset}px`;
                });

                isScrolling = false;
            });

            isScrolling = true;
        }
    });
});


