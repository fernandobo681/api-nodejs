const env = require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
const customerRoutes = require('./src/routes/customer.route');


// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 
app.use('/api', customerRoutes);


// Database connection and configuration
mongoose.connect(process.env.MONGODB_URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', function() {
  console.log('Conexión exitosa a la base de datos');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});