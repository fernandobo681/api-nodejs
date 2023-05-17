import CollaboratorSchema from '../models/collaborator.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';


export async function loginCollaborator(req, res) {
  const body = req.body;
  const collaborator = await CollaboratorSchema.findOne({ email: body.email });
  if (collaborator) {
    const validPassword = await bcrypt.compare(body.password, collaborator.password);
    if (validPassword) {
      const token = jwt.sign({ email: collaborator.email }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN });
      res.status(201).json({ success: true, message: 'Collaborator loged successfully', token: 'Bearer ' + token, data: collaborator });
    } else {
      res.status(400).json({ success: false, message: "Invalid credentials" });
    }
  } else {
    res.status(401).json({ success: false, message: "Collaborator doesn't exist" });
  }
}


export async function createCollaborator(req, res) {
  const body = req.body;
  if (!(body.email && body.password)) {
    return res.status(400).send({ success: false, message: "Data not formatted properly" });
  }
  const collaborator = new CollaboratorSchema(body);
  const salt = await bcrypt.genSalt(10);
  collaborator.password = await bcrypt.hash(collaborator.password, salt);
  collaborator
    .save()
    .then((collaborator) => res.status(201).json({ success: true, message: 'Collaborator created successfully', data: collaborator }))
    .catch((err) => res.status(400).json({ success: false, message: 'Error to create collaborators: ' + err.message }));
}

export async function getAllCollaborators(req, res) {
  await CollaboratorSchema
    .find()
    .then((collaborator) =>  {

      if(collaborator.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all collaborators successfully', data: collaborator })
      } else {
        res.status(404).json({ success: false, message: 'No collaborators found'});
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No collaborators found: ' + err.message }));
}

export async function getCollaboratorById(req, res) {
  const { id } = req.params;
  await CollaboratorSchema
    .findById(id)
    .then((collaborator) => { 
        res.status(200).json({ success: true, message: 'Get collaborator by id successfully', data: collaborator })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No collaborator found:' + err.message }));
}

export async function updateCollaboratorById(req, res) {
  const { id } = req.params;
  const { name, email, phone, branch, addresses, payment_methods, coordinates, unit_id, rol } = req.body;
  await CollaboratorSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { name, email, phone, branch, addresses, payment_methods, coordinates, unit_id, rol }
    })
    .then((collaboratorUpdated) => {
      if (collaboratorUpdated) {
        CollaboratorSchema
          .findById(id)
          .then((collaborator) => res.status(201).json({ success: true, message: 'Collaborator updated successfully', data: collaborator }))
          .catch((err) => res.status(404).json({ success: false, message: 'No collaborator found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No collaborator found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update collaborators: ' + err.message }));
}

export async function deleteCollaboratorById(req, res) {
  const { id } = req.params;
  await CollaboratorSchema
    .findOneAndDelete({ _id: id })
    .then((collaborator) => {
      collaborator ? res.status(201).json({ success: true, message: 'Collaborator deleted successfully', data: collaborator }) : res.status(404).json({ success: false, message: 'No collaborator found'});
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete collaborators: ' + err.message }));
}