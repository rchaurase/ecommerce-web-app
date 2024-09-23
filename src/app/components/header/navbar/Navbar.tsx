import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/app/components/ui/menubar"
import { RiArrowDropDownLine } from 'react-icons/ri'
import Link from 'next/link'

function Navbar() {
  return (
    <div>
      <div>
        {/* menubar here */}
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className='bg-[#048567] h-[45px] flex items-center sm:pl-16 px-4'>
              Shopping By Categories
              <RiArrowDropDownLine className='ml-2 sm:w-6 sm:h-6 w-4 h-4' />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger><Link href='/'>Home</Link></MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>About</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  )
}

export default Navbar
