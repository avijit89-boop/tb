
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in-up');

    function checkVisibility() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.clickable-image');
    const overlay = document.getElementById('image-overlay');
    const overlayImg = document.getElementById('overlay-img');
    const closeBtn = document.querySelector('.close-btn');

    images.forEach(img => {
        img.addEventListener('click', function() {
            overlayImg.src = this.src;
            overlay.style.display = 'flex';
            setTimeout(() => overlayImg.classList.add('zoomed'), 10); // Add zoom effect with delay
        });
    });

    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
        overlayImg.classList.remove('zoomed'); // Remove zoom effect
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === this) {
            overlay.style.display = 'none';
            overlayImg.classList.remove('zoomed'); // Remove zoom effect
        }
    });
});