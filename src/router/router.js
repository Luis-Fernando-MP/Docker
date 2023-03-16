import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.json('welcome'))
router.get('/ping', (req, res) => {
	res.json('pong')
})

export default router
