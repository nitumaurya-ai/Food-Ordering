// ============================================
// Food Delivery Website - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initHeader();
    initAnimations();
    renderCategories();
    renderFeaturedRestaurants();
    renderOffers();
    renderTopRated();
    initSwiper();
});

// Header scroll effect
function initHeader() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });
}

// Initialize AOS animations
function initAnimations() {
    // Simple fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.restaurant-card, .category-card, .offer-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Render categories
function renderCategories() {
    const container = document.getElementById('categoriesContainer');
    if (!container || typeof categories === 'undefined') return;

    container.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="filterByCategory('${cat.name}')">
            <div class="category-img">
                <img src="${cat.image}" alt="${cat.name}" loading="lazy">
            </div>
            <div class="category-name">${cat.name}</div>
        </div>
    `).join('');
}

// Render featured restaurants
function renderFeaturedRestaurants() {
    const container = document.getElementById('featuredRestaurants');
    if (!container || typeof restaurants === 'undefined') return;

    const featured = restaurants.slice(0, 4);
    container.innerHTML = featured.map(rest => `
        <div class="swiper-slide">
            <div class="restaurant-card" onclick="goToRestaurant(${rest.id})">
                <div class="restaurant-img">
                    <img src="${rest.image}" alt="${rest.name}" loading="lazy">
                    ${rest.offer ? `<span class="restaurant-badge">${rest.offer}</span>` : ''}
                    <div class="restaurant-rating">
                        <span>${rest.rating}</span>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="restaurant-info">
                    <h3 class="restaurant-name">${rest.name}</h3>
                    <p class="restaurant-cuisine">${rest.cuisine}</p>
                    <div class="restaurant-meta">
                        <span><i class="far fa-clock"></i> ${rest.deliveryTime}</span>
                        <span><i class="fas fa-rupee-sign"></i> ${rest.priceForTwo} for two</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Render offers
function renderOffers() {
    const container = document.getElementById('offersContainer');
    if (!container || typeof offers === 'undefined') return;

    container.innerHTML = offers.map(offer => `
        <div class="col-md-4 mb-4">
            <div class="offer-card" data-aos="fade-up">
                <img src="${offer.image}" alt="${offer.title}" loading="lazy">
                <div class="offer-overlay">
                    <h3 class="offer-title">${offer.title}</h3>
                    <p class="offer-subtitle">${offer.subtitle}</p>
                    <span class="offer-code">Use code: ${offer.code}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Render top rated restaurants
function renderTopRated() {
    const container = document.getElementById('topRatedContainer');
    if (!container || typeof restaurants === 'undefined') return;

    const topRated = [...restaurants].sort((a, b) => b.rating - a.rating).slice(0, 6);
    
    container.innerHTML = topRated.map(rest => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="restaurant-card" onclick="goToRestaurant(${rest.id})" data-aos="fade-up">
                <div class="restaurant-img">
                    <img src="${rest.image}" alt="${rest.name}" loading="lazy">
                    ${rest.offer ? `<span class="restaurant-badge">${rest.offer}</span>` : ''}
                    <div class="restaurant-rating">
                        <span>${rest.rating}</span>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="restaurant-info">
                    <h3 class="restaurant-name">${rest.name}</h3>
                    <p class="restaurant-cuisine">${rest.cuisine}</p>
                    <div class="restaurant-meta">
                        <span><i class="far fa-clock"></i> ${rest.deliveryTime}</span>
                        <span><i class="fas fa-rupee-sign"></i> ${rest.priceForTwo} for two</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize Swiper for featured restaurants
function initSwiper() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.featured-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });
    }
}

// Navigate to restaurant detail
function goToRestaurant(id) {
    window.location.href = `restaurant-detail.html?id=${id}`;
}

// Filter by category
function filterByCategory(category) {
    window.location.href = `restaurants.html?category=${encodeURIComponent(category)}`;
}

// Search functionality
function handleSearch(query) {
    if (query.trim()) {
        window.location.href = `restaurants.html?search=${encodeURIComponent(query)}`;
    }
}

// Format price
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

// Debounce function for search
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

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#60B246' : '#E23744'};
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
        z-index: 9999;
        animation: slideUp 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add CSS animations for toast
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    @keyframes slideUp {
        from { transform: translate(-50%, 100%); opacity: 0; }
        to { transform: translate(-50%, 0); opacity: 1; }
    }
    @keyframes slideDown {
        from { transform: translate(-50%, 0); opacity: 1; }
        to { transform: translate(-50%, 100%); opacity: 0; }
    }
`;
document.head.appendChild(toastStyles);

// Location selector
function initLocationSelector() {
    const locationSelector = document.querySelector('.location-selector');
    if (locationSelector) {
        locationSelector.addEventListener('click', () => {
            // In real app, this would open a location picker
            showToast('Location selector coming soon!');
        });
    }
}

// Initialize location selector on load
document.addEventListener('DOMContentLoaded', initLocationSelector);
