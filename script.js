const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const hamIcon = hamburger.querySelector('.hamburger-icon');
const crossIcon = hamburger.querySelector('.cross-icon');

hamburger.addEventListener('click', () => {
    const isVisible = navLinks.style.display === 'flex';
    navLinks.style.display = isVisible ? 'none' : 'flex';
    hamIcon.style.display = isVisible ? 'inline-block' : 'none';
    crossIcon.style.display = isVisible ? 'none' : 'inline-block';
});
