// require('dotenv').config({path:'./env'})

import dotenv from 'dotenv'

import connectDB from "./dbConfig";
dotenv.config({
  path:'./env'
})

connectDB();

















/*
import express from 'express'

const app = express()

;(async()=>{
  try {
    await mongoose.connect(`${procee.env.MONGO_DB_URI}/${DB_NAME}`)
    app.on('error',(error)=>{
      console.log('ERROR:',error)
      throw error
    })

    app.listen(process.env.PORT,()=>{
      console.log(`App is listening on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("Error:",error)
    throw error
  }
})
  */