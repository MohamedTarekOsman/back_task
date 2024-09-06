// repositories/carRepository.js
const AppDataSource = require('../data-source');
const Car = require('../entities/Car');

// Get the car repository
const carRepository = AppDataSource.getRepository(Car);

const findAllCars = async (page, limit) => {
  const skip = (page - 1) * limit; // Calculate the number of records to skip

  // Use findAndCount to get both data and total count
  const [cars, total] = await AppDataSource.getRepository(Car).findAndCount({
    skip,
    take: limit,
  });

  return { cars, total };
};

const createCar = async (carData) => {
  const newCar = carRepository.create(carData);
  return await carRepository.save(newCar);
};


const bulkUpdateCars = async (carsData) => {
  const queryRunner = AppDataSource.createQueryRunner();
  try {
    await queryRunner.startTransaction();
    for (const carData of carsData) {
      await queryRunner.manager.update(Car, { id: carData.id }, carData);
    }
    await queryRunner.commitTransaction();
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw error;
  } finally {
    await queryRunner.release();
  }
};

module.exports = {
  findAllCars,
  createCar,
  bulkUpdateCars
};

