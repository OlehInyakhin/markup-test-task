import Swiper from 'swiper/bundle';

// Blog Swiper with dynamic pagination
let swiperBlog = null;

// Generate pagination from slides
function generateBlogPagination() {
    const slides = document.querySelectorAll('.blog-swiper .swiper-slide');
    const paginationContainer = document.querySelector('.blog-slider__pagination');
    
    if (!slides.length || !paginationContainer) return;
    
    // Clear existing pagination
    paginationContainer.innerHTML = '';
    
    slides.forEach((slide, index) => {
        const slideImage = slide.querySelector('.blog-card__image img');
        const slideLink = slide.querySelector('.blog-card__link');
        
        if (slideImage) {
            const imageUrl = slideImage.src;
            const imageAlt = slideImage.alt;
            const linkUrl = slideLink ? slideLink.href : null;
            
            const paginationItem = document.createElement('div');
            paginationItem.className = `blog-slider__pagination-item ${index === 0 ? 'blog-slider__pagination-item--active' : ''}`;
            paginationItem.dataset.slide = index;
            
            // Create link wrapper if linkUrl exists
            const linkWrapper = linkUrl ? document.createElement('a') : document.createElement('div');
            if (linkUrl) {
                linkWrapper.href = linkUrl;
                linkWrapper.className = 'blog-slider__pagination-link';
            }
            
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = imageAlt ?? `Blog slide ${index + 1}`;
            img.className = 'blog-slider__pagination-image';
            img.loading = 'lazy';
            
            linkWrapper.appendChild(img);
            paginationItem.appendChild(linkWrapper);
            paginationContainer.appendChild(paginationItem);
        }
    });
}

// Initialize blog swiper
function initBlogSwiper() {
    swiperBlog = new Swiper('.blog-swiper', {
        lazy: true,
        preventClicks: false,
        spaceBetween: 0,
        slidesPerView: 1,
        effect: 'slide',
        speed: 600,
        allowTouchMove: true, // Allow touch navigation for mobile
        on: {
            slideChange: function() {
                updatePaginationActive(this.activeIndex);
            }
        }
    });
}

// Custom pagination functionality
function initBlogPagination() {
    const paginationContainer = document.querySelector('.blog-slider__pagination');
    
    if (!paginationContainer || !swiperBlog) return;
    
    // Use event delegation for dynamically created pagination items
    paginationContainer.addEventListener('mouseover', (e) => {
        const paginationItem = e.target.closest('.blog-slider__pagination-item');
        if (paginationItem) {
            const slideIndex = parseInt(paginationItem.dataset.slide);
            swiperBlog.slideTo(slideIndex);
        }
    });
}

// Update active pagination item
function updatePaginationActive(activeIndex) {
    const paginationItems = document.querySelectorAll('.blog-slider__pagination-item');
    
    paginationItems.forEach((item, index) => {
        if (index === activeIndex) {
            item.classList.add('blog-slider__pagination-item--active');
        } else {
            item.classList.remove('blog-slider__pagination-item--active');
        }
    });
}

// Initialize blog slider when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    generateBlogPagination();
    initBlogSwiper();
    initBlogPagination();
});

// Products Swiper
const swiperProducts = new Swiper('.products-swiper', {
    lazy: true,
    preventClicks: false,
    navigation: {
        nextEl: '.products-slider__nav--next',
        prevEl: '.products-slider__nav--prev',
    },
    spaceBetween: 24,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 16,
        }
    }
});
