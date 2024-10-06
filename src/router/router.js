import { Router } from 'express'
// import client from '../connection.js'

const router = Router()

router.get('/', (req, res) => res.json('welcome'))
router.get('/ping', (req, res) => {
	res.json('pong pang pung ping')
})
// router.get('/crear', async (req, res) => {
// 	const rests = await client.query('CREATE TABLE [IF NOT EXISTS] user (id INT, name VARCHAR);')
// 	res.json(rests)
// })

export default router
