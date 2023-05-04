const express = require('express');
const router = express.Router();
const collaboratorController = require('../controllers/collaborator.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", collaboratorController.createCollaborator);
// Example of route protected by token
// router.get("/getAll", itsAuth , collaboratorController.getAllCollaborators);
router.get("/getAll", collaboratorController.getAllCollaborators);
router.get("/getById/:id", collaboratorController.getCollaboratorById);
router.put("/updateById/:id", collaboratorController.updateCollaboratorById);
router.delete("/deleteById/:id", collaboratorController.deleteCollaboratorById);
router.post("/login", collaboratorController.loginCollaborator);

module.exports = router;



