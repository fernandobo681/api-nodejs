require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3001;
const customerRoutes = require('./src/routes/customer.route');
const bannernRoutes = require('./src/routes/banner.route');
const rewardRoutes = require('./src/routes/reward.route');
const configurationRoutes = require('./src/routes/configuration.route');
const productRoutes = require('./src/routes/product.route');
const serviceRoutes = require('./src/routes/service.route');
const couponRoutes = require('./src/routes/coupon.route');
const couponRedeemedRoutes = require('./src/routes/couponRedeemed.route');
const connectToDB = require('./src/config/db');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); 

// MongoDB connection and configuration
connectToDB();



// import routes
app.use('/api/customers', customerRoutes);
app.use('/api/banners', bannernRoutes);
app.use('/api/rewards', rewardRoutes);
app.use('/api/configurations', configurationRoutes);
app.use('/api/products', productRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/couponsRedeemed', couponRedeemedRoutes);


// import views
app.set("view engine", "pug");
app.set('views', './src/views');
app.route("/").get((req, res) => {
  res.render("index");
});

app.listen(port, () => console.log(`Server started on port ${port}`));