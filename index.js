require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3001;
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
const connectToDB = require('./src/config/db');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); 

// MongoDB connection and configuration
connectToDB();



// import routes
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

// import views
app.set("view engine", "pug");
app.set('views', './src/views');
app.route("/").get((req, res) => {
  res.render("index");
});

app.listen(port, () => console.log(`Server started on port ${port}`));