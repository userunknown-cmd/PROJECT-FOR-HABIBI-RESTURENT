const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Public routes
router.post("/", orderController.createOrder);
router.get("/:id", orderController.getOrderById);

// Admin routes (add authentication middleware in production)
router.get("/", orderController.getAllOrders);
router.patch("/:id/status", orderController.updateOrderStatus);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
