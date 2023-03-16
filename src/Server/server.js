import router from '../router/router.js'
import path from 'path'
import express, { json } from 'express'
import { cwd } from 'process'
import { config } from 'dotenv'

const app = express()
config({ path: path.resolve(cwd(), '/.env') })
app.set('PORT', process.env.PORT || 3000)

app.use(json())

//routers
app.use(router)

export default app
