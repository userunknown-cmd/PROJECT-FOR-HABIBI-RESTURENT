const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

// Public routes
router.get("/", menuController.getAllMenuItems);
router.get("/popular", menuController.getPopularItems);
router.get("/category/:category", menuController.getMenuByCategory);

// Admin routes (add authentication middleware in production)
router.post("/", menuController.addMenuItem);
router.put("/:id", menuController.updateMenuItem);
router.delete("/:id", menuController.deleteMenuItem);

module.exports = router;
