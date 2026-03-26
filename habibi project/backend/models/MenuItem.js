const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide item name"],
    },
    category: {
      type: String,
      enum: ["bbq", "arabic", "salads", "platters"],
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: [true, "Please provide price"],
    },
    image: String,
    isPopular: {
      type: Boolean,
      default: false,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MenuItem", menuItemSchema);
