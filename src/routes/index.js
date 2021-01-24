const express = require('express')
const router = express()

const {getProduct, getProductById, postProduct, putProduct, deleteProduct} = require('../controllers/index.controller')

router.get('/api/product', getProduct)

router.get('/api/product/:productId', getProductById)

router.post('/api/product', postProduct)

router.put('/api/product/:productId', putProduct)

router.delete('/api/product/:productId', deleteProduct)

module.exports = router