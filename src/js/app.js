// Global

const overlay = document.querySelector('.layer-overlay');

document.addEventListener('mousemove', (pos) => {
    clientX = pos.clientX;
    clientY = pos.clientY;
    overlay.style.setProperty('--x', pos.clientX + 'px');
    overlay.style.setProperty('--y', pos.clientY + 'px');
});