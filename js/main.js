document.addEventListener('DOMContentLoaded', () => {
    // Display featured products on the home page
    function displayFeaturedProducts() {
        const featuredProducts = document.getElementById('featured-products');
        if (!featuredProducts) return;

        // Display first 3 products as featured
        const featured = window.products.slice(0, 3);
        
        featuredProducts.innerHTML = featured.map(product => `
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

    displayFeaturedProducts();
});