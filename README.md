# 🛒 Trimmer E-Commerce Website

A professional, fully functional e-commerce website for selling hair trimmers and clippers. Built with pure HTML, CSS, and JavaScript - no dependencies required!

## 🌟 Features

### Core Features
- **9 Pre-loaded Products** - Electric, Manual, and Professional trimmers
- **Shopping Cart** - Add, remove, and update quantities
- **Product Filtering** - Filter by category (Electric, Manual, Professional)
- **Search Functionality** - Search products by name or description
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **LocalStorage Persistence** - Cart data saved between sessions
- **Free Shipping** - Automatically applied on orders over $50
- **Professional UI** - Modern design with smooth animations

### Additional Features
- Sticky navigation bar with search and cart icons
- Hero section with call-to-action
- Product ratings and emoji indicators
- About section with benefit cards
- Contact form for inquiries
- Toast notifications for user actions
- Footer with social links
- Mobile-friendly sidebar cart

## 📋 Product Categories

### ⚡ Electric Trimmers ($49.99 - $129.99)
- Professional Electric Trimmer Pro Max - $129.99
- Cordless Electric Trimmer - $89.99
- Budget Electric Trimmer - $49.99
- Ultra Lightweight Portable Trimmer - $59.99

### ✂️ Manual Trimmers ($34.99 - $44.99)
- Manual Precision Trimmer - $34.99
- Professional Manual Trimmer - $44.99

### 💈 Professional Trimmers ($79.99 - $199.99)
- Salon Professional Trimmer - $199.99
- Premium Pro Trimmer - $179.99
- Entry Level Professional Trimmer - $79.99

## 🚀 Quick Start

### Option 1: Using Python (Recommended)
```bash
cd Trimmer
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

### Option 2: Direct File Opening
Simply double-click `index.html` to open in your default browser.

### Option 3: Using Node.js http-server
```bash
npm install -g http-server
cd Trimmer
http-server
```

## 📁 File Structure

```
Trimmer/
├── index.html       # Main HTML structure
├── styles.css       # Complete styling (12.7 KB)
├── script.js        # All JavaScript functionality
└── README.md        # This file
```

## 💻 File Details

### index.html (~6 KB)
- Complete semantic HTML structure
- Navigation bar with logo and search
- Hero section
- Product grid container
- Filter buttons
- About section with benefit cards
- Contact form
- Shopping cart sidebar
- Footer with social links
- Toast notification element

### styles.css (~12.7 KB)
- CSS variables for consistent theming
- Responsive grid layouts
- Smooth transitions and animations
- Mobile-first design
- Navigation styling
- Product card styling
- Cart sidebar animations
- Footer styling
- Media queries for mobile optimization

### script.js (~10.1 KB)
- 9 product database
- Cart management (add, remove, update)
- Product filtering logic
- Search functionality
- LocalStorage integration
- Event listeners and handlers
- Toast notifications
- Cart calculation with shipping

## 🎯 How to Use

### Shopping
1. Browse products in the main grid
2. Use filter buttons to narrow down by category
3. Use search bar to find specific products
4. Click "Add to Cart" to add items
5. Cart count updates automatically

### Cart Management
1. Click cart icon (🛒) to open shopping cart
2. Adjust quantities with +/- buttons
3. Remove items with ✕ button
4. View subtotal, shipping, and total automatically calculated
5. Free shipping applied on $50+ orders

### Search
1. Click search icon (🔍)
2. Enter search term
3. Results show all matching products
4. Click search again to close bar

## 🎨 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1e3a8a;      /* Main blue */
    --secondary-color: #3b82f6;    /* Light blue */
    --accent-color: #f59e0b;       /* Orange */
    --dark-color: #1f2937;         /* Text color */
    --light-color: #f9fafb;        /* Background */
}
```

### Add New Products
Edit the `products` array in `script.js`:
```javascript
{
    id: 10,
    name: 'Product Name',
    category: 'electric',      // or 'manual' or 'professional'
    price: 99.99,
    description: 'Product description',
    rating: 4.5,
    emoji: '⚡'
}
```

### Modify Shipping Cost
In `script.js`, find the `updateCartSummary()` function:
```javascript
const shipping = subtotal >= 50 ? 0 : 5;  // Change 5 to desired shipping cost
```

### Change Product Filters
Add/remove filter buttons in `index.html`:
```html
<button class="filter-btn" onclick="filterProducts('new-category')">Category</button>
```

## 🌐 Browser Compatibility

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🔧 Technical Details

### Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- LocalStorage API

### Key Functions
- `displayProducts()` - Render product cards
- `filterProducts()` - Filter by category
- `performSearch()` - Search functionality
- `addToCart()` - Add item to cart
- `removeFromCart()` - Remove item from cart
- `updateQuantity()` - Adjust item quantity
- `toggleCart()` - Open/close cart sidebar
- `checkout()` - Process order

### LocalStorage
- Cart persists between browser sessions
- Key: `trimmerCart`
- Stores: Array of cart items with quantities

## 🎓 Learning Resources

This project is great for learning:
- Semantic HTML structure
- Modern CSS (Grid, Flexbox, Variables)
- Vanilla JavaScript event handling
- LocalStorage API
- Responsive web design
- E-commerce functionality

## 📝 Notes

- No backend required - fully client-side
- No external libraries or frameworks
- All functionality works offline
- Cart data stored locally on user's device
- Perfect for portfolio showcase
- Easy to extend with more features

## 🚀 Future Enhancements

Consider adding:
- User authentication system
- Backend payment integration (Stripe, PayPal)
- Product reviews and ratings system
- Wishlist functionality
- Multiple payment methods
- Order history tracking
- Admin dashboard
- Database integration
- Email notifications

## 📞 Support

For questions or issues:
1. Check the code comments
2. Review the function documentation
3. Test in browser developer tools
4. Verify file paths are correct

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Shopping!** 🛍️✂️

Created with ❤️ for e-commerce enthusiasts and web developers.