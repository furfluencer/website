// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation for features
const animateOnScroll = () => {
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        const featurePosition = feature.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(featurePosition < screenPosition) {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Add initial animation on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
