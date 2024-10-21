document.addEventListener('DOMContentLoaded', function() {
    const flipContainer = document.querySelector('.flip-container');
    const flipToggles = document.querySelectorAll('.flip-toggle');

    flipToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            flipContainer.classList.toggle('flip');
        });
    });
});