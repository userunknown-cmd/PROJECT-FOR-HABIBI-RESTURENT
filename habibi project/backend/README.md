# 🍖 Habibi Backend

Express.js API backend for Habibi Restaurant with MongoDB database.

## 📚 Tech Stack

- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemon** - Development auto-reload
- **CORS** - Cross-origin support
- **JWT** - Token authentication (ready)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development
npm dev

# Production
npm start
```

Server runs on `http://localhost:5000`

## 📁 Project Structure

```
backend/
├── models/              # MongoDB schemas
│   ├── MenuItem.js
│   ├── Order.js
│   └── Review.js
├── controllers/         # Business logic
│   ├── menuController.js
│   ├── orderController.js
│   ├── reviewController.js
│   └── contactController.js
├── routes/              # API endpoints
│   ├── menuRoutes.js
│   ├── orderRoutes.js
│   ├── reviewRoutes.js
│   └── contactRoutes.js
├── server.js            # Main server file
├── package.json
└── .env.example
```

## 🗄️ Database Models

### MenuItem
```
{
  name: String (required),
  category: String (bbq|arabic|salads|platters),
  description: String,
  price: Number (required),
  image: String,
  isPopular: Boolean,
  isAvailable: Boolean,
  timestamps: { createdAt, updatedAt }
}
```

### Order
```
{
  customer: {
    name: String,
    email: String,
    phone: String,
    address: String
  },
  items: [
    {
      menuItem: ObjectId,
      quantity: Number,
      price: Number
    }
  ],
  totalPrice: Number (required),
  status: String (pending|processing|completed|cancelled),
  paymentMethod: String (cash|card|online),
  notes: String,
  timestamps: { createdAt, updatedAt }
}
```

### Review
```
{
  name: String (required),
  email: String,
  rating: Number (1-5, required),
  text: String (required),
  isApproved: Boolean,
  timestamps: { createdAt, updatedAt }
}
```

## 📡 API Endpoints

### Menu Endpoints
```
GET    /api/menu                    - All menu items
GET    /api/menu/popular            - Popular items (6)
GET    /api/menu/category/:category - Items by category
POST   /api/menu                    - Add menu item (admin)
PUT    /api/menu/:id                - Update menu item (admin)
DELETE /api/menu/:id                - Delete menu item (admin)
```

### Order Endpoints
```
POST   /api/orders                  - Create order
GET    /api/orders/:id              - Get order by ID
GET    /api/orders                  - All orders (admin)
PATCH  /api/orders/:id/status       - Update order status
DELETE /api/orders/:id              - Delete order (admin)
```

### Review Endpoints
```
POST   /api/reviews                 - Submit review
GET    /api/reviews                 - Get approved reviews
GET    /api/reviews/admin/all       - All reviews (admin)
PATCH  /api/reviews/:id/approve     - Approve review (admin)
DELETE /api/reviews/:id             - Delete review (admin)
```

### Contact Endpoints
```
POST   /api/contact                 - Submit contact form
```

## ⚙️ Configuration

### Environment Variables (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/habibi_restaurant
JWT_SECRET=your_jwt_secret_key_here_change_in_production
NODE_ENV=development
```

### CORS Configuration
Enabled for all origins (update in production):
```js
app.use(cors());
```

## 🔐 Authentication

JWT authentication ready to implement:
- Models: User model needed
- Routes: Add auth middleware to protected routes
- Controllers: Implement login/register logic

## 📝 Example API Calls

### Get All Menu Items
```bash
curl http://localhost:5000/api/menu
```

### Create Order
```bash
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customer": {
      "name": "Ahmed Khan",
      "email": "ahmed@example.com",
      "phone": "+923001234567",
      "address": "123 Main St"
    },
    "items": [
      {
        "menuItem": "652a1b2c3d4e5f6g7h8i",
        "quantity": 2,
        "price": 750
      }
    ],
    "totalPrice": 1500,
    "paymentMethod": "cash"
  }'
```

### Submit Review
```bash
curl -X POST http://localhost:5000/api/reviews \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Customer Name",
    "email": "customer@example.com",
    "rating": 5,
    "text": "Amazing food and service!"
  }'
```

## 🗄️ MongoDB Setup

### Local MongoDB
```bash
mongod
```

### MongoDB Atlas (Cloud)
1. Create account: https://www.mongodb.com/cloud/atlas
2. Create cluster
3. Get connection string
4. Update `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/habibi_restaurant
```

## 🧪 Testing

Use **Postman** or **Insomnia** to test endpoints:
1. Import API collection
2. Update base URL to `http://localhost:5000`
3. Test each endpoint

## 🚀 Deployment

### Deploy to Heroku
```bash
# Install Heroku CLI
# Login
heroku login

# Create app
heroku create habibi-restaurant-api

# Set environment variables
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_secret

# Deploy
git push heroku main
```

### Deploy to Railway
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway up
```

## 📊 Error Handling

Centralized error handling:
```js
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    message: err.message,
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});
```

## 🔄 CORS Headers

Configured to accept:
- From any origin (update for production)
- JSON content
- Credentials support

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^7.0.0",
  "cors": "^2.8.5",
  "dotenv": "^16.0.3",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.0",
  "express-validator": "^7.0.0"
}
```

## 🛠️ Development

### Start with Nodemon
```bash
npm dev
```

Auto-restarts on file changes.

### Logger Setup (optional)
```bash
npm install morgan
```

Then add to `server.js`:
```js
const morgan = require('morgan');
app.use(morgan('dev'));
```

## 🐛 Troubleshooting

**MongoDB Connection Error?**
- Ensure MongoDB is running
- Check connection string in .env
- Verify network access on Atlas

**Port already in use?**
- Change PORT in .env
- Or kill process: `lsof -i :5000`

**CORS errors?**
- Check CORS configuration
- Ensure frontend URL in whitelist

## 📄 License

Built for Habibi Restaurant Peshawar

---

**Backend built with ❤️ using Express & MongoDB**
