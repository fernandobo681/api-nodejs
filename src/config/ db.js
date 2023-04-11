//Database connection and configuration
const env = require('dotenv').config();
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gyzwib4.mongodb.net/${process.env.DB_NAME}`;
console.log(uri);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', function() {
  console.log('Conexión exitosa a la base de datos');
});
