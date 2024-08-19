const btn = document.getElementById('showHideButton');
const p = document.getElementById('text');

btn.addEventListener('click', () => {
    if (p.style.display === 'none') {
        p.style.display = 'block'; // Muestra el párrafo
    } else {
        p.style.display = 'none'; // Oculta el párrafo
    }
});