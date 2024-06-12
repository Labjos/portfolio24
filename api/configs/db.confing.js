const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(MONGODB_URI)
// Borrar MONGODB... una vez comprobado la conexion
  .then(() => console.info(`Successfully connected to the databe: ${MONGODB_URI}`))
  .catch((error) => console.error(`An error ocurred trying to connect to the data base: ${MONGODB_URI}`, error))