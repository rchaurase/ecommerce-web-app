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


function Navbar() {
  return (
    <div>
      <div>
        {/* menubar here */}
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className='bg-[#048567] sm:pl-16'>
              SHopping By Categories
              <RiArrowDropDownLine className='ml-3  sm:w-12 h-8'/>
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
            <MenubarTrigger>Home</MenubarTrigger>
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
