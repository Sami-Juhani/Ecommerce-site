const Category = require("../models/categoryModel");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.getAllCategories();

    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const newCategory = async (req, res) => {
  try {
    const { category } = req.body;

    const newCategory = await Category.newCategory(category);

    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { category } = req.body;

    const deletedCategory = await Category.deleteCategory(category);

    if (!deletedCategory)
      return res.status(404).json({ message: "Category not found" });

    return res.status(200).json(deletedCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { category } = req.body;
    const { subcategories } = req.body;

    const updatedCategory = await Category.updateCategory(
      category,
      subcategories
    );

    if (!updatedCategory)
      return res.status(404).json({ message: "Category not found" });

    return res.status(200).json(updatedCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCategories,
  newCategory,
  deleteCategory,
  updateCategory,
};
