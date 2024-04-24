import React from 'react'
import fb from "../../images/fb.png"
import tw from "../../images/tw.png"
import yt from "../../images/yt.png"
import tiktok from "../../images/tiktok.png"
import linkedin from "../../images/linkedin.png"
import instagram from "../../images/instagram.png"
import CommerceItem from '../Common/CommerceItem'

const Footer = ({site}) => {
  return (
    <div className={site === "Login" ? "fixed inset-x-0 bottom-0  p-4" : "mt-auto w-screen bottom-0 p-4"}>
        <div className='flex items-center w-full justify-between gap-4 lg:gap-0 h-9 mt-2'>
              <CommerceItem/>
              <div className='flex items-center gap-4 mr-12 mt-2 mb-3'>
                 <img className='h-4 w-4 lg:h-6 lg:w-6' src={instagram}/>
                 <img className='h-4 w-4 lg:h-6 lg:w-6' src={fb}/>
                 <img className='h-4 w-4 lg:h-6 lg:w-6' src={yt}/>
                 <img className='h-4 w-4 lg:h-6 lg:w-6' src={tiktok}/>
                 <img className='h-4 w-4 lg:h-6 lg:w-6' src={linkedin}/>
                 <img className='h-4 w-4 lg:h-6 lg:w-6' src={tw}/>
              </div>
        </div> 
        
        <div className='flex flex-col lg:flex-row items-center w-full justify-between h-auto mt-4 mb-2 lg:mb-0 '>
             <p className='text-sm xl:text-md mt-4 ml-4 md:ml-8 xl:ml-12  md:mt-6' style={{color:"#9CA3AF"}}>Terminos y Condiciones</p>
             <p className='text-sm xl:text-md mt-4 md:mt-6' style={{color:"#9CA3AF"}}>Todos los Derechos Reservados a CreativesDogs Agency - 2022</p>
             <p className='text-sm xl:text-md mt-4 mb-2 mr-4  md:mr-8 xl:mr-12 flex  md:mt-2 lg:mt-6' style={{color:"#9CA3AF"}}>Diseño y Desarrolo con ❤️ por <p className='text-blue-900 ml-2'>CreativeDog Agency</p></p>
        </div>
    </div> 
  )
}

export default Footer
