const carRepository = require('../repositories/carRepository');

const getCars = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 5;

    // Fetch cars with pagination
    const { cars, total } = await carRepository.findAllCars(page, limit);

    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      data: cars,
      total,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createCar = async (req, res) => {
  try {
    const car = await carRepository.createCar(req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCar = async (req, res) => {
  try {
    const carsData = req.body;
    await carRepository.bulkUpdateCars(carsData);
    res.status(200).json({ message: 'Cars updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getCars,
  createCar,
  updateCar,
};
