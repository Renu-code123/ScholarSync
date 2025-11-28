document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero-image');

    if (heroImage) {
        document.addEventListener('mousemove', e => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const xPos = (clientX / innerWidth - 0.5) * 30;
            const yPos = (clientY / innerHeight - 0.5) * 30;

            heroImage.style.transform = `rotateY(${xPos}deg) rotateX(${-yPos}deg)`;
        });
    }
});