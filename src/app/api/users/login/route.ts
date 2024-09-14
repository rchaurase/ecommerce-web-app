import connectDB from '../../../../dbConfig/index'
import User from '@/models/userModel'
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connectDB()

export async function POST(request:NextRequest){
  try {
    const reqBody = await request.json()
    const {email,password} = reqBody
    // validation
    console.log(reqBody);
    const user  = await User.findOne({email})
    if(!user){
      return NextResponse.json({error:"Sorry user is not register, please register"},{status:400})
    }    
    // send verification email
    console.log("user exist",user)
    const validPass = await bcryptjs.compare(password,user.password)

    if(!validPass){
      return NextResponse.json({message:"Please check your credentials"},{status:400})
    }
    const tokenData = {
      id:user._id,
      username:user.username,
      email:user.email
    }

    const token = jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:'1d'})

    const response = NextResponse.json({
      message:'LoggedIn success',
      success:true
    })
    response.cookies.set("token",token,{
      httpOnly:true
    })
    return response

  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:500})
  }
}