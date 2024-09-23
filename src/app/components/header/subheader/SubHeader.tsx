'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaCartPlus } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { VscAccount } from 'react-icons/vsc';
import { Input } from '@/app/components/ui/input';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/app/store/store';
import logo from '../../../../app/logo.png'; // Ensure this path is correct

function SubHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const wishlistItems = useAppSelector(state => state.wishlist?.products?.length || 0);
  const cartItems = useAppSelector(state => state.cart?.totalQuantity || 0);
  const router = useRouter();
  const userName = useAppSelector(state => state.auth?.user?.username || '');


  // Use Redux state to handle login status instead of API call
  useEffect(() => {
    const isAuthenticated = !!userName;
    if (!isAuthenticated) {
      setIsLoggedIn(false);
      router.push('/');
    } else {
      setIsLoggedIn(true);
    }
  }, [userName, router]);

  const handleAccountClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isLoggedIn) {
      router.push('/profile');
    } else {
      router.push('/login');
    }
  };

  return (
    <div id="sub-header" className="bg-gray-100 w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:p-3">
        <div className="grid grid-cols-3 sm:gap-4 sm:space-x-10 sm:ml-10">
          {/* Replace hardcoded email and phone number with variables */}
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faEnvelope} className='sm:p-1' /> cart@gmail.com
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faPhone} className='sm:p-1' /> 9399184074
          </div>
          <div className="sm:items-right">
            <span>Welcome to our store!</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="sm:flex sm:flex-col lg:flex-row justify-between items-center sm:p-3">
        <div className="flex flex-row sm:items-center mb-4 lg:mb-0">
          {/* Ensure the logo path is correct or move to the public folder */}
          <Image src={logo} alt="logo" width={100} height={100} className="pr-4 pl-4 rounded-2xl" />
          <h2 className="text-2xl font-extrabold text-blue-700 tracking-wide capitalize">DeepSeaCart</h2>
        </div>
        <div className="text-center flex mb-4 lg:mb-0">
          <div className="relative flex items-center max-w-xs mx-auto">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring-0"
            />
            <FaSearch className="absolute left-3 top-2.5 w-12 pt-2 h-7 pr-4 text-gray-400" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className='w-[200px] bg-white outline-none border border-gray-300 rounded-none shadow-sm focus:outline-none flex pt-3 pl-5 py-2'>
              All Categories
              <RiArrowDropDownLine className='ml-3 w-12 h-8' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex justify-center space-x-4 pr-10 mb-4">
          <Link href="" onClick={handleAccountClick} className="flex flex-col items-center hover:text-[#048567]">
            <VscAccount className="text-2xl" />
            <p>{userName || "User Account"}</p>
          </Link>
          <Link className='hover:text-[#048567]' href={'/wishlist'}>
            <div className="relative flex flex-col items-center">
              <span className="absolute bottom-10 left-7 bg-[#048567] h-5 w-5 rounded-full text-white text-xs flex items-center justify-center">
                {wishlistItems}
              </span>
              <CiHeart className="text-2xl" />
              <p>Wishlist</p>
            </div>
          </Link>
          <Link className='hover:text-[#048567]' href={'/cart'}>
            <div className="relative flex flex-col items-center">
              <span className="absolute bottom-10 left-4 bg-[#048567] h-5 w-5 rounded-full text-white text-xs flex items-center justify-center">
                {cartItems}
              </span>
              <FaCartPlus className="text-2xl" />
              <p>Cart</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
