// ============================================
// Food Delivery Website - Authentication
// ============================================

class Auth {
    constructor() {
        this.currentUser = this.loadUser();
        this.init();
    }

    init() {
        this.updateUI();
        this.bindEvents();
    }

    loadUser() {
        const saved = localStorage.getItem('foodDeliveryUser');
        return saved ? JSON.parse(saved) : null;
    }

    saveUser(user) {
        this.currentUser = user;
        if (user) {
            localStorage.setItem('foodDeliveryUser', JSON.stringify(user));
        } else {
            localStorage.removeItem('foodDeliveryUser');
        }
        this.updateUI();
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    login(email, password) {
        // Simulate login - in real app, this would call an API
        const mockUser = {
            id: 1,
            name: 'John Doe',
            email: email,
            phone: '+91 9876543210',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200'
        };
        
        this.saveUser(mockUser);
        this.closeModal();
        return true;
    }

    signup(name, email, password) {
        // Simulate signup - in real app, this would call an API
        const mockUser = {
            id: 1,
            name: name,
            email: email,
            phone: '+91 9876543210',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200'
        };
        
        this.saveUser(mockUser);
        this.closeModal();
        return true;
    }

    logout() {
        this.saveUser(null);
        window.location.href = 'index.html';
    }

    updateUI() {
        const navActions = document.querySelector('.nav-actions');
        const mobileNav = document.querySelector('.mobile-nav');
        
        if (this.isLoggedIn()) {
            // Update desktop nav
            if (navActions) {
                navActions.innerHTML = `
                    <div class="cart-icon" onclick="window.location.href='cart.html'">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="cart-count">0</span>
                    </div>
                    <div class="dropdown">
                        <button class="nav-btn" type="button" data-bs-toggle="dropdown">
                            <img src="${this.currentUser.avatar}" alt="Profile" style="width: 32px; height: 32px; border-radius: 50%; margin-right: 8px;">
                            ${this.currentUser.name.split(' ')[0]}
                            <i class="fas fa-chevron-down ms-2" style="font-size: 12px;"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="profile.html"><i class="fas fa-user me-2"></i>Profile</a></li>
                            <li><a class="dropdown-item" href="profile.html?tab=orders"><i class="fas fa-box me-2"></i>Orders</a></li>
                            <li><a class="dropdown-item" href="profile.html?tab=addresses"><i class="fas fa-map-marker-alt me-2"></i>Addresses</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#" onclick="auth.logout()"><i class="fas fa-sign-out-alt me-2"></i>Logout</a></li>
                        </ul>
                    </div>
                `;
            }
            
            // Update mobile nav
            if (mobileNav) {
                const profileItem = mobileNav.querySelector('.mobile-nav-item:last-child');
                if (profileItem) {
                    profileItem.innerHTML = `
                        <img src="${this.currentUser.avatar}" alt="Profile" style="width: 24px; height: 24px; border-radius: 50%;">
                        <span>Profile</span>
                    `;
                    profileItem.href = 'profile.html';
                }
            }
        } else {
            // Update desktop nav
            if (navActions) {
                navActions.innerHTML = `
                    <div class="cart-icon" onclick="window.location.href='cart.html'">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="cart-count">0</span>
                    </div>
                    <button class="nav-btn login" onclick="auth.openModal('login')">Login</button>
                    <button class="nav-btn signup" onclick="auth.openModal('signup')">Sign Up</button>
                `;
            }
        }
        
        // Update cart badge
        if (typeof cart !== 'undefined') {
            cart.updateCartBadge();
        }
    }

    bindEvents() {
        // Close modal when clicking outside
        document.addEventListener('click', (e) => {
            const modal = document.getElementById('authModal');
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    openModal(type) {
        const modal = document.getElementById('authModal');
        const modalBody = modal?.querySelector('.modal-body');
        
        if (!modal || !modalBody) return;

        if (type === 'login') {
            modalBody.innerHTML = `
                <form id="loginForm">
                    <div class="form-group">
                        <label>Email or Phone</label>
                        <input type="text" id="loginEmail" placeholder="Enter email or phone number" required>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" id="loginPassword" placeholder="Enter password" required>
                    </div>
                    <button type="submit" class="modal-btn">Login</button>
                </form>
                <div class="modal-divider">or</div>
                <div class="social-login">
                    <button class="social-btn">
                        <i class="fab fa-google"></i>
                        Google
                    </button>
                    <button class="social-btn">
                        <i class="fab fa-facebook-f"></i>
                        Facebook
                    </button>
                </div>
                <p class="text-center mt-4 mb-0">
                    Don't have an account? 
                    <a href="#" onclick="auth.switchModal('signup')" style="color: var(--primary-color);">Sign up</a>
                </p>
            `;
            
            document.getElementById('loginForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                this.login(email, password);
            });
        } else {
            modalBody.innerHTML = `
                <form id="signupForm">
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" id="signupName" placeholder="Enter your full name" required>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" id="signupEmail" placeholder="Enter your email" required>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" id="signupPassword" placeholder="Create a password" required>
                    </div>
                    <button type="submit" class="modal-btn">Create Account</button>
                </form>
                <div class="modal-divider">or</div>
                <div class="social-login">
                    <button class="social-btn">
                        <i class="fab fa-google"></i>
                        Google
                    </button>
                    <button class="social-btn">
                        <i class="fab fa-facebook-f"></i>
                        Facebook
                    </button>
                </div>
                <p class="text-center mt-4 mb-0">
                    Already have an account? 
                    <a href="#" onclick="auth.switchModal('login')" style="color: var(--primary-color);">Login</a>
                </p>
            `;
            
            document.getElementById('signupForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('signupName').value;
                const email = document.getElementById('signupEmail').value;
                const password = document.getElementById('signupPassword').value;
                this.signup(name, email, password);
            });
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('authModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    switchModal(type) {
        this.openModal(type);
    }

    requireAuth(redirectUrl) {
        if (!this.isLoggedIn()) {
            this.openModal('login');
            return false;
        }
        return true;
    }
}

// Initialize auth
const auth = new Auth();
