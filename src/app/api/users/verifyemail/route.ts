import connectDB from '../../../../dbConfig/index'
import User from '@/models/userModel'
import { NextRequest,NextResponse } from "next/server";

connectDB()

export async function POST(request:NextRequest){
  try {
    const reqBody = await request.json()
    const {token} = reqBody
    console.log(token)

    const user = await User.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}})
    console.log('userToken:',token)
    if(!user){
      return  NextResponse.json({error:'Invalid token'},{status:400})
    }

    console.log(user)
    user.isVerified = true // revise for check
    user.verifyToken = undefined
    user.verifyTokenExpiry = undefined

    await user.save()

    return NextResponse.json({message:"Email verify successfully",success:true})

  } catch (error:any) {
    return  NextResponse.json({error:error.message},{status:500})
  }
}