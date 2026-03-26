const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// Public routes
router.post("/", reviewController.createReview);
router.get("/", reviewController.getApprovedReviews);

// Admin routes (add authentication middleware in production)
router.get("/admin/all", reviewController.getAllReviews);
router.patch("/:id/approve", reviewController.approveReview);
router.delete("/:id", reviewController.deleteReview);

module.exports = router;
