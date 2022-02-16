import express from 'express'
import mongoose from 'mongoose'
import mainRouter from './routes/main.routes.js'

const PORT = 3000
const dbConnect = "mongodb+srv://tanyazverevaa:peiki50hAmongo@cluster0.vkwpa.mongodb.net/express?retryWrites=true&w=majority"

const app = express()

app.use(mainRouter)


async function startServer(){
   try{
       await mongoose.connect(dbConnect)

       app.listen(PORT, () =>{
           console.log('server run')
       })
   }
   catch(e){
       console.error('Server error ', e)
   }
}

startServer()