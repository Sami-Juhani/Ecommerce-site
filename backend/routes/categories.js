
const router = require('express').Router();
const { getAllCategories, newCategory, deleteCategory, updateCategory } = require('../controllers/categoryController');

router.post('/', newCategory);

router.get('/', getAllCategories);

router.delete('/', deleteCategory);

router.put('/', updateCategory);

module.exports = router;