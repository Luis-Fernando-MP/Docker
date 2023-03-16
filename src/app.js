import app from './Server/server.js'

app.listen(app.get('PORT'), () => {
	console.log(`Server on port http://localhost:${app.get('PORT')}`)
})
