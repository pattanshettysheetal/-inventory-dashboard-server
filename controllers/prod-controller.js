const Product = require('../modal/prod-modal');
const createInventory = (req, res) => {
  console.log('create inventory');
  const body = req.body;
  console.log(body);
  new Product(body)
    .save()
    .then((response) => {
      res.status(201).send({ message: 'Inventory item created', data: response });
    })
    .catch((err) => {
      res.status(404).send({ message: 'Inventory is not created', error: err });
    });
};
const deleteInventory = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  Product.findByIdAndDelete({ _id: id }, data, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Inventory is not deleted', error: err });
    } else {
      res.status(200).send({ message: 'Inventory item deleted', data: result });
    }
  });
};
const updateInventory = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Product.findByIdAndUpdate({ _id: id }, data, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Inventory is not updated', error: err });
    } else {
      res.status(200).send({ message: 'Inventory item updated', data: result });
    }
  });
};
const fetchAllInventories = (req, res) => {
  Product.find((err, result) => {
    if (err) res.status(404).send({ message: 'All Inventories are not fetched ', error: err });
    else res.status(200).send({ message: 'All Inventories are  fetched', data: result });
  });
};
const fetchSingleInventory = (req, res) => {
  const data = req.body;
  const { id } = req.params.id;
  Product.findOne({ _id: id }, data, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Inventory is not fetched by id', error: err });
    } else {
      res.status(200).send({ message: 'Inventory is fetched by id', data: result });
    }
  });
};

module.exports = {
  createInventory,
  deleteInventory,
  updateInventory,
  fetchAllInventories,
  fetchSingleInventory,
};
