const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true,
  },
  subcategories: {
    type: [String],
    default: [],
  },
});

categorySchema.statics.getAllCategories = async function () {
  const categories = await this.find({});
  return categories;
};

categorySchema.statics.newCategory = async function (category) {
  const newCategory = await this.create({ category });
  return newCategory;
};

categorySchema.statics.deleteCategory = async function (category) {
  const deletedCategory = await this.findOneAndDelete({ category });
  return deletedCategory;
};

categorySchema.statics.updateCategory = async function (category, subcategory) {
  const updatedCategory = await this.findOneAndUpdate(
    { category },
    { $push: { subcategories: subcategory } },
    { new: true }
  );
  return updatedCategory;
};

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
