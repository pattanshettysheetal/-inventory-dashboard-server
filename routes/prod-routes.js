const {
  createInventory,
  deleteInventory,
  updateInventory,
  fetchAllInventories,
  fetchSingleInventory,
} = require('../controllers/prod-controller');
const express = require('express');
const app = express();
const router = express.Router();
app.use(router);
router.post('/', createInventory);
router.delete('/:id', deleteInventory);
router.get('/', fetchAllInventories);
router.put('/:id', updateInventory);
router.get('/:id', fetchSingleInventory);
module.exports = router;
