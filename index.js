document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });

    // Navbar animation when page loads
    setTimeout(function() {
        document.querySelector('.navbar').classList.add('loaded');
    }, 100);

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const particlesContainer = document.getElementById('particles');
    const particleCount = 100;

    // Animation variants for more variety
    const animations = ['float', 'floatWobble', 'floatSway'];

    for(let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // More varied size distribution
        const sizeRandom = Math.random();
        let size;
        if (sizeRandom < 0.4) {
            size = Math.random() * 8 + 4; // Most bubbles are small (4-12px)
        } else if (sizeRandom < 0.7) {
            size = Math.random() * 15 + 12; // Some medium bubbles (12-27px)
        } else {
            size = Math.random() * 20 + 25; // Few large bubbles (25-45px)
        }

        const posX = Math.random() * 100; // 0-100%
        const posY = Math.random() * 100 + 100; // Start below screen

        // More varied duration based on size (larger bubbles rise slower)
        const baseDuration = 20 + (size * 0.3); // Larger bubbles are slower
        const duration = baseDuration + (Math.random() * 10 - 5); // Add some randomness
        const delay = Math.random() * 15; // 0-15s delay

        // Random animation type
        const animationType = animations[Math.floor(Math.random() * animations.length)];

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.bottom = `${-posY}px`;

        // Opacity varies with size - smaller bubbles are more transparent
        const opacity = Math.min(0.7, 0.2 + (size * 0.02));
        particle.style.opacity = opacity;

        particle.style.animationName = animationType;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        // Add slight blur to smaller bubbles for depth
        if (size < 10) {
            particle.style.filter = 'blur(0.5px)';
        }

        particlesContainer.appendChild(particle);

        // Remove and recreate particle when animation ends
        setTimeout(() => {
            if (particlesContainer.contains(particle)) {
                particlesContainer.removeChild(particle);
                createParticle();
            }
        }, (duration + delay) * 1000);
    }

    // Add some particles with different timing to create more natural flow
    setTimeout(() => {
        for(let i = 0; i < 20; i++) {
            setTimeout(() => createParticle(), Math.random() * 5000);
        }
    }, 3000);
});