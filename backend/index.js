import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'

import { PORT, mongoDBURL } from './config'

const app = express()

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
