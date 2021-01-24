//conectar pg
const {Pool} = require('pg')

const pool = new Pool({
	host: 'localhost',
	user: 'postgres',
	password: 'posgres',
	database: 'prueba-api-rest-bryana',
	port: '5432',
})

//métodos
const getProduct = async (req, res) => {
	// res.status(200).send({products: []})
	const response = await pool.query('SELECT * FROM products')
	console.log(response.rows)
	res.status(200).send({products: response.rows})
}

const getProductById = async (req, res) => {
    const id = req.params.productId
    const response = await pool.query('SELECT * FROM products WHERE prod_id = $1', [id])
	//console.log(response.rows)
	res.status(200).send({products: response.rows})
}

const postProduct = async (req, res) => {
	const {name, price, photo, category} = req.body
	const response = await pool.query(
		'INSERT INTO products(prod_name, prod_price, prod_photo, prod_category) VALUES ($1, $2, $3, $4)',
		[name, price, photo, category]
	)
	console.log(response)
    res.status(200).send({message: 'El producto se ha recibido', 
                          body: {
                              Producto: {name, price, photo, category}
                          }  
                        })
}

const putProduct = async (req, res) => {
	const id = req.params.productId
	const {name, price, photo, category} = req.body
	console.log(id, name, price, photo, category)
	res.send('User updated')
}

const deleteProduct = async (req, res) => {
	const id = req.params.productId
	const response = await pool.query('DELETE FROM products WHERE prod_id = $1', [id])
	console.log(response)
	res.status(200).send(`User ${id} deleted successfully!`)
}

module.exports = {
    getProduct,
    getProductById,
	postProduct,
	putProduct,
	deleteProduct
}
