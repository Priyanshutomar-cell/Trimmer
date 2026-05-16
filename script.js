// Product Database
const products = [
    {
        id: 1,
        name: 'Professional Electric Trimmer Pro Max',
        category: 'electric',
        price: 129.99,
        description: 'Professional grade with 3 attachments',
        rating: 5,
        emoji: '⚡'
    },
    {
        id: 2,
        name: 'Cordless Electric Trimmer',
        category: 'electric',
        price: 89.99,
        description: 'Battery-powered, 2-hour runtime',
        rating: 4.5,
        emoji: '🔋'
    },
    {
        id: 3,
        name: 'Budget Electric Trimmer',
        category: 'electric',
        price: 49.99,
        description: 'Basic electric trimmer, perfect for beginners',
        rating: 4,
        emoji: '⚡'
    },
    {
        id: 4,
        name: 'Manual Precision Trimmer',
        category: 'manual',
        price: 34.99,
        description: 'Stainless steel blades, ergonomic handle',
        rating: 4.5,
        emoji: '✂️'
    },
    {
        id: 5,
        name: 'Professional Manual Trimmer',
        category: 'manual',
        price: 44.99,
        description: 'Heavy-duty construction, lifetime warranty',
        rating: 5,
        emoji: '✂️'
    },
    {
        id: 6,
        name: 'Salon Professional Trimmer',
        category: 'professional',
        price: 199.99,
        description: 'Used by professional barbers worldwide',
        rating: 5,
        emoji: '💈'
    },
    {
        id: 7,
        name: 'Premium Pro Trimmer',
        category: 'professional',
        price: 179.99,
        description: 'Japanese steel, precision cuts',
        rating: 4.8,
        emoji: '⭐'
    },
    {
        id: 8,
        name: 'Entry Level Professional Trimmer',
        category: 'professional',
        price: 79.99,
        description: 'Perfect for aspiring professionals',
        rating: 4.3,
        emoji: '🎯'
    },
    {
        id: 9,
        name: 'Ultra Lightweight Portable Trimmer',
        category: 'electric',
        price: 59.99,
        description: 'Travel-friendly, compact design',
        rating: 4.2,
        emoji: '🧳'
    }
];

let cart = [];
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    displayProducts();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    document.getElementById('cartBtn').addEventListener('click', toggleCart);
    document.getElementById('closeCart').addEventListener('click', toggleCart);
    document.getElementById('searchBtn').addEventListener('click', toggleSearch);
    document.getElementById('searchSubmit').addEventListener('click', performSearch);
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });

    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartBtn = document.getElementById('cartBtn');
        if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target) && cartSidebar.classList.contains('active')) {
            toggleCart();
        }
    });
}

// Display Products
function displayProducts(productsToDisplay = products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-rating">${'⭐'.repeat(Math.floor(product.rating))} ${product.rating}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter Products
function filterProducts(category) {
    currentFilter = category;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter and display products
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// Search Products
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (!searchTerm) {
        displayProducts();
        showToast('Please enter a search term');
        return;
    }

    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
    );

    if (filtered.length === 0) {
        document.getElementById('productsGrid').innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No products found matching your search.</p>';
        showToast('No products found');
    } else {
        displayProducts(filtered);
        showToast(`Found ${filtered.length} product(s)`);
    }
}

// Toggle Search Bar
function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    updateCartDisplay();
    showToast(`✓ ${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    updateCartDisplay();
    showToast('Product removed from cart');
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartDisplay();
    }
}

// Toggle Cart Sidebar
function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('active');
}

// Update Cart Display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart"><p>Your cart is empty</p></div>';
        updateCartSummary();
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.emoji}</div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
                </div>
            </div>
        </div>
    `).join('');

    updateCartSummary();
}

// Update Cart Summary
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal >= 50 ? 0 : 5;
    const total = subtotal + shipping;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('trimmerCart', JSON.stringify(cart));
}

// Load Cart from LocalStorage
function loadCart() {
    const savedCart = localStorage.getItem('trimmerCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
        updateCartDisplay();
    }
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }

    const total = document.getElementById('total').textContent;
    showToast(`✓ Order placed! Total: ${total}. Thank you for shopping!`);
    
    // Clear cart after 2 seconds
    setTimeout(() => {
        cart = [];
        saveCart();
        updateCartCount();
        updateCartDisplay();
        toggleCart();
    }, 2000);
}

// Handle Contact Form
function handleContactForm(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements[0].value;
    
    showToast(`✓ Thank you ${name}! We'll get back to you soon.`);
    form.reset();
}

// Show Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';

    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}