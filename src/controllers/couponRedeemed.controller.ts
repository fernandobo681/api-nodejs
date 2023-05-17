import CouponRedeemedSchema from '../models/couponRedeemed.model';

export async function createCouponRedeemed (req, res) {
  const couponRedeemed = await CouponRedeemedSchema(req.body);
  couponRedeemed
  .save()
  .then((couponRedeemed) => res.status(201).json({ success: true, message: 'Coupon created successfully', data: couponRedeemed }))
  .catch((err) => res.status(400).json({ success: false, message: 'Error to create couponRedeemed: ' + err.message }));
}

export async function getAllCouponsRedeemed(req, res) {
  await CouponRedeemedSchema
    .find()
    .then((couponRedeemeds) =>  {
      if(couponRedeemeds.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all couponsRedeemed successfully', data: couponRedeemeds })
      } else {
        res.status(404).json({ success: false, message: 'No couponsRedeemed found'});
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No couponsRedeemed found: ' + err.message }));
}

export async function getCouponRedeemedById(req, res) {
  const { id } = req.params;
  await CouponRedeemedSchema
    .findById(id)
    .then((couponRedeemed) => { 
        res.status(200).json({ success: true, message: 'Get couponRedeemed by id successfully', data: couponRedeemed })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No couponRedeemed found:' + err.message }));
}

export async function updateCouponRedeemedById(req, res) {
  const { id } = req.params;
  const { coupon_code, redemtion_date, discount_total, customer } = req.body;
  await CouponRedeemedSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { coupon_code, redemtion_date, discount_total, customer }
    })
    .then((couponRedeemedUpdated) => {
      if (couponRedeemedUpdated) {
        CouponRedeemedSchema
          .findById(id)
          .then((couponRedeemed) => res.status(201).json({ success: true, message: 'couponRedeemed updated successfully', data: couponRedeemed }))
          .catch((err) => res.status(404).json({ success: false, message: 'No couponRedeemed found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No couponRedeemed found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update couponRedeemed: ' + err.message }));
}

export async function deleteCouponRedeemedById(req, res) {
  const { id } = req.params;
  await CouponRedeemedSchema
    .findOneAndDelete({ _id: id })
    .then((couponRedeemed) => {
      couponRedeemed ? res.status(201).json({ success: true, message: 'Coupon deleted successfully', data: couponRedeemed }) : res.status(404).json({ success: false, message: 'No couponRedeemed found' });
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete couponRedeemed: ' + err.message }));
}
