const CouponSchema = require('../models/coupon.model');

async function createCoupon (req, res) {
  const coupon = await CouponSchema(req.body);
  coupon
  .save()
  .then((coupon) => res.status(201).json({ success: true, message: 'Coupon created successfully', data: coupon }))
  .catch((err) => res.status(400).json({ success: false, message: 'Error to create coupon: ' + err.message }));
}

async function getAllCoupons(req, res) {
  await CouponSchema
    .find()
    .then((coupons) =>  {
      if(coupons.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all coupons successfully', data: coupons })
      } else {
        res.status(404).json({ success: false, message: 'No coupons found: ' + err.message });
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No coupons found: ' + err.message }));
}


async function getCouponById(req, res) {
  const { id } = req.params;
  await CouponSchema
    .findById(id)
    .then((coupon) => { 
        res.status(200).json({ success: true, message: 'Get coupon by id successfully', data: coupon })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No coupon found:' + err.message }));
}

async function updateCouponById(req, res) {
  const { id } = req.params;
  const { coupon_code, discount_rate, discount_type, expiration_date } = req.body;
  await CouponSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { coupon_code, discount_rate, discount_type, expiration_date }
    })
    .then((couponUpdated) => {
      if (couponUpdated) {
        CouponSchema
          .findById(id)
          .then((coupon) => res.status(201).json({ success: true, message: 'coupon updated successfully', data: coupon }))
          .catch((err) => res.status(404).json({ success: false, message: 'No coupon found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No coupon found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update coupon: ' + err.message }));
}

async function deleteCouponById(req, res) {
  const { id } = req.params;
  await CouponSchema
    .findOneAndDelete({ _id: id })
    .then((coupon) => {
      coupon ? res.status(201).json({ success: true, message: 'Coupon deleted successfully', data: coupon }) : res.status(404).json({ success: false, message: 'No coupon found: ' + err.message });
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete coupon: ' + err.message }));
}

module.exports = {
    getAllCoupons,
    createCoupon,
    getCouponById,
    updateCouponById,
    deleteCouponById
};