const BannerSchema = require('../models/banner.model');

async function createBanner (req, res) {
  const banner = await BannerSchema(req.body);
  banner
  .save()
  .then((banner) => res.status(201).json({ success: true, message: 'banner created successfully', data: banner }))
  .catch((err) => res.status(400).json({ success: false, message: 'Error to create banners: ' + err.message }));
}

async function getAllBanners(req, res) {
  await BannerSchema
    .find()
    .then((configuration) =>  {
      if(configuration.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all configurations successfully', data: configuration })
      } else {
        res.status(404).json({ success: false, message: 'No configurations found: ' + err.message });
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No configurations found: ' + err.message }));
}


async function getBannerById(req, res) {
  const { id } = req.params;
  await BannerSchema
    .findById(id)
    .then((banner) => { 
        res.status(200).json({ success: true, message: 'Get banner by id successfully', data: banner })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No banner found:' + err.message }));
}

async function updatebannerById(req, res) {
  const { id } = req.params;
  const { name, description, start_date, end_date, img_url, offer_reference } = req.body;
  await BannerSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { name, description, start_date, end_date, img_url, offer_reference }
    })
    .then((bannerUpdated) => {
      if (bannerUpdated) {
        BannerSchema
          .findById(id)
          .then((banner) => res.status(201).json({ success: true, message: 'banner updated successfully', data: banner }))
          .catch((err) => res.status(404).json({ success: false, message: 'No banner found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No banner found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update banners: ' + err.message }));
}

async function deletebannerById(req, res) {
  const { id } = req.params;
  await BannerSchema
    .findOneAndDelete({ _id: id })
    .then((banner) => {
      banner ? res.status(201).json({ success: true, message: 'banner deleted successfully', data: banner }) : res.status(404).json({ success: false, message: 'No banner found: ' + err.message });
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete banners: ' + err.message }));
}

module.exports = {
    getAllBanners,
    createBanner,
    getBannerById,
    updatebannerById,
    deletebannerById
};