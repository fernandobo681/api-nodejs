import ConfigurationSchema from '../models/configuration.model';

export async function createConfiguration (req, res) {
  const configuration = await ConfigurationSchema(req.body);
  configuration
  .save()
  .then((configuration) => res.status(201).json({ success: true, message: 'Configuration created successfully', data: configuration }))
  .catch((err) => res.status(400).json({ success: false, message: 'Error to create configuration: ' + err.message }));
}

export async function getAllConfigurations(req, res) {
  await ConfigurationSchema
    .find()
    .then((configurations) =>  {
      if(configurations.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all configurations successfully', data: configurations })
      } else {
        res.status(404).json({ success: false, message: 'No configurations found'});
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No configurations found: ' + err.message }));
}

export async function getConfigurationById(req, res) {
  const { id } = req.params;
  await ConfigurationSchema
    .findById(id)
    .then((configuration) => { 
      res.status(200).json({ success: true, message: 'Get configuration by id successfully', data: configuration })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No configuration found:' + err.message }));
}

export async function updateConfigurationById(req, res) {
  const { id } = req.params;
  const { company_name, rfc, phone, email, schedule } = req.body;
  await ConfigurationSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { company_name, rfc, phone, email, schedule }
    })
    .then((configurationUpdated) => {
      if (configurationUpdated) {
        ConfigurationSchema
          .findById(id)
          .then((configuration) => res.status(201).json({ success: true, message: 'configuration updated successfully', data: configuration }))
          .catch((err) => res.status(404).json({ success: false, message: 'No configuration found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No configuration found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update configuration: ' + err.message }));
}

export async function deleteConfigurationById(req, res) {
  const { id } = req.params;
  await ConfigurationSchema
    .findOneAndDelete({ _id: id })
    .then((configuration) => {
      configuration ? res.status(201).json({ success: true, message: 'Configuration deleted successfully', data: configuration }) : res.status(404).json({ success: false, message: 'No configuration found' });
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete configuration: ' + err.message }));
}
