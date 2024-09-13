import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* <!-- Column 1 --> */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold">SeaCart</h4>
        <ul className="space-y-2">
          <li><Link href="#" className="hover:underline">About Us</Link></li>
          <li><Link href="#" className="hover:underline">Careers</Link></li>
          <li><Link href="#" className="hover:underline">Press</Link></li>
          <li><Link href="#" className="hover:underline">Blog</Link></li>
        </ul>
      </div>
      
      {/* <!-- Column 2 --> */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold">Customer Service</h4>
        <ul className="space-y-2">
          <li><Link href="#" className="hover:underline">Contact Us</Link></li>
          <li><Link href="#" className="hover:underline">Returns</Link></li>
          <li><Link href="#" className="hover:underline">Shipping Info</Link></li>
          <li><Link href="#" className="hover:underline">FAQs</Link></li>
        </ul>
      </div>
      
      {/* <!-- Column 3 --> */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold">Legal</h4>
        <ul className="space-y-2">
          <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
          <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
          <li><Link href="#" className="hover:underline">Cookie Policy</Link></li>
        </ul>
      </div>
      
      {/* <!-- Column 4 --> */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold">Contact Us</h4>
        <div className="flex flex-col space-x-4">
          <p className='font-bold text-white ml-4 mr-2'>
            Address:<span className='font-normal'>Bhopal</span>
          </p>
          <p className='font-bold text-white ml-2 mr-2'>
            Email:<span className='font-normal'>rahulchaurase3@gmail.com</span>
          </p>
          <p className='font-bold text-white ml-2 mr-2'>
            Contact:<span className='font-normal'>9399184074</span>
          </p>
          <Link href="https://x.com/Rhlcontemplate" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></Link>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
