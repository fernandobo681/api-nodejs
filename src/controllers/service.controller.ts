import ServiceSchema from '../models/service.model';

export async function createService (req, res) {
  const service = await ServiceSchema(req.body);
  service
  .save()
  .then((service) => res.status(201).json({ success: true, message: 'Service created successfully', data: service }))
  .catch((err) => res.status(400).json({ success: false, message: 'Error to create service: ' + err.message }));
}

export async function getAllServices(req, res) {
  await ServiceSchema
    .find()
    .then((services) =>  {
      if(services.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all services successfully', data: services })
      } else {
        res.status(404).json({ success: false, message: 'No services found'});
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No services found: ' + err.message }));
}


export async function getServiceById(req, res) {
  const { id } = req.params;
  await ServiceSchema
    .findById(id)
    .then((service) => { 
        res.status(200).json({ success: true, message: 'Get service by id successfully', data: service })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No service found:' + err.message }));
}

export async function updateServiceById(req, res) {
  const { id } = req.params;
  const { name, description, cost, discount_rate, duration, img } = req.body;
  await ServiceSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { name, description, cost, discount_rate, duration, img }
    })
    .then((serviceUpdated) => {
      if (serviceUpdated) {
        ServiceSchema
          .findById(id)
          .then((service) => res.status(201).json({ success: true, message: 'service updated successfully', data: service }))
          .catch((err) => res.status(404).json({ success: false, message: 'No service found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No service found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update service: ' + err.message }));
}

export async function deleteServiceById(req, res) {
  const { id } = req.params;
  await ServiceSchema
    .findOneAndDelete({ _id: id })
    .then((service) => {
      service ? res.status(201).json({ success: true, message: 'Service deleted successfully', data: service }) : res.status(404).json({ success: false, message: 'No service found' });
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete service: ' + err.message }));
}
