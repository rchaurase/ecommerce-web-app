import connectDB from "@/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs'

connectDB();
async function handler(request:NextRequest) {
  try {
    const reqBody = await request.json()
    const {token,password} = reqBody
    const user = await User.findOne({
      forgotPasswordToken:token,
      forgotPasswordTokenExpiry:{$gt:Date.now()}
    })
    if(!user){
      return NextResponse.json({message:'Invalid or expired token'},{status:400})
    }
    user.password = await bcryptjs.hash(password,10)
    user.forgotPasswordToken = undefined
    user.forgotPasswordTokenExpiry=undefined

    await user.save()

    return NextResponse.json({message:'password is reset successfully'},{status:200})

  } catch (error) {
    throw error
    return NextResponse.json({message:'sorry error in password reset'},{status:400})

  }
}
