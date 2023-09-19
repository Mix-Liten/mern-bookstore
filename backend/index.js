import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import cors from 'cors'

import booksRoute from './routes/bookRoute'
import { PORT, mongoDBURL } from './config'
import { errorHandling } from './middlewares/errorHandling'

const app = express()

app.use(express.json())

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors())
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: ['http://localhost:3000'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type'],
//     credentials: true,
//   }),
// )

app.get('/', (req, res) => {
  return res.status(234).send('Welcome To BookStore Backend API')
})

app.use('/books', booksRoute)

app.use(errorHandling)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database')
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`)
    })
  })
  .catch(error => {
    console.log(error)
  })
