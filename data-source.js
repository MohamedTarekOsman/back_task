const { DataSource } = require('typeorm');
const Car = require('./entities/Car');

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '01148988342mohamed',
  database: 'car_task',
  synchronize: true,
  logging: false,
  entities: [Car],
});

module.exports = AppDataSource;
