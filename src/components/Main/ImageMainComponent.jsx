import React from 'react'
import auris from "../../images/auriculares.png"
import arrowButton from "../../images/arrowButton.png"

const ImageMainComponent = () => {
  return (
    <div>
         <div className='w-screen left-0 h-[624px] md:h-[597px]  bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${auris})`}}>
            <div className='flex flex-col justify-start items-start ml-12 md:ml-24'>
                <div className='flex flex-col w-[224px] md:w-[828px] mt-24 '>
                    <div className='flex items-start justify-start text-start mt-64 md:mt-0'>
                      <p className='text-white font-bold font-raleway text-2xl md:text-4xl lg:text-6xl'>Conecta tu mundo con la tecnologia mas avanzada</p>
                    </div>
                    <div className='text-start hidden md:block mt-4' style={{width:"460px"}}>
                       <p className='text-white font-raleway' style={{fontSize:"18px"}}>Exoplora nuestro catalogo de tecnologia y explora todo lo que necesitas para estar conectado</p>
                    </div>       
                    <div className='mt-6 flex items-center gap-3'>
                       <button style={{backgroundColor:"#0500FF", width:"188px", height:"48px"}} className='text-base font-medium text-white font-raleway rounded-md'>
                        <div className='flex justify-center items-center gap-2'>
                            Ver Productos
                            <img src={arrowButton} className='h-3 w-1.5'/>
                        </div>
                        </button>
                       <button style={{ width:"188px", height:"48px"}} className='text-white border border-white hidden md:block'>Otro Link</button>
                    </div>    
                </div>
            </div>
         </div>
    </div>
  )
}

export default ImageMainComponent
