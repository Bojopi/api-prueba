const express = require('express')
const router = express()

const {getProduct, getProductById, postProduct} = require('../controllers/index.controller')

router.get('/api/product', getProduct)

router.get('/api/product/:productId', (req, res) => {

})

router.post('/api/product', postProduct)

router.put('/api/product/:productId', getProductById)

router.delete('/api/product/:productId', (req, res) => {

})

module.exports = router