// routes/CarRoutes.js
const express = require('express');
const carController = require('../controllers/carControllers');

const router = express.Router();

router.get('/', carController.getCars);
router.post('/', carController.createCar);
router.put('/', carController.updateCar);

module.exports = router;
