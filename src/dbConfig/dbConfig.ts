// import mongoose from 'mongoose'

// export async function connect(){
//   try {
//     mongoose.connect(process.env.MONGO_URI!)
//     const connection = mongoose.connection

//     connection.on('connected',()=>{
//       console.log('Mongodb connected')
//     })
//     connection.on('error',(err)=>{
//       console.log('Mongodb connection error, please make sure db is up and running' + err);
//       process.exit()
//     })
//   } catch (error) {
    
//   }
// }