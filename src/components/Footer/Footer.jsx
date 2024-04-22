import React from 'react'
import fb from "../../images/fb.png"
import tw from "../../images/tw.png"
import yt from "../../images/yt.png"
import tiktok from "../../images/tiktok.png"
import linkedin from "../../images/linkedin.png"
import instagram from "../../images/instagram.png"
import CommerceItem from '../Common/CommerceItem'

const Footer = () => {
  return (
    <div className='fixed inset-x-0 bottom-0  p-4'>
        <div className='flex items-center w-full justify-between border-t border-l-none border-r-none border-gray-200 h-8 mt-2'>
              <CommerceItem/>
              <div className='flex items-center gap-4 mr-12 mt-2'>
                 <img className='h-4 w-4 lg:h-6 lg:w-6' src={instagram}/>
                 <img className='h-4 w-4 lg:h-6 lg:w-6' src={fb}/>
                 <img className='h-4 w-4 lg:h-6 lg:w-6' src={yt}/>
                 <img className='h-4 w-4 lg:h-6 lg:w-6' src={tiktok}/>
                 <img className='h-4 w-4 lg:h-6 lg:w-6' src={linkedin}/>
                 <img className='h-4 w-4 lg:h-6 lg:w-6' src={tw}/>
              </div>
        </div> 
        <hr />
        <div className='flex flex-col mt-2 lg:flex-row items-center w-full justify-between '>
             <p className='text-sm xl:text-md ml-4 md:ml-8 xl:ml-12 mt-0 md:mt-6' style={{color:"#9CA3AF"}}>Terminos y Condiciones</p>
             <p className='text-sm xl:text-md mt-0 md:mt-6' style={{color:"#9CA3AF"}}>Todos los Derechos Reservados a CreativesDogs Agency - 2022</p>
             <p className='text-sm xl:text-md mr-4 md:mr-8 xl:mr-12 flex mt-0 md:mt-2 lg:mt-6' style={{color:"#9CA3AF"}}>Diseño y Desarrolo con ❤️ por <p className='text-blue-900 ml-2'>CreativeDog Agency</p></p>
        </div>
    </div> 
  )
}

export default Footer
