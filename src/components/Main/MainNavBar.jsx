import React, {useState} from 'react'
import CommerceItem from '../Common/CommerceItem'
import arrow from "../../images/arrowRigth.png"
import {Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu} from "@nextui-org/react";

const MainNavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const itemsNavBar = ["Inicio", "Productos", "Nosotros", "Contacto"]

  return (
    <div className="fixed z-50 top-0 left-0 right-0 inset-x-0 h-14 flex justify-between">
       <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
                <NavbarContent>
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden text-black" />
                    <NavbarBrand>
                    <CommerceItem />
                </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {itemsNavBar.map((it) => ( 
                    <div className='flex items-center gap-4'>
                      <span className=' cursor-pointer text-black text-sm'>{it}</span>     
                    </div>
                ))}
        </NavbarContent>
        <NavbarContent justify="end">
             <div className='mr-2'>
                <img src={arrow} className='h-6 w-6'/>
             </div>
        </NavbarContent>
        <NavbarMenu>
            {itemsNavBar.map((it) => ( 
                <div className='flex items-center gap-4'>
                  <span className=' cursor-pointer text-black text-sm'>{it}</span>     
                </div>
            ))}
        </NavbarMenu>
    </Navbar>
    </div>
  )
}

export default MainNavBar
