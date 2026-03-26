# 🍖 Habibi Restaurant Website

Premium Arabic & BBQ Restaurant Website built with **MERN Stack** and **Tailwind CSS**.

## 🎨 Features

✅ **Modern Arabic Luxury Design**
- Deep brown & gold color scheme
- Smooth animations & transitions
- Responsive mobile-first design

✅ **Premium Sections**
- Full-screen hero with video background
- Signature dishes showcase
- Family dining experience section
- Customer reviews with star ratings
- Multi-category menu with tabs
- Contact form with Google Maps
- Foodpanda & WhatsApp integration

✅ **Smart Features**
- Smooth scroll animations
- Hover effects on dish cards
- Form validation
- Real-time menu filtering
- Mobile-responsive navigation

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Axios** - API calls
- **React Router** - Navigation

### Backend
- **Node.js & Express** - Server
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication (ready)

## 📁 Project Structure

```
habibi-project/
├── frontend/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css        # Tailwind & animations
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── backend/                  # Express backend
    ├── models/              # MongoDB schemas
    ├── controllers/         # Business logic
    ├── routes/              # API routes
    ├── server.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn
- MongoDB (local or Atlas)

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on `http://localhost:3000`

**Tailwind CSS** is pre-configured with custom colors:
- Primary: Deep Brown (#2D1810)
- Secondary: Gold (#D4AF37)
- Light: Beige (#F5E6D3)

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm dev
```

Backend API runs on `http://localhost:5000`

**Configure MongoDB:**
Update `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/habibi_restaurant
```

## 📡 API Endpoints

### Menu
- `GET /api/menu` - All menu items
- `GET /api/menu/popular` - Popular items
- `GET /api/menu/category/:category` - Items by category (bbq, arabic, salads, platters)
- `POST /api/menu` - Add item (admin)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order
- `GET /api/orders` - All orders (admin)
- `PATCH /api/orders/:id/status` - Update status

### Reviews
- `POST /api/reviews` - Submit review
- `GET /api/reviews` - Approved reviews
- `GET /api/reviews/admin/all` - All reviews (admin)
- `PATCH /api/reviews/:id/approve` - Approve review

### Contact
- `POST /api/contact` - Submit contact form

## 🎨 Customization

### Colors
Edit [tailwind.config.js](frontend/tailwind.config.js):
```js
colors: {
  primary: { dark: "#2D1810", light: "#8B6F47" },
  secondary: { gold: "#D4AF37", black: "#1a1a1a", beige: "#F5E6D3" }
}
```

### Phone & Links
Update in components:
- Navbar.js - WhatsApp & Order links
- Contact.js - Phone, email, address
- Footer.js - Social media

### Restaurant Info
- **Phone:** +92 300 1234567
- **Hours:** 12 PM - 12 AM
- **Location:** Peshawar, KP

## 🔗 Integration Points

### Foodpanda
Link button to: `https://foodpanda.pk`

### WhatsApp
Link: `https://wa.me/923001234567`

### Google Maps
Embed updated in [Contact.js](frontend/src/components/Contact.js)

## 📱 Responsive Design

- ✅ Mobile (320px)
- ✅ Tablet (768px)
- ✅ Desktop (1024px+)

All components use Tailwind's responsive classes (`md:`, `lg:`)

## 🎯 Future Enhancements

- [ ] Online payment gateway
- [ ] Admin dashboard
- [ ] Instagram feed widget
- [ ] Professional photoshoot gallery
- [ ] Promo banner system
- [ ] Email notifications
- [ ] SMS updates

## 📝 Notes

- Replace image placeholders with actual food photography
- Update restaurant details in .env files
- Integrate with actual MongoDB instance
- Add authentication for admin routes
- Deploy frontend to Vercel/Netlify
- Deploy backend to Heroku/Railway

## 👨‍💻 Development

Hot reload enabled:
- Frontend: `npm start` (React Scripts)
- Backend: `npm dev` (Nodemon)

## 📄 License

This project is built for Habibi Restaurant Peshawar.

---

**Made with ❤️ for Habibi Restaurant**
