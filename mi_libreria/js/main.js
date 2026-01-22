// ===================================
// CAROUSEL FUNCTIONALITY
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Carousel scroll functionality
    const scrollRight = document.getElementById('scrollRight');
    const carousel = document.getElementById('booksCarousel');

    if (scrollRight && carousel) {
        scrollRight.addEventListener('click', function () {
            carousel.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }

    // Menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }

    // ===================================
    // MAP GENERATION
    // ===================================

    // Generate map background
    generateMapBackground();

    // ===================================
    // CATEGORY FILTER FUNCTIONALITY
    // ===================================

    const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
    const productCards = document.querySelectorAll('.product-card');

    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            filterProducts();
        });
    });

    function filterProducts() {
        const checkedCategories = Array.from(categoryCheckboxes)
            .filter(cb => cb.checked && cb.id !== 'cat-todos')
            .map(cb => cb.id.replace('cat-', ''));

        const todosChecked = document.getElementById('cat-todos').checked;

        if (todosChecked || checkedCategories.length === 0) {
            // Show all products if "Todos" is checked or no specific category is selected
            productCards.forEach(card => {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.5s ease-out';
            });
        } else {
            // Filter products based on selected categories
            productCards.forEach(card => {
                const productCategories = card.getAttribute('data-category').split(' ');
                const shouldShow = checkedCategories.some(cat => productCategories.includes(cat));

                if (shouldShow) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    }

    // Handle "Todos" checkbox special behavior
    const todosCheckbox = document.getElementById('cat-todos');
    if (todosCheckbox) {
        todosCheckbox.addEventListener('change', function () {
            if (this.checked) {
                // Uncheck all other categories when "Todos" is checked
                categoryCheckboxes.forEach(cb => {
                    if (cb.id !== 'cat-todos') {
                        cb.checked = false;
                    }
                });
            }
            filterProducts();
        });
    }

    // Uncheck "Todos" when any other category is checked
    categoryCheckboxes.forEach(checkbox => {
        if (checkbox.id !== 'cat-todos') {
            checkbox.addEventListener('change', function () {
                if (this.checked && todosCheckbox) {
                    todosCheckbox.checked = false;
                }
            });
        }
    });

    // ===================================
    // SEARCH FUNCTIONALITY
    // ===================================

    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    if (searchButton) {
        searchButton.addEventListener('click', function () {
            performSearch();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm.trim() !== '') {
            console.log('Searching for:', searchTerm);
            // Add search logic here
        }
    }

    // ===================================
    // STORE LOCATOR FUNCTIONALITY
    // ===================================

    const locatorButton = document.querySelector('.locator-button');
    const locatorInput = document.querySelector('.locator-input');

    if (locatorButton) {
        locatorButton.addEventListener('click', function () {
            const location = locatorInput.value;
            if (location.trim() !== '') {
                console.log('Searching stores near:', location);
                // Add store locator logic here
            }
        });
    }

    // ===================================
    // BUY BUTTON FUNCTIONALITY
    // ===================================

    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;

            console.log('Adding to cart:', productName, productPrice);

            // Visual feedback
            this.textContent = '✓ AÑADIDO';
            this.style.backgroundColor = '#5cb85c';

            setTimeout(() => {
                this.textContent = 'COMPRAR';
                this.style.backgroundColor = '#2c2c2c';
            }, 2000);
        });
    });

    // ===================================
    // SMOOTH SCROLL FOR NAVIGATION
    // ===================================

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ===================================
// MAP BACKGROUND GENERATOR
// ===================================

function generateMapBackground() {
    const mapContainer = document.getElementById('mapContainer');
    if (!mapContainer) return;

    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    // Base map color
    ctx.fillStyle = '#f5f5f0';
    ctx.fillRect(0, 0, 800, 600);

    // Draw city blocks
    ctx.fillStyle = '#e8e8dc';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 6; j++) {
            const x = i * 100 + 20;
            const y = j * 100 + 20;
            ctx.fillRect(x, y, 70, 70);
        }
    }

    // Draw streets (horizontal)
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#d4d4c8';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 6; i++) {
        const y = i * 100;
        ctx.fillRect(0, y, 800, 20);
        ctx.strokeRect(0, y, 800, 20);
    }

    // Draw streets (vertical)
    for (let i = 0; i <= 8; i++) {
        const x = i * 100;
        ctx.fillRect(x, 0, 20, 600);
        ctx.strokeRect(x, 0, 20, 600);
    }

    // Add street lines
    ctx.strokeStyle = '#f0e68c';
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 10]);
    for (let i = 0; i <= 6; i++) {
        const y = i * 100 + 10;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(800, y);
        ctx.stroke();
    }

    for (let i = 0; i <= 8; i++) {
        const x = i * 100 + 10;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 600);
        ctx.stroke();
    }

    // Add some green spaces (parks)
    ctx.fillStyle = '#c8e6c9';
    ctx.fillRect(250, 150, 90, 90);
    ctx.fillRect(450, 350, 90, 90);

    mapContainer.style.backgroundImage = `url(${canvas.toDataURL()})`;
    mapContainer.style.backgroundSize = 'cover';
}
