document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('homepage-heading');
    const paragraph = document.getElementById('homepage-paragraph');

    const addTextEffect = (element) => {
        const text = element.innerText;
        element.innerHTML = text.split(' ').map((word, index) => 
            `<span class="word-effect-homepage text-hover-effect-homepage" style="animation-delay: ${index * 0.1}s;">${word}</span>`
        ).join(' ');
    };

    addTextEffect(heading);
    addTextEffect(paragraph);

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-homepage');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(document.getElementById('homepage-heading'));
    observer.observe(document.getElementById('homepage-paragraph'));
});


// Navbar Section Start
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
};

// Toggle the display of the close button based on navbar state
$(document).ready(function () {
    $('.navbar-toggler').on('click', function () {
        const isExpanded = $('.navbar-collapse').hasClass('show');
        if (isExpanded) {
            $('.navbar-collapse').collapse('hide');
            $('.close-btn').hide();
        } else {
            $('.navbar-collapse').collapse('show');
            $('.close-btn').show();
        }
    });

    $('.close-btn').on('click', function () {
        $('.navbar-collapse').collapse('hide');
        $(this).hide();
    });
});
// Navbar Section End

//about-us start
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    const aboutUsSection = document.querySelector('.about-us');
    observer.observe(aboutUsSection);
});
//about-us end

document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');

    function revealCards() {
        featureCards.forEach((card) => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardPosition < windowHeight - 50) {
                card.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealCards);
    revealCards(); // Trigger on load in case of initial visibility
});


//Our Milestones of Excellence start
document.addEventListener('DOMContentLoaded', () => {
    const milestoneCards = document.querySelectorAll('.milestone-card');

    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target.querySelector('.milestone-number');
                const targetValue = +entry.target.getAttribute('data-target');
                animateNumber(numberElement, targetValue);
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    milestoneCards.forEach(card => {
        observer.observe(card);
    });

    function animateNumber(element, target) {
        const duration = 2000;
        const start = 0;
        const range = target - start;
        const startTime = performance.now();

        function updateNumber(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            element.textContent = Math.floor(progress * range);
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = target;
            }
        }

        requestAnimationFrame(updateNumber);
    }
});
//Our Milestones of Excellence end

//sevice section start
document.addEventListener('DOMContentLoaded', function () {
    const uniqueCarousel = document.getElementById('uniqueCarousel');
    const carouselInstance = new bootstrap.Carousel(uniqueCarousel, {
        interval: false, // Disable auto-sliding
        ride: false // Disable auto-start
    });

    const carouselItems = uniqueCarousel.querySelectorAll('.carousel-item');

    carouselInstance._element.addEventListener('slide.bs.carousel', function (e) {
        const currentItem = carouselItems[e.from];
        const nextItem = carouselItems[e.to];

        // Immediately hide the current item without delay
        gsap.set(currentItem, { opacity: 0, scale: 0.95 });

        // Immediately show and animate the next item
        gsap.fromTo(nextItem, {
            opacity: 0,
            scale: 0.95
        }, {
            opacity: 1,
            scale: 1,
            duration: 1, // Reduced duration for quicker transitions
            ease: "power2.out", // Smooth easing for more fluid transitions
            onStart: function () {
                nextItem.classList.add('active');
            },
            onComplete: function () {
                currentItem.classList.remove('active');
            }
        });
    });
});
//service section end

//pricing-plan start
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.pricing-plan .card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('pop-in');
            } else {
                entry.target.classList.remove('pop-in');
            }
        });
    }, { threshold: 0.5 });

    cards.forEach(card => {
        observer.observe(card);
    });
});
//pricing-plan end

//Testimonial start
$(document).ready(function(){
    $('#testimonialCarousel').carousel({
        interval: 1000,  // Set the interval for the carousel rotation
        pause: "hover"  // Pause on hover
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const prevSlide = () => $('#testimonialCarousel').carousel('prev');
    const nextSlide = () => $('#testimonialCarousel').carousel('next');

    window.prevSlide = prevSlide;
    window.nextSlide = nextSlide;

    const testimonialSection = document.getElementById('testimonial-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const testimonials = document.querySelectorAll('.custom-testimonial');
            testimonials.forEach(testimonial => {
                if (entry.isIntersecting) {
                    testimonial.classList.add('scale-in');
                } else {
                    testimonial.classList.remove('scale-in');
                }
            });
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(testimonialSection);
});

//Testimonial-end

//contact-us start
document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('#contact-us');
    const mapContainer = document.querySelector('.map-container');
    const formContainer = document.querySelector('.form-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add('visible');
                mapContainer.classList.add('visible');
                formContainer.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(section);
});
//contact-us end
$(window).on('scroll', function() {
    let footerSection = $('#footer-section');
    if (footerSection.length) {
        let scrollTop = $(window).scrollTop();
        let elementOffset = footerSection.offset().top;
        let distance = elementOffset - scrollTop;
        let windowHeight = $(window).height();

        if (distance < windowHeight - 100) {
            footerSection.addClass('visible');
        }
    }
});
