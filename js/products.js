// Use the global products variable
document.addEventListener('DOMContentLoaded', () => {
    function displayProducts(filteredProducts = window.products) {
        const productsGrid = document.getElementById('products-grid');
        if (!productsGrid) return;

        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
    }

    function setupFilters() {
        const categoryCheckboxes = document.querySelectorAll('input[type="checkbox"]');
        const priceRange = document.getElementById('price-range');
        const minPrice = document.getElementById('min-price');
        const maxPrice = document.getElementById('max-price');

        function applyFilters() {
            const selectedCategories = Array.from(categoryCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            const min = Number(minPrice.value) || 0;
            const max = Number(maxPrice.value) || Infinity;

            const filteredProducts = window.products.filter(product => {
                const matchesCategory = selectedCategories.length === 0 || 
                                      selectedCategories.includes(product.category);
                const matchesPrice = product.price >= min && product.price <= max;
                return matchesCategory && matchesPrice;
            });

            displayProducts(filteredProducts);
        }

        categoryCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));
        priceRange.addEventListener('input', () => {
            const value = priceRange.value;
            maxPrice.value = value;
            applyFilters();
        });
        minPrice.addEventListener('input', applyFilters);
        maxPrice.addEventListener('input', applyFilters);
    }

    displayProducts();
    setupFilters();
});