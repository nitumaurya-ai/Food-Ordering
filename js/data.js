// ============================================
// Food Delivery Website - Mock Data
// ============================================

const categories = [
    { id: 1, name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300' },
    { id: 2, name: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300' },
    { id: 3, name: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300' },
    { id: 4, name: 'Chinese', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=300' },
    { id: 5, name: 'South Indian', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300' },
    { id: 6, name: 'North Indian', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300' },
    { id: 7, name: 'Desserts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300' },
    { id: 8, name: 'Ice Cream', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=300' }
];

const restaurants = [
    {
        id: 1,
        name: 'Pizza Hut',
        cuisine: 'Pizza, Italian, Fast Food',
        rating: 4.2,
        deliveryTime: '30-40 min',
        priceForTwo: 400,
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600',
        offer: '50% OFF up to ₹100',
        veg: false,
        location: 'Koramangala, Bangalore'
    },
    {
        id: 2,
        name: 'Biryani Blues',
        cuisine: 'Biryani, North Indian, Mughlai',
        rating: 4.5,
        deliveryTime: '35-45 min',
        priceForTwo: 500,
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600',
        offer: 'FREE Delivery',
        veg: false,
        location: 'HSR Layout, Bangalore'
    },
    {
        id: 3,
        name: 'Burger King',
        cuisine: 'Burger, Fast Food, Beverages',
        rating: 4.1,
        deliveryTime: '25-35 min',
        priceForTwo: 350,
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600',
        offer: 'Buy 1 Get 1 Free',
        veg: false,
        location: 'Indiranagar, Bangalore'
    },
    {
        id: 4,
        name: 'Mainland China',
        cuisine: 'Chinese, Asian, Thai',
        rating: 4.3,
        deliveryTime: '40-50 min',
        priceForTwo: 800,
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600',
        offer: '20% OFF',
        veg: false,
        location: 'MG Road, Bangalore'
    },
    {
        id: 5,
        name: 'Sagar Ratna',
        cuisine: 'South Indian, Vegetarian',
        rating: 4.4,
        deliveryTime: '30-40 min',
        priceForTwo: 300,
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
        offer: '30% OFF',
        veg: true,
        location: 'Jayanagar, Bangalore'
    },
    {
        id: 6,
        name: 'Punjabi Grill',
        cuisine: 'North Indian, Punjabi, Tandoor',
        rating: 4.0,
        deliveryTime: '35-45 min',
        priceForTwo: 600,
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600',
        offer: 'Flat ₹125 OFF',
        veg: false,
        location: 'Whitefield, Bangalore'
    },
    {
        id: 7,
        name: 'Natural Ice Cream',
        cuisine: 'Ice Cream, Desserts',
        rating: 4.6,
        deliveryTime: '20-30 min',
        priceForTwo: 250,
        image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600',
        offer: 'FREE Scoop',
        veg: true,
        location: 'Koramangala, Bangalore'
    },
    {
        id: 8,
        name: 'Theobroma',
        cuisine: 'Bakery, Desserts, Beverages',
        rating: 4.7,
        deliveryTime: '25-35 min',
        priceForTwo: 450,
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
        offer: '15% OFF',
        veg: true,
        location: 'Indiranagar, Bangalore'
    }
];

const menuItems = {
    1: [ // Pizza Hut
        { id: 101, name: 'Margherita Pizza', description: 'Classic delight with 100% real mozzarella cheese', price: 199, veg: true, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300' },
        { id: 102, name: 'Pepperoni Pizza', description: 'Classic American taste with beef pepperoni', price: 349, veg: false, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300' },
        { id: 103, name: 'Veggie Supreme', description: 'Loaded with mushrooms, capsicum, onions & tomatoes', price: 299, veg: true, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300' },
        { id: 104, name: 'Chicken Supreme', description: 'Loaded with chicken tikka, chicken sausages & more', price: 399, veg: false, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300' },
        { id: 105, name: 'Garlic Breadsticks', description: 'Freshly baked garlic breadsticks', price: 99, veg: true, image: 'https://images.unsplash.com/photo-1619531040576-cbbe03e2e708?w=300' }
    ],
    2: [ // Biryani Blues
        { id: 201, name: 'Hyderabadi Biryani', description: 'Authentic Hyderabadi style biryani with raita', price: 299, veg: false, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300' },
        { id: 202, name: 'Chicken Tikka Biryani', description: 'Biryani with succulent chicken tikka pieces', price: 349, veg: false, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300' },
        { id: 203, name: 'Veg Biryani', description: 'Fragrant rice with mixed vegetables', price: 249, veg: true, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300' },
        { id: 204, name: 'Mutton Biryani', description: 'Tender mutton pieces in aromatic rice', price: 449, veg: false, image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=300' },
        { id: 205, name: 'Paneer Tikka Biryani', description: 'Biryani with paneer tikka cubes', price: 329, veg: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300' }
    ],
    3: [ // Burger King
        { id: 301, name: 'Whopper', description: 'Our signature burger with flame-grilled patty', price: 199, veg: false, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300' },
        { id: 302, name: 'Veg Whopper', description: 'Plant-based patty with fresh veggies', price: 179, veg: true, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300' },
        { id: 303, name: 'Chicken Fries', description: 'Crispy chicken fries with dipping sauce', price: 149, veg: false, image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb2c?w=300' },
        { id: 304, name: 'Cheeseburger', description: 'Classic cheeseburger with American cheese', price: 129, veg: false, image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300' },
        { id: 305, name: 'Onion Rings', description: 'Crispy golden onion rings', price: 89, veg: true, image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=300' }
    ],
    4: [ // Mainland China
        { id: 401, name: 'Chicken Manchurian', description: 'Indo-Chinese style chicken manchurian', price: 299, veg: false, image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300' },
        { id: 402, name: 'Veg Hakka Noodles', description: 'Stir-fried noodles with vegetables', price: 229, veg: true, image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=300' },
        { id: 403, name: 'Chilli Chicken', description: 'Spicy chilli chicken dry', price: 329, veg: false, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb74b?w=300' },
        { id: 404, name: 'Spring Rolls', description: 'Crispy vegetable spring rolls', price: 199, veg: true, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300' },
        { id: 405, name: 'Hot & Sour Soup', description: 'Classic hot and sour soup', price: 149, veg: true, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300' }
    ],
    5: [ // Sagar Ratna
        { id: 501, name: 'Masala Dosa', description: 'Crispy dosa with spiced potato filling', price: 120, veg: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300' },
        { id: 502, name: 'Idli Sambar', description: 'Soft idlis with sambar and chutney', price: 80, veg: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300' },
        { id: 503, name: 'Medu Vada', description: 'Crispy fried lentil donuts', price: 90, veg: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300' },
        { id: 504, name: 'Uttapam', description: 'Thick pancake with vegetable toppings', price: 110, veg: true, image: 'https://images.unsplash.com/photo-1668236543090-82c5a76c2df8?w=300' },
        { id: 505, name: 'Filter Coffee', description: 'Traditional South Indian filter coffee', price: 50, veg: true, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300' }
    ],
    6: [ // Punjabi Grill
        { id: 601, name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry', price: 399, veg: false, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300' },
        { id: 602, name: 'Paneer Tikka', description: 'Grilled cottage cheese with spices', price: 299, veg: true, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300' },
        { id: 603, name: 'Dal Makhani', description: 'Creamy black lentils', price: 249, veg: true, image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c4?w=300' },
        { id: 604, name: 'Naan Basket', description: 'Assorted naan breads', price: 149, veg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300' },
        { id: 605, name: 'Tandoori Chicken', description: 'Classic tandoori chicken', price: 349, veg: false, image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?w=300' }
    ],
    7: [ // Natural Ice Cream
        { id: 701, name: 'Tender Coconut', description: 'Fresh tender coconut ice cream', price: 120, veg: true, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=300' },
        { id: 702, name: 'Mango Ice Cream', description: 'Made with real Alphonso mangoes', price: 130, veg: true, image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300' },
        { id: 703, name: 'Chocolate Brownie', description: 'Rich chocolate ice cream with brownie', price: 150, veg: true, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300' },
        { id: 704, name: 'Sitaphal', description: 'Custard apple ice cream', price: 140, veg: true, image: 'https://images.unsplash.com/photo-1563585048450-41c5d9d2baf0?w=300' },
        { id: 705, name: 'Roasted Almond', description: 'Creamy almond ice cream', price: 135, veg: true, image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?w=300' }
    ],
    8: [ // Theobroma
        { id: 801, name: 'Chocolate Truffle Cake', description: 'Rich chocolate truffle pastry', price: 180, veg: true, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300' },
        { id: 802, name: 'Red Velvet Cupcake', description: 'Classic red velvet with cream cheese', price: 120, veg: true, image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c31b?w=300' },
        { id: 803, name: 'Chocolate Chip Cookie', description: 'Freshly baked chocolate chip cookie', price: 80, veg: true, image: 'https://images.unsplash.com/photo-1499636138143-bd649043ea52?w=300' },
        { id: 804, name: 'Blueberry Cheesecake', description: 'Creamy cheesecake with blueberry', price: 220, veg: true, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300' },
        { id: 805, name: 'Cappuccino', description: 'Classic Italian cappuccino', price: 150, veg: true, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300' }
    ]
};

const offers = [
    { id: 1, title: '50% OFF', subtitle: 'Up to ₹100 on first order', code: 'FIRST50', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600' },
    { id: 2, title: 'FREE Delivery', subtitle: 'On orders above ₹199', code: 'FREEDEL', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600' },
    { id: 3, title: '20% OFF', subtitle: 'On all restaurants', code: 'SAVE20', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600' }
];

const orders = [
    { id: 'ORD001', restaurant: 'Pizza Hut', items: ['Margherita Pizza x2', 'Garlic Breadsticks'], total: 497, status: 'delivered', date: '2024-02-20' },
    { id: 'ORD002', restaurant: 'Biryani Blues', items: ['Hyderabadi Biryani x1'], total: 299, status: 'preparing', date: '2024-02-21' },
    { id: 'ORD003', restaurant: 'Theobroma', items: ['Chocolate Truffle Cake x2', 'Cappuccino'], total: 510, status: 'delivered', date: '2024-02-18' }
];

const addresses = [
    { id: 1, type: 'Home', address: '123, 4th Cross, Koramangala, Bangalore - 560034', phone: '+91 9876543210' },
    { id: 2, type: 'Work', address: '456, Tech Park, Whitefield, Bangalore - 560066', phone: '+91 9876543210' }
];

// Export data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categories, restaurants, menuItems, offers, orders, addresses };
}
