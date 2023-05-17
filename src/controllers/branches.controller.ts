import BranchesSchema from '../models/branches.model';

export async function createBranches (req, res) {
  const branches = await new BranchesSchema(req.body);
  branches
  .save()
  .then((branches) => res.status(201).json({ success: true, message: 'Branches created successfully', data: branches }))
  .catch((err) => res.status(400).json({ success: false, message: 'Error to create branches: ' + err.message }));
}

export async function getAllBranchess(req, res) {
  await BranchesSchema
    .find()
    .then((branchess) =>  {
      if(branchess.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all branchess successfully', data: branchess })
      } else {
        res.status(404).json({ success: false, message: 'No branchess found' });
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No branchess found: ' + err.message }));
}

export async function getBranchesById(req, res) {
  const { id } = req.params;
  await BranchesSchema
    .findById(id)
    .then((branches) => { 
        res.status(200).json({ success: true, message: 'Get branches by id successfully', data: branches })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No branches found:' + err.message }));
}

export async function updateBranchesById(req, res) {
  const { id } = req.params;
  const { name, email, phone, addresses, payment_methods, coordinates, coupons } = req.body;
  await BranchesSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { name, email, phone, addresses, payment_methods, coordinates, coupons }
    })
    .then((branchesUpdated) => {
      if (branchesUpdated) {
        BranchesSchema
          .findById(id)
          .then((branches) => res.status(201).json({ success: true, message: 'branches updated successfully', data: branches }))
          .catch((err) => res.status(404).json({ success: false, message: 'No branches found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No branches found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update branches: ' + err.message }));
}

export async function deleteBranchesById(req, res) {
  const { id } = req.params;
  await BranchesSchema
    .findOneAndDelete({ _id: id })
    .then((branches) => {
      branches ? res.status(201).json({ success: true, message: 'Branches deleted successfully', data: branches }) : res.status(404).json({ success: false, message: 'No branches found'});
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete branches: ' + err.message }));
}
