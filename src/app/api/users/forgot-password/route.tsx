import { NextResponse,NextRequest } from "next/server";
import User from "@/models/userModel";
import nodemailer from 'nodemailer'
import connectDB from "@/dbConfig";
import  jwt  from "jsonwebtoken";

connectDB()
const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1a9ad003d30482",// ❌
    pass: "438501cfb3dafb"//❌
  }
});
export async function POST(request:NextRequest,response:NextResponse) {
  if(request.method === 'post'){
    try {
      const reqBody = await request.json()
      const {email,userId} = reqBody
      const user = await User.findOne({email})
      if(!user){
        return NextResponse.json({message:'user not found',success:false},{status:400})
      }
      const payload = userId
      const token = jwt.sign(payload,process.env.TOKEN_SECRET!,{expiresIn:'1hr'})
      user.forgotPasswordToken = token
      user.forgotPasswordTokenEXpiry =  Date.now() + 3600000 // 1hr
      await user.save();
      const resetUrl = `${process.env.DOMAIN}/reset-password?token=${token}`
      transport.sendMail({
        from:'deapseacart@gmail.com',
        to:email,
        subject:'Reset Password',
        html:`<p>You requested a password reset. Click <a href="${resetUrl}">here</a> to reset your password.</p>`
      })
      
      return NextResponse.json({message:'Reset Link Sent'},{status:200})
      
      
    } catch (error) {
      NextResponse.json({message:'Error in sending reset link'},{status:400})
    }
  }
}

