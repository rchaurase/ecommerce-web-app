import connectDB from '../../../../dbConfig/index'
import User from '@/models/userModel'
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import { sendEmail } from "@/helpers/mailer";

connectDB()

export async function POST(request:NextRequest){
  try {
    const reqBody = await request.json()
    console.log(reqBody)
    const {username,email,password} = reqBody
    // validation
    console.log(reqBody);
    const user  = await User.findOne({email})
    console.log('user:',user)
    if(user){
      return NextResponse.json({error:"User already exists"},{status:400})
    }
    
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password,salt)

    const newUser = new User({
      username,
      email,
      password:hashedPassword
    })
    const savedUser = await newUser.save()

    console.log(savedUser)

    // send verification email
    
    await sendEmail({email,emailType:"VERIFY",userId:savedUser._id})
    return NextResponse.json({
      message:'user register successfully',
      success:true,
      savedUser
    })
    
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:500})
  }
}