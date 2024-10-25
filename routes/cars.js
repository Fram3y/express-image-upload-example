const express = require('express');
const router = express.Router();

const { 
    readData, 
    readOne,
    createData,
    updateData,
    deleteData 
} = require('../controllers/car.controller');

const imageUpload = require('../configs/image_upload');

router
    .get('/', readData)
    .get('/:id', readOne)
    .post('/',imageUpload.single('image'), createData)
    .put('/:id',imageUpload.single('image'), updateData)
    .delete('/:id', deleteData);

module.exports = router;