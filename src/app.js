'use strict'

// "start": "react-scripts start",
// "start": "nodemon app.js",

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3030

//middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//routes
app.use(require('./routes/index'))

// app.get('/api/product', (req, res) => {
//     res.send(200, {products: []})
// })

// app.get('/api/product/:productId', (req, res) => {

// })

// app.post('/api/product', (req, res) => {
//     console.log(req.body)
//     res.status(200).send({message: 'El producto se ha recibido'})
// })

// app.put('/api/product/:productId', (req, res) => {

// })

// app.delete('/api/product/:productId', (req, res) => {

// })

app.listen(3030, () => {
    console.log(`API REST corriendo en http://localhost:${port}`)
})