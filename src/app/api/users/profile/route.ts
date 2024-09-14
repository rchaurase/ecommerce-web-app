import connectDB from '../../../../dbConfig/index'
import User from '@/models/userModel'
import { NextRequest,NextResponse } from "next/server";
import { getDataFromToken } from '@/helpers/getDataFromToken';

connectDB()

export async function POST(request:NextRequest){
  // extract data from token
  const userId = await getDataFromToken(request)
  const user = User.findOne({_id:userId}).select("-password")

  // check if there is no user
  if(!user) return NextResponse.json({message:"sorry user no found",success:false},{status:400})
  
  return NextResponse.json({
    message:"User found",
    data:user
  })
  
}