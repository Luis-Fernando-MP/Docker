import { Router } from 'express'
import client from '../connection.js'

const router = Router()

router.get('/', (req, res) => res.json('welcome'))

router.get('/ping', (req, res) => {
	res.json('pong')
})

router.get('/crear', async (req, res) => {
	const rests = await client.query('SELECT "Hola mundo";')
	res.json(rests)
})

export default router
