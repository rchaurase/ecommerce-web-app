'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Button } from '../components/ui/button'

export default function ProfilePage(){
  const router = useRouter()
  const [data,setData] = useState<any>('')
  const getUserDetails = async()=>{
    const res = await axios.post('/api/users/profile')
    const userDetails = await res.data.data
    console.log(res.data.data)
    setData(userDetails)
  }

  useEffect(()=>{
      getUserDetails()
  },[])


  const logout = async()=>{
  try {
    await axios.get('/api/users/logout')
    toast.success('logout successfully')
    router.push('login')
  } catch (error:any) {
    console.log(error.message)
    toast.error(error.message)
  }
  }

  return (
    <div>
      <div className="container mx-auto p-4">
      <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Account</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <label htmlFor="username" className="w-1/3 font-medium text-gray-700">Username:</label>
              <span id="username" className="text-gray-900">{data.username}</span>
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="email" className="w-1/3 font-medium text-gray-700">Email:</label>
              <span id="email" className="text-gray-900">{data.email}</span>
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="joined" className="w-1/3 font-medium text-gray-700">Joined:</label>
              <span id="joined" className="text-gray-900">January 1, 2020</span>
            </div>
            <button
              onClick={logout}
              className="w-auto bg-[#048567] text-white px-4 py-2 rounded-lg shadow-sm hover:bg-[#49f8cf] focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:text-black duration-150"
            >
                Logout
            </button>

          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}