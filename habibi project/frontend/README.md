# 🍖 Habibi Frontend

React frontend for Habibi Restaurant with premium Arabic luxury design.

## 🎨 Design System

### Color Palette
- **Primary Dark:** #2D1810 (Deep Brown)
- **Primary Light:** #8B6F47 (Medium Brown)
- **Secondary Gold:** #D4AF37 (Luxury Gold)
- **Secondary Beige:** #F5E6D3 (Light Beige)
- **Secondary Black:** #1a1a1a (Near Black)

### Typography
- **Font:** Poppins (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700

## 📦 Dependencies

- **react:** ^18.2.0 - UI library
- **react-dom:** ^18.2.0 - DOM rendering
- **react-router-dom:** ^6.8.0 - Client routing
- **axios:** ^1.3.0 - HTTP client
- **tailwindcss:** ^3.2.4 - Utility CSS
- **postcss:** ^8.4.21 - CSS processor
- **autoprefixer:** ^10.4.13 - CSS vendor prefixes

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build
```

Frontend runs on `http://localhost:3000`

## 📱 Components

### Layout Components
- **Navbar** - Fixed navigation with mobile menu
- **Footer** - Copyright & quick links

### Section Components
- **Hero** - Full-screen intro with CTA buttons
- **SignatureDishes** - Featured dishes grid
- **Experience** - Mixed layout content section
- **Reviews** - Customer testimonials
- **Menu** - Tabbed menu interface
- **Contact** - Contact form & Google Maps

## 🎨 Styling

### Tailwind Configuration
[tailwind.config.js](tailwind.config.js) extends:
- Custom colors (primary, secondary)
- Font families (Poppins)
- Custom animations

### Custom CSS
[src/index.css](src/index.css) includes:
- Global styles
- Custom animations (fadeInUp, slideInLeft, etc.)
- Utility classes (.text-gold, .bg-gradient-luxury)
- Hover effects (.hover-lift)

### Animations
- `fadeInUp` - Fade in + slide up
- `fadeInDown` - Fade in + slide down
- `slideInLeft` - Slide from left
- `slideInRight` - Slide from right
- `glow` - Pulsing glow effect
- `float` - Floating motion

## 🔗 Integration

### API Calls
Use axios in components:

```js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Example
const getMenu = async () => {
  const response = await axios.get(`${API_URL}/api/menu`);
  return response.data;
};
```

### Environment Variables
Create `.env` file:
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_FOODPANDA_LINK=https://foodpanda.pk/
```

## 📐 Responsive Breakpoints

- **sm:** 640px (tablets)
- **md:** 768px (landscape tablets)
- **lg:** 1024px (desktops)
- **xl:** 1280px (large screens)

Examples:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  // 1 col on mobile, 2 on tablet, 3 on desktop
</div>
```

## 🎯 Key Features

✅ Smooth scroll behavior
✅ Lazy loading images
✅ Form validation
✅ Mobile-first design
✅ Accessibility friendly
✅ Performance optimized

## 🛠️ Development

### File Structure
```
src/
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── SignatureDishes.js
│   ├── Experience.js
│   ├── Reviews.js
│   ├── Menu.js
│   ├── Contact.js
│   └── Footer.js
├── App.js
├── index.js
└── index.css
```

### Adding New Components
1. Create file in `src/components/`
2. Import in `App.js`
3. Add to JSX layout
4. Style with Tailwind classes

## 📱 Mobile Optimization

All components include:
- Responsive grid layouts
- Touch-friendly button sizes (min 44px)
- Mobile menu navigation
- Optimized images

## 🔐 Environment Setup

```bash
cp .env.example .env
```

Update values for:
- API endpoint
- Restaurant links
- Third-party integrations

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Outputs to 'build/' folder
# Deploy to Vercel, Netlify, or traditional hosting
```

## 🐛 Troubleshooting

**Tailwind not applying?**
- Ensure content paths in `tailwind.config.js`
- Restart dev server

**Images not loading?**
- Use placeholder images from unsplash.com
- Replace with actual assets

**CORS errors?**
- Backend CORS configured in `server.js`
- Check API_URL in .env

## 📄 License

Built for Habibi Restaurant Peshawar

---

**Frontend built with ❤️ using React & Tailwind CSS**
