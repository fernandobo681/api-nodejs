const express = require('express');
const router = express.Router();
const branchesController = require('../controllers/branches.controller');
const itsAuth = require('../middlewares/itsAuth.middlewares');

router.post("/create", branchesController.createBranches);
router.get("/getAll", branchesController.getAllBranchess);
router.get("/getById/:id", branchesController.getBranchesById);
router.put("/updateById/:id", branchesController.updateBranchesById);
router.delete("/deleteById/:id", branchesController.deleteBranchesById);

module.exports = router;



