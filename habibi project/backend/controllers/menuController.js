const MenuItem = require("../models/MenuItem");

// Get all menu items
exports.getAllMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find({ isAvailable: true });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get menu items by category
exports.getMenuByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const items = await MenuItem.find({
      category: category,
      isAvailable: true,
    });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get popular items
exports.getPopularItems = async (req, res) => {
  try {
    const items = await MenuItem.find({
      isPopular: true,
      isAvailable: true,
    }).limit(6);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new menu item (admin)
exports.addMenuItem = async (req, res) => {
  const menuItem = new MenuItem(req.body);
  try {
    const savedItem = await menuItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update menu item (admin)
exports.updateMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete menu item (admin)
exports.deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Menu item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
