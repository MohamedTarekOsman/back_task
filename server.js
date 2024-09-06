// server.js
const express = require('express');
const AppDataSource = require('./data-source');
const carRoutes = require('./routes/CarRoutes');

const app = express();
const cors = require('cors')
app.use(express.json());
app.options('*', cors())
app.use(cors())

// Initialize the data source
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');

    // Set up routes
    app.use('/cars', carRoutes);

    // Start the server
    port=5000
    app.listen(port, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch((error) => {
    console.error('Error during Data Source initialization', error);
  });
