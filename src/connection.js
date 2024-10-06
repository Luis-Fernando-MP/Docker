import { createPool } from 'mysql2/promise'

const client = createPool({
	HOST: process.env.DB_HOST,
	USER: process.env.DB_USER,
	PASSWORD: process.env.DB_PASSWORD,
	DB: process.env.DB_NAME,
	port: process.env.DB_PORT,
	dialect: 'mysql'
})

export default client
