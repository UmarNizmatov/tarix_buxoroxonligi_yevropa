// ===== GLOBAL VARIABLES =====
let currentPage = window.location.pathname.split('/').pop() || 'index.html';

// ===== LOADER =====
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.display = 'none';
        }, 2800);
    }
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (navbar) {
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    lastScroll = currentScroll;
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.fade-up, .fade-left, .fade-right, .welcome-card, .feature-card, .edu-card, .overview-item, .timeline-item, .social-level, .heritage-card'
    );

    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== PARALLAX EFFECT FOR HERO =====
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero, .page-hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const heroContent = hero.querySelector('.hero-content, .page-hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / 600);
        }
    }
});

// ===== IMAGE LAZY LOADING =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== ACTIVE LINK HIGHLIGHT =====
window.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ===== CARD HOVER EFFECTS =====
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.welcome-card, .feature-card, .heritage-card, .nav-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ===== BUTTON RIPPLE EFFECT =====
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// ===== TIMELINE ANIMATION =====
if (document.querySelector('.timeline')) {
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        timelineObserver.observe(item);
    });
}

// ===== STATS COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number, .stat-value, .overview-number');
            if (statNumber && !statNumber.dataset.animated) {
                const targetValue = parseInt(statNumber.textContent.replace(/\D/g, ''));
                if (!isNaN(targetValue)) {
                    statNumber.dataset.animated = 'true';
                    animateCounter(statNumber, targetValue);
                }
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item, .stat-box, .overview-item').forEach(item => {
    statsObserver.observe(item);
});

// ===== SCROLL PROGRESS INDICATOR =====
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress);

// ===== PREVENT ANIMATION ON PAGE LOAD =====
window.addEventListener('load', () => {
    document.body.classList.remove('preload');
});

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== RESIZE HANDLER =====
const handleResize = debounce(() => {
    // Recalculate any layout-dependent features
    const width = window.innerWidth;
    
    if (width < 768) {
        // Mobile adjustments
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
        // Close mobile menu if open
        if (navMenu) navMenu.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('active');
    }
}, 250);

window.addEventListener('resize', handleResize);
handleResize(); // Initial call

// ===== ACCESSIBILITY: KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }
});

// ===== PERFORMANCE: REDUCE MOTION =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-base', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
}

// ===== CONSOLE EASTER EGG =====
console.log('%c Buxoro Xonligi Sayti ', 'background: #D4AF37; color: #1A1410; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c 9-sinf o\'quvchilari uchun tarixiy ma\'lumotlar ', 'color: #8B4513; font-size: 14px;');

// ===== EXPORT FOR OTHER SCRIPTS =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        animateCounter
    };
}
