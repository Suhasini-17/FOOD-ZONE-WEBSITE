🍽 FoodZone – Online Food Ordering Website

FoodZone is a responsive web-based food ordering platform where users can browse food items, filter by category, add items to cart, and simulate checkout.  
The project also includes simple Login and Signup pages (frontend only).

---

## 🚀 Pages in This Project

### 🏠 `index.html` – Home Page
- Hero section: “We Deliver Delicious Food With Love”
- Attractive delivery illustration
- “Order Now” button linking to food page
- Food categories (Pizza, Burger, Biryani, Rolls, Desserts, Drinks, Starters)

### 🍕 `food.html` – Food Listing Page
- Shows all food items with:
  - Image  
  - Name  
  - Price  
- Search bar to filter by food name  
- Category dropdown (Pizza, Burger, Biryani, Rolls, Desserts, Drinks, Starters)  
- “Add to Cart” button for each item  
- Data handled using `food.js`

### 🛒 `cart.html` – Cart Page
- Displays all items added to cart:
  - Image, name, price
- Remove single item
- Clear entire cart
- Shows **Total Bill**
- “Checkout” button → thanks message + redirect to Home
- Cart stored using **localStorage** (handled in `cart.js`)

### 🔐 `login.html` – Login Page
- Frontend UI for user login
- Styled with `login.css`
- Basic behavior in `login.js` (client-side only)

### 📝 `signup.html` – Signup Page
- Frontend UI for new user registration
- Styled with `signup.css`
- Basic behavior in `signup.js` (client-side only)

> Note: Login/Signup are **UI only** (no real backend/auth yet).

---

## 🧱 Tech Stack

- **HTML** – Structure & pages  
- **CSS** – Layout, gradients, buttons, responsive design  
  - `style.css` – shared styles (Home, Food, Navbar, etc.)
  - `cart.css` – cart-specific styles
  - `login.css`, `signup.css` – auth page styles
- **JavaScript**
  - `food.js` – food data, search + filter + add to cart
  - `cart.js` – cart rendering, remove, clear, checkout
  - `login.js`, `signup.js` – basic form behavior
- **LocalStorage** – save cart items on the browser

---

## 📂 Folder Structure

```txt
FOOD-ZONE-PROJECT/
│
├─ index.html        # Home page
├─ food.html         # Food listing page
├─ cart.html         # Cart page
├─ login.html        # Login page
├─ signup.html       # Signup page
│
├─ style.css         # main styles (home + food + header/footer)
├─ food.css          # (if used) extra food page styles
├─ cart.css          # cart page styles
├─ login.css         # login page styles
├─ signup.css        # signup page styles
│
├─ food.js           # food items, filter, cart add
├─ cart.js           # cart logic (localStorage)
├─ login.js          # login behavior (frontend)
├─ signup.js         # signup behavior (frontend)
│
└─ README.md         # project description (this file)
