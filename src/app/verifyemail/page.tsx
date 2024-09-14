'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
// import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function verifyEmailPage() {
  const [token,setToken] = useState('')
  const [verified,setVerified] = useState(false)
  const [error,setError] = useState(false)
  // const router = useRouter()

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail",{token})
      setVerified(true)
      setError(false)
    } catch (error:any) {
      setError(true)
      console.log(error.response.data)
    }
  }

  useEffect(()=>{
    setError(false)
    const urlToken = window.location.search.split('=')[1]
    setToken(urlToken||'')

    /**
    * const {query} = router
      const urlToken = query.token

    *  */ 
  },[])
  useEffect(()=>{
    setError(false)
    if(token.length>0){
      verifyUserEmail()
    }
  },[token])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Email Verification</h1>
      <h2 className='text-green-500'> {token?`${token}`:'No Token'} </h2>
      {verified && (
        <div>
          <h2>Verified</h2>
          <Link href='/login'>
            Login 
          </Link>
        </div>
        )}
        {
          error &&(
            <div>
              <h2>Error</h2>
            </div>
          )
        }
    </div>
  </div>
  )
}

