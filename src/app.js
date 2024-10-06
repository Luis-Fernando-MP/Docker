// // import client from './connection.js'
import app from './Server/server.js'

app.listen(app.get('PORT'), async () => {
	try {
		// const [result] = await client.query('SELECT * FROM user;')
		// console.log(result)
		// console.log(client)
		console.log('pugiii')
		console.log(`Server on port http://localhost:${app.get('PORT')}`)
	} catch (error) {
		console.log('ERR: ', error)
	}
})
