import UnitSchema from '../models/unit.model';

export async function createUnit (req, res) {
  const unit = await new UnitSchema(req.body);
  unit
  .save()
  .then((unit) => res.status(201).json({ success: true, message: 'Unit created successfully', data: unit }))
  .catch((err) => res.status(400).json({ success: false, message: 'Error to create unit: ' + err.message }));
}

export async function getAllUnits(req, res) {
  await UnitSchema
    .find()
    .then((units) =>  {
      if(units.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all units successfully', data: units })
      } else {
        res.status(404).json({ success: false, message: 'No units found' });
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No units found: ' + err.message }));
}


export async function getUnitById(req, res) {
  const { id } = req.params;
  await UnitSchema
    .findById(id)
    .then((unit) => { 
        res.status(200).json({ success: true, message: 'Get unit by id successfully', data: unit })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No unit found:' + err.message }));
}

export async function updateUnitById(req, res) {
  const { id } = req.params;
  const { model, brand, year, fuel_type, estimated_price, tuition, branch_id, colaborators, expenses } = req.body;
  await UnitSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { model, brand, year, fuel_type, estimated_price, tuition, branch_id, colaborators, expenses  }
    })
    .then((unitUpdated) => {
      if (unitUpdated) {
        UnitSchema
          .findById(id)
          .then((unit) => res.status(201).json({ success: true, message: 'unit updated successfully', data: unit }))
          .catch((err) => res.status(404).json({ success: false, message: 'No unit found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No unit found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update unit: ' + err.message }));
}

export async function deleteUnitById(req, res) {
  const { id } = req.params;
  await UnitSchema
    .findOneAndDelete({ _id: id })
    .then((unit) => {
      unit ? res.status(201).json({ success: true, message: 'Unit deleted successfully', data: unit }) : res.status(404).json({ success: false, message: 'No unit found' });
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete unit: ' + err.message }));
}
