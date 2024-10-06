import router from '../router/router.js'
import path from 'path'
import express, { json } from 'express'
import { cwd } from 'process'
import { config } from 'dotenv'

config({ path: path.resolve(cwd(), '/.env') })

const PORT = process.env.NODE_DOCKER_PORT || 8080
const app = express()
app.set('PORT', PORT)

app.use(json())

// routers
app.use(router)

export default app
