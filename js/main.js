// Main JavaScript for Toy Image AI

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation menu
    initMobileNav();
    
    // Initialize FAQ accordion
    initFaqAccordion();
    
    // Initialize smooth scrolling for anchor links
    initSmoothScroll();
    
    // Initialize gallery lightbox
    initGalleryLightbox();
    
    // Handle form submissions
    initFormSubmission();
});

// Mobile navigation menu toggle
function initMobileNav() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
}

// FAQ accordion functionality
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        
        if (question && answer) {
            // Initially hide answers except the first one
            if (!item.classList.contains('active')) {
                answer.style.maxHeight = '0';
                answer.style.opacity = '0';
                answer.style.marginTop = '0';
            }
            
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Reset all items
                faqItems.forEach(faqItem => {
                    const faqAnswer = faqItem.querySelector('p');
                    faqItem.classList.remove('active');
                    if (faqAnswer) {
                        faqAnswer.style.maxHeight = '0';
                        faqAnswer.style.opacity = '0';
                        faqAnswer.style.marginTop = '0';
                    }
                });
                
                // Toggle clicked item
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    answer.style.opacity = '1';
                    answer.style.marginTop = '1rem';
                }
            });
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Simple gallery lightbox
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    if (galleryItems.length > 0) {
        // Create lightbox elements
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close-lightbox">&times;</span>
                <img class="lightbox-image" src="" alt="Gallery image">
                <div class="lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        const lightboxImage = lightbox.querySelector('.lightbox-image');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const closeLightbox = lightbox.querySelector('.close-lightbox');
        
        // Open lightbox on image click
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.getAttribute('src');
                const caption = this.parentElement.querySelector('h3').textContent;
                
                lightboxImage.setAttribute('src', imgSrc);
                lightboxCaption.textContent = caption;
                lightbox.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close lightbox
        closeLightbox.addEventListener('click', function() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Also close on outside click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Handle form submissions
function initFormSubmission() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                const originalText = submitButton.textContent;
                submitButton.disabled = true;
                submitButton.textContent = 'Processing...';
                
                // Simulate form submission
                setTimeout(() => {
                    // Reset form
                    form.reset();
                    
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'form-success-message';
                    successMessage.textContent = 'Thank you! We\'ll be in touch soon.';
                    form.appendChild(successMessage);
                    
                    // Reset button
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                    
                    // Remove message after delay
                    setTimeout(() => {
                        successMessage.remove();
                    }, 5000);
                }, 1500);
            }
        });
    });
}

// Add support for lazy loading images
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.setAttribute('src', src);
                        img.removeAttribute('data-src');
                        img.classList.add('loaded');
                    }
                    
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imgObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        document.querySelectorAll('img[data-src]').forEach(img => {
            const src = img.getAttribute('data-src');
            if (src) {
                img.setAttribute('src', src);
                img.removeAttribute('data-src');
            }
        });
    }
}

// Call lazy loading after DOM content loaded
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Main JavaScript for AI Action Figure website
// Include the language support
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize image hover effects
    initImageHoverEffects();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize testimonial rotation
    initTestimonialRotation();
});

// Mobile menu toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
}

// Image hover effects
function initImageHoverEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('visible');
            }
        });
    }
    
    // Check positions on load
    window.addEventListener('load', checkScroll);
    
    // Check positions on scroll
    window.addEventListener('scroll', checkScroll);
}

// Testimonial rotation
function initTestimonialRotation() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;
    
    if (testimonials.length > 1) {
        // Show first testimonial
        testimonials[0].classList.add('active');
        
        // Rotate testimonials every 5 seconds
        setInterval(function() {
            testimonials[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % testimonials.length;
            testimonials[currentIndex].classList.add('active');
        }, 5000);
    }
}

// AI transformation preview (simulation)
function previewAITransformation() {
    const previewButton = document.querySelector('[href="#transform"]');
    const heroImage = document.querySelector('.hero-image img');
    
    if (previewButton && heroImage) {
        previewButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show loading state
            heroImage.classList.add('processing');
            previewButton.textContent = 'Processing...';
            
            // Simulate AI processing time
            setTimeout(function() {
                // Replace with "transformed" image
                heroImage.src = 'images/transformed-example.svg';
                heroImage.classList.remove('processing');
                previewButton.textContent = 'Create My ChatGPT Figure';
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Your AI ChatGPT Action Figure was created! Check your email for the full resolution version.';
                
                const heroSection = document.querySelector('.hero');
                heroSection.appendChild(successMessage);
                
                // Remove message after a few seconds
                setTimeout(function() {
                    successMessage.remove();
                }, 5000);
            }, 3000);
        });
    }
}

// Theme preference toggle
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-theme');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Toggle dark theme
            document.body.classList.toggle('dark-theme');
            
            // Save preference to localStorage
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
} 