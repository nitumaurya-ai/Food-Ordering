// ============================================
// Food Delivery Website - Cart Management
// ============================================

class Cart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartBadge();
    }

    loadCart() {
        const saved = localStorage.getItem('foodDeliveryCart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('foodDeliveryCart', JSON.stringify(this.items));
        this.updateCartBadge();
    }

    addItem(item) {
        const existingItem = this.items.find(i => i.id === item.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...item,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.showAddToCartAnimation();
        return true;
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveCart();
    }

    updateQuantity(itemId, quantity) {
        const item = this.items.find(i => i.id === itemId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(itemId);
            } else {
                item.quantity = quantity;
                this.saveCart();
            }
        }
    }

    getItems() {
        return this.items;
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getSubtotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getTaxes() {
        return Math.round(this.getSubtotal() * 0.05);
    }

    getDeliveryFee() {
        const subtotal = this.getSubtotal();
        return subtotal > 500 ? 0 : 40;
    }

    getTotal() {
        return this.getSubtotal() + this.getTaxes() + this.getDeliveryFee();
    }

    clear() {
        this.items = [];
        this.saveCart();
    }

    updateCartBadge() {
        const badges = document.querySelectorAll('.cart-count');
        const totalItems = this.getTotalItems();
        
        badges.forEach(badge => {
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'flex' : 'none';
        });
    }

    showAddToCartAnimation() {
        const badges = document.querySelectorAll('.cart-count');
        badges.forEach(badge => {
            badge.classList.add('add-to-cart-animation');
            setTimeout(() => {
                badge.classList.remove('add-to-cart-animation');
            }, 300);
        });
    }

    renderCartSidebar() {
        const cartContainer = document.getElementById('cartSidebar');
        if (!cartContainer) return;

        const items = this.getItems();
        
        if (items.length === 0) {
            cartContainer.innerHTML = `
                <div class="cart-empty">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Your cart is empty</p>
                    <small>Add items to get started</small>
                </div>
            `;
            return;
        }

        let html = '<h3>Cart</h3>';
        
        items.forEach(item => {
            html += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <span class="cart-item-price">₹${item.price}</span>
                    </div>
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
            `;
        });

        html += `
            <div class="cart-total">
                <div class="cart-total-row">
                    <span>Subtotal</span>
                    <span>₹${this.getSubtotal()}</span>
                </div>
                <div class="cart-total-row">
                    <span>Taxes (5%)</span>
                    <span>₹${this.getTaxes()}</span>
                </div>
                <div class="cart-total-row">
                    <span>Delivery Fee</span>
                    <span>₹${this.getDeliveryFee()}</span>
                </div>
                <div class="cart-total-row total">
                    <span>Total</span>
                    <span>₹${this.getTotal()}</span>
                </div>
            </div>
            <button class="checkout-btn" onclick="window.location.href='cart.html'">
                Checkout ₹${this.getTotal()}
            </button>
        `;

        cartContainer.innerHTML = html;
    }

    renderCartPage() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartSummaryContainer = document.getElementById('cartSummary');
        
        if (!cartItemsContainer || !cartSummaryContainer) return;

        const items = this.getItems();
        
        if (items.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="text-center py-5">
                    <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                    <h4>Your cart is empty</h4>
                    <p class="text-muted">Add items from restaurants to get started</p>
                    <a href="restaurants.html" class="btn btn-primary mt-3">Browse Restaurants</a>
                </div>
            `;
            cartSummaryContainer.innerHTML = '';
            return;
        }

        let itemsHtml = '';
        items.forEach(item => {
            itemsHtml += `
                <div class="cart-item-card">
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <div class="d-flex justify-content-between">
                            <div>
                                <h4>${item.name}</h4>
                                <p class="restaurant-name">${item.restaurant || 'Restaurant'}</p>
                            </div>
                            <span class="cart-item-total">₹${item.price * item.quantity}</span>
                        </div>
                        <div class="cart-item-actions">
                            <div class="quantity-control">
                                <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1}); cart.renderCartPage();">-</button>
                                <span class="quantity-value">${item.quantity}</span>
                                <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1}); cart.renderCartPage();">+</button>
                            </div>
                            <button class="remove-btn" onclick="cart.removeItem(${item.id}); cart.renderCartPage();">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = itemsHtml;

        cartSummaryContainer.innerHTML = `
            <h3>Order Summary</h3>
            <div class="coupon-input">
                <input type="text" placeholder="Enter coupon code">
                <button>Apply</button>
            </div>
            <div class="cart-total">
                <div class="cart-total-row">
                    <span>Subtotal (${this.getTotalItems()} items)</span>
                    <span>₹${this.getSubtotal()}</span>
                </div>
                <div class="cart-total-row">
                    <span>Taxes (5%)</span>
                    <span>₹${this.getTaxes()}</span>
                </div>
                <div class="cart-total-row">
                    <span>Delivery Fee</span>
                    <span>${this.getDeliveryFee() === 0 ? 'FREE' : '₹' + this.getDeliveryFee()}</span>
                </div>
                <div class="cart-total-row total">
                    <span>Total</span>
                    <span>₹${this.getTotal()}</span>
                </div>
            </div>
            <div class="mt-4">
                <h5 class="mb-3">Delivery Address</h5>
                <div class="border rounded p-3 mb-3">
                    <div class="d-flex justify-content-between align-items-start">
                        <div>
                            <span class="badge bg-primary mb-2">Home</span>
                            <p class="mb-1">123, 4th Cross, Koramangala</p>
                            <small class="text-muted">Bangalore - 560034</small>
                        </div>
                        <input type="radio" name="address" checked>
                    </div>
                </div>
                <button class="btn btn-outline-primary w-100 mb-4">
                    <i class="fas fa-plus"></i> Add New Address
                </button>
            </div>
            <div class="mt-4">
                <h5 class="mb-3">Payment Method</h5>
                <div class="form-check mb-2">
                    <input class="form-check-input" type="radio" name="payment" id="cod" checked>
                    <label class="form-check-label" for="cod">
                        <i class="fas fa-money-bill-wave me-2"></i> Cash on Delivery
                    </label>
                </div>
                <div class="form-check mb-2">
                    <input class="form-check-input" type="radio" name="payment" id="card">
                    <label class="form-check-label" for="card">
                        <i class="fas fa-credit-card me-2"></i> Credit/Debit Card
                    </label>
                </div>
                <div class="form-check mb-4">
                    <input class="form-check-input" type="radio" name="payment" id="upi">
                    <label class="form-check-label" for="upi">
                        <i class="fas fa-mobile-alt me-2"></i> UPI
                    </label>
                </div>
            </div>
            <button class="checkout-btn" onclick="cart.placeOrder()">
                Place Order - ₹${this.getTotal()}
            </button>
        `;
    }

    placeOrder() {
        if (this.items.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        // Simulate order placement
        alert('Order placed successfully! Your delicious food is on the way.');
        this.clear();
        window.location.href = 'profile.html';
    }
}

// Initialize cart
const cart = new Cart();

// Add to cart function for menu items
function addToCart(itemId, restaurantId) {
    const menuItem = menuItems[restaurantId]?.find(item => item.id === itemId);
    const restaurant = restaurants.find(r => r.id === restaurantId);
    
    if (menuItem && restaurant) {
        cart.addItem({
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            image: menuItem.image,
            restaurant: restaurant.name
        });
        cart.renderCartSidebar();
    }
}
