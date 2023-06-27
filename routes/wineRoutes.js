const express = require('express');
const router = express.Router();
const wineController = require('../controllers/wineController');

// Index route
router.get('/', wineController.getWines);

// New route
router.get('/new', wineController.getNewWine);

// Create route
router.post('/', wineController.createWine);

// Show route
router.get('/:id', wineController.getWine);

// Edit route
router.get('/:id/edit', wineController.getEditWine);

// Update route
router.put('/:id', wineController.updateWine);

// Delete route
router.delete('/:id', wineController.deleteWine);

module.exports = router;
