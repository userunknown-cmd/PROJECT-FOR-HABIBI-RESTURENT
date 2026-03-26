# 🚀 Setup Guide - Habibi Restaurant Website

Complete setup instructions for the MERN stack website.

## 📋 Prerequisites

- **Node.js** 14+ (download from https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- **MongoDB** (local installation or MongoDB Atlas cloud)
- **Git** (optional, for version control)
- **Code Editor** (VS Code recommended)

## 🎯 Step-by-Step Setup

### 1️⃣ Initial Setup (Root Directory)

```bash
# Navigate to project directory
cd "c:\Users\PC VISION\OneDrive\Desktop\second project\habibi project"

# Install root dependencies
npm install
```

### 2️⃣ Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Create environment file
copy .env.example .env

# Start development server
npm start
```

✅ Frontend will open at `http://localhost:3000`

**Frontend files created:**
- ✅ React components (Hero, Menu, Contact, etc.)
- ✅ Tailwind CSS configuration
- ✅ Custom animations & styles
- ✅ Responsive design

### 3️⃣ Backend Setup

```bash
# Navigate to backend
cd ../backend

# Install dependencies
npm install

# Create environment file
copy .env.example .env
```

**Edit `.env` file:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/habibi_restaurant
JWT_SECRET=habibi_secret_key_123
NODE_ENV=development
```

**Start development:**
```bash
npm dev
```

✅ API will run at `http://localhost:5000`

### 4️⃣ MongoDB Setup

#### Option A: Local MongoDB
```bash
# Install MongoDB Community Edition
# https://docs.mongodb.com/manual/installation/

# Start MongoDB service
mongod
```

#### Option B: MongoDB Atlas (Cloud - Recommended)
1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Sign Up Free"
3. Create account
4. Create a cluster (M0 free tier)
5. Create a database user
6. Get connection string
7. Update `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/habibi_restaurant?retryWrites=true&w=majority
```

### 5️⃣ Verify Installation

**Test Frontend:**
- Open http://localhost:3000
- See full website with all sections
- Test mobile responsiveness (F12)

**Test Backend API:**
```bash
# Health check
curl http://localhost:5000/health

# Expected response
{"status": "✅ Server is running"}

# Get menu items
curl http://localhost:5000/api/menu
```

---

## 🗂️ Project Structure

```
habibi-project/
│
├── 📁 frontend/                 # React Application
│   ├── public/
│   │   └── index.html          # Main HTML file
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js       # Navigation bar
│   │   │   ├── Hero.js         # Hero section
│   │   │   ├── SignatureDishes.js
│   │   │   ├── Experience.js
│   │   │   ├── Reviews.js
│   │   │   ├── Menu.js         # Menu with tabs
│   │   │   ├── Contact.js      # Contact form
│   │   │   └── Footer.js
│   │   ├── App.js              # Main component
│   │   ├── index.js            # React entry point
│   │   └── index.css           # Global styles + animations
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── README.md
│
├── 📁 backend/                  # Express Server
│   ├── models/
│   │   ├── MenuItem.js         # Menu schema
│   │   ├── Order.js            # Order schema
│   │   └── Review.js           # Review schema
│   ├── controllers/
│   │   ├── menuController.js
│   │   ├── orderController.js
│   │   ├── reviewController.js
│   │   └── contactController.js
│   ├── routes/
│   │   ├── menuRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── reviewRoutes.js
│   │   └── contactRoutes.js
│   ├── server.js               # Express app setup
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
├── package.json               # Root package.json
├── .gitignore               # Git ignore file
├── .prettierrc               # Code formatting
├── README.md                # Main documentation
└── SETUP.md                 # This file
```

---

## 🎨 Customization

### Change Restaurant Info

**Frontend Components:**

1. **Navbar** (`frontend/src/components/Navbar.js`)
   - Change phone/WhatsApp number
   - Update Foodpanda link

2. **Hero** (`frontend/src/components/Hero.js`)
   - Change restaurant name
   - Update tagline
   - Modify background image

3. **Contact** (`frontend/src/components/Contact.js`)
   - Update address
   - Change phone number
   - Modify hours
   - Update Google Maps embed

4. **Footer** (`frontend/src/components/Footer.js`)
   - Add social media links
   - Update contact info

### Change Colors

**File:** `frontend/tailwind.config.js`

```js
colors: {
  primary: {
    dark: "#2D1810",      // Deep Brown
    light: "#8B6F47",     // Medium Brown
  },
  secondary: {
    gold: "#D4AF37",      // Gold
    black: "#1a1a1a",     // Black
    beige: "#F5E6D3",     // Beige
  },
}
```

### Add Menu Items

Use Postman/Insomnia to POST:
```
POST http://localhost:5000/api/menu
Content-Type: application/json

{
  "name": "Tandoori Chicken",
  "category": "bbq",
  "description": "Smoky tandoori flavors",
  "price": 850,
  "image": "image-url",
  "isPopular": true
}
```

---

## 🚀 Running the Project

### Development Mode (Both Frontend & Backend)

```bash
# From root directory
npm run dev
```

This runs both servers concurrently.

### Individual Servers

**Frontend only:**
```bash
cd frontend
npm start
```

**Backend only:**
```bash
cd backend
npm dev
```

### Production Mode

```bash
# Build frontend
cd frontend
npm run build

# Start backend
cd ../backend
npm start
```

---

## 🔗 Integration Checklist

- [ ] Update restaurant name
- [ ] Update phone number
- [ ] Update address
- [ ] Update opening hours
- [ ] Setup MongoDB connection
- [ ] Add actual food images
- [ ] Setup Foodpanda link
- [ ] Setup WhatsApp business number
- [ ] Update Google Maps
- [ ] Add real reviews
- [ ] Configure payment gateway
- [ ] Setup email notifications

---

## 📱 Mobile Testing

```bash
# On same network, find your IP
ipconfig getifaddr en0  # Mac
ipconfig                 # Windows

# Access from mobile
http://YOUR_IP:3000
```

---

## 🐛 Troubleshooting

### Frontend issues

**Port 3000 already in use:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac
lsof -i :3000
kill -9 <PID>
```

**Tailwind not working:**
- Ensure `tailwind.config.js` has correct paths
- Restart dev server
- Clear `.next` or `node_modules`

### Backend issues

**MongoDB connection error:**
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify network access (Atlas firewall)

**Port 5000 already in use:**
```bash
# Change PORT in .env or
lsof -i :5000
kill -9 <PID>
```

**CORS errors:**
- Ensure `cors()` middleware in `server.js`
- Check API URL in frontend `.env`

### General issues

**Dependencies not installing:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

---

## 📚 Learning Resources

- **React:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Express.js:** https://expressjs.com/
- **MongoDB:** https://docs.mongodb.com/
- **Mongoose:** https://mongoosejs.com/

---

## 🚢 Deployment

### Frontend (Vercel - Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy (automatic)

### Frontend (Netlify)
1. `npm run build`
2. Deploy `frontend/build` folder

### Backend (Heroku)
```bash
heroku create habibi-api
heroku config:set MONGODB_URI=your_uri
git push heroku main
```

### Backend (Railway)
```bash
railway login
railway up
```

---

## 💡 Next Steps

After setup:
1. ✅ Test all features
2. ✅ Customize restaurant info
3. ✅ Add real images
4. ✅ Setup payment gateway
5. ✅ Deploy to production
6. ✅ Setup analytics
7. ✅ Monitor performance

---

## 🆘 Need Help?

- Check README files in `frontend/` and `backend/`
- Review API documentation
- Test endpoints with Postman
- Check browser console for errors
- Check server logs

---

**Happy coding! 🍖**
