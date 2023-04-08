
import express from 'express'
import dotenv from 'dotenv'

import Connection from './database/db.js'




const app = express()

dotenv.config()

const PORT = 8000

const dblink = process.env.DB_LINK

Connection(dblink)

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`) )


