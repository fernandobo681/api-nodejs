require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3001;
const customerRoutes = require('./src/routes/customer.route');
const connectToDB = require('./src/config/db');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); 

// MongoDB connection and configuration
connectToDB();

// import routes
app.use('/api', customerRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));