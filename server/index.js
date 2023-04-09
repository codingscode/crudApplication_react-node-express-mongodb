
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'


import Connection from './database/db.js'
import routes from './routes/route.js'




const app = express()

dotenv.config()

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/', routes)

const PORT = 8000

const dblink = process.env.DB_LINK

Connection(dblink)

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`) )


