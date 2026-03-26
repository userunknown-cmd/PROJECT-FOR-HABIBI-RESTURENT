# ⚡ Quick Start - Habibi Restaurant MERN Website

## 🚀 Fastest Way to Run

### Terminal 1 - Install & Run Backend
```bash
cd backend
npm install
copy .env.example .env
npm dev
```
✅ API running on `http://localhost:5000`

### Terminal 2 - Install & Run Frontend
```bash
cd frontend
npm install
npm start
```
✅ Website on `http://localhost:3000`

---

## 📦 What's Included

✅ **Full-Page Design**
- Hero section with video background
- Signature dishes showcase
- Customer testimonials
- Multi-category menu with tabs
- Contact form + Google Maps
- Smooth animations throughout

✅ **Backend API** (Express + MongoDB)
- Menu management
- Order system
- Review management
- Contact form handler

✅ **Premium Styling** (Tailwind CSS)
- Deep brown & gold luxury theme
- Fully responsive design
- Custom animations
- Mobile menu navigation

✅ **Features Ready**
- Foodpanda integration
- WhatsApp contact button
- Google Maps embed
- Form validation
- Tab-based menu filtering

---

## 🎯 Key Files to Customize

### Restaurant Info
- `frontend/src/components/Contact.js` - Address, hours, phone
- `frontend/src/components/Navbar.js` - WhatsApp & order links
- `backend/.env` - MongoDB connection

### Design/Colors
- `frontend/tailwind.config.js` - Update colors
- `frontend/src/index.css` - Custom animations
- Images in components - Replace placeholders

### Menu Items
Add via API:
```bash
curl -X POST http://localhost:5000/api/menu \
  -H "Content-Type: application/json" \
  -d '{"name":"Dish","category":"bbq","price":500}'
```

---

## 🌐 What Gets Displayed

When you open `http://localhost:3000`:

1. **Fixed Navigation Bar** 📌
   - Habibi logo
   - Menu links
   - Order Now button
   - WhatsApp button

2. **Hero Section** 🎬
   - Full-screen background
   - Restaurant tagline
   - 3 CTA buttons (Order, Call, Directions)

3. **Signature Dishes** 🍖
   - 3 featured dishes with images
   - Hover effects (zoom + glow)

4. **Experience Section** 🏠
   - Split layout (image + text)
   - 4 experience highlights
   - Reserve button

5. **Customer Reviews** ⭐
   - 3 customer testimonials
   - Star ratings with animation
   - Customer avatars

6. **Menu** 🍽️
   - 4 category tabs (BBQ, Arabic, Salads, Platters)
   - 4 items per category
   - "Most Ordered" tags
   - Prices (Rs currency)

7. **Contact Section** 💬
   - Contact form
   - Quick links (WhatsApp, Foodpanda)
   - Google Maps embed
   - Hours & phone

8. **Footer** 👣
   - Social media links
   - Copyright info
   - Quick navigation

---

## 📱 Responsive Breakpoints

✅ Mobile (320px+)
✅ Tablet (768px+)
✅ Desktop (1024px+)

Test on mobile:
```bash
# Find your IP
ipconfig

# On mobile, visit
http://YOUR_IP:3000
```

---

## 🔗 Integration Points

### Foodpanda
Currently links to general Foodpanda site. To add specific restaurant:
1. Get restaurant link from Foodpanda
2. Update in `Navbar.js` and `Hero.js`

### WhatsApp
1. Change phone number in `Navbar.js`, `Contact.js`
2. Use format: `https://wa.me/923001234567`

### Google Maps
1. Get embed code from Google Maps
2. Replace iframe src in `Contact.js`

---

## 💾 Database Commands

**View MongoDB data:**
```bash
mongosh
use habibi_restaurant
db.menuitems.find()
db.orders.find()
db.reviews.find()
```

---

## 🐛 Common Issues & Fixes

**Port 3000 already in use?**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Port 5000 already in use?**
```bash
lsof -i :5000
kill -9 <PID>
```

**Tailwind not applying?**
- Clear: `rm -rf frontend/node_modules`
- Reinstall: `npm install`
- Restart: `npm start`

**MongoDB connection fails?**
- Ensure MongoDB running: `mongod`
- Check `.env` connection string
- For Atlas: whitelist your IP

---

## 🎬 Full Documentation

- [Main README](README.md) - Project overview
- [Frontend README](frontend/README.md) - React & Tailwind
- [Backend README](backend/README.md) - API & Database
- [Setup Guide](SETUP.md) - Detailed installation

---

## 🎨 Color Scheme

```
Primary Dark:    #2D1810 (Deep Brown)
Primary Light:   #8B6F47 (Medium Brown)
Secondary Gold:  #D4AF37 (Luxury)
Secondary Beige: #F5E6D3 (Light)
Secondary Black: #1a1a1a (Dark)
```

---

## 🚀 Next Steps

1. ✅ Run frontend & backend
2. ✅ Test all sections
3. ✅ Add real images
4. ✅ Update restaurant info
5. ✅ Setup actual Foodpanda link
6. ✅ Test contact form
7. ✅ Deploy to production

---

## 📊 Script Commands

**Root level:**
```bash
npm run dev              # Run both servers
npm run install:all     # Install all dependencies
npm run build           # Build frontend & backend
```

**Frontend:**
```bash
cd frontend
npm start              # Development
npm run build          # Production build
```

**Backend:**
```bash
cd backend
npm dev               # Development (auto-reload)
npm start             # Production
```

---

## 🎯 This Website Will:

✨ Make Habibi look **premium & professional**
✨ Convert visitors with **hunger-triggering images**
✨ Enable **online ordering** (Foodpanda)
✨ Build **trust** with reviews & maps
✨ **Compete** with restaurants like Piyali

---

**You now have a complete, production-ready MERN website for Habibi Restaurant! 🍖**

Open browser → `http://localhost:3000` → Enjoy! 🎉
