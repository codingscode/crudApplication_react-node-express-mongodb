
import express from 'express'


const router = express.Router()


router.post('/add', () => {
   console.log('Hello from add')
})

export default router

