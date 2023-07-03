require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3001;
const connectToDB = require('./src/config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


// Import Routes
const customerRoute = require('./src/routes/customer.route');
const bannernRoute = require('./src/routes/banner.route');
const rewardRoute = require('./src/routes/reward.route');
const configurationRoute = require('./src/routes/configuration.route');
const productRoute = require('./src/routes/product.route');
const serviceRoute = require('./src/routes/service.route');
const couponRoute = require('./src/routes/coupon.route');
const couponRedeemedRoute = require('./src/routes/couponRedeemed.route');
const saleRoute = require('./src/routes/sale.route');
const eventTrackerRoute = require('./src/routes/eventTracker.route');
const paymentLogStripeRoute = require('./src/routes/paymentLogStripe.route');
const scheduleAppointmentRoute = require('./src/routes/scheduleAppointment.route');
const unitRoute = require('./src/routes/unit.route');
const branchesRoute = require('./src/routes/branches.route');
const collaboratorRoute = require('./src/routes/collaborator.route');
const appointmentsRoute = require('./src/routes/appointment.route');


// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); 

// MongoDB connection and configuration
connectToDB();

// Configuración de Swagger
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Mi API',
      version: '1.0.0',
      description: 'Documentación de mi API',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['./routes/*.js'], // Ruta a tus archivos de rutas
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// use routes
app.use('/api/customers', customerRoute);
app.use('/api/banners', bannernRoute);
app.use('/api/rewards', rewardRoute);
app.use('/api/configurations', configurationRoute);
app.use('/api/products', productRoute);
app.use('/api/services', serviceRoute);
app.use('/api/coupons', couponRoute);
app.use('/api/couponsRedeemed', couponRedeemedRoute);
app.use('/api/sales', saleRoute);
app.use('/api/eventTrackers', eventTrackerRoute);
app.use('/api/paymentsLogStripe', paymentLogStripeRoute);
app.use('/api/scheduleAppointments', scheduleAppointmentRoute);
app.use('/api/branches', branchesRoute);
app.use('/api/units', unitRoute);
app.use('/api/collaborators', collaboratorRoute);
app.use('/api/appointments', appointmentsRoute);

// use views
app.set("view engine", "pug");
app.set('views', './src/views');
app.route("/").get((req, res) => {
  res.render("index");
});



app.listen(port, () => console.log(`Server started on port ${port}`));