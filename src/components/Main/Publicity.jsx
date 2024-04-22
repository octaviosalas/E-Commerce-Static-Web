import React from 'react'
import lastImage from "../../images/lastImage.png"
import arrowButton from "../../images/arrowButton.png"

const Publicity = () => {
  return (
    <div className='w-screen left-0 flex flex-col items-center justify-center border border-yellow-800'>
        <div className='flex flex-col lg:flex-row items-center justify-center w-full md:w-4/5 h-full border border-blue-700'>
            <div className='w-full lg:w-2/4 h-96 order-2 lg:order-1 border border-green-600  bg-black '>
                <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start ml-0 lg:ml-6 mt-4
                 lg:mt-6 border border-red-600 w-full lg:w-/3/4'>
                    <div className='flex flex-col w-[320px] xl:w-3/4 mt-0'>
                        <div className='flex items-start justify-start text-start mt-6 md:mt-0 w-4/4 lg:w-3/4 '>
                          <p className='text-white font-bold font-raleway text-2xl md:text-2xl xl:text-4xl 2xl:text-6xl'>Ejemplo de titulo de tres lineas</p>
                        </div>
                        <div className='text-start mt-4 w-4/4 xl:w-full'>
                          <p className='text-white font-raleway' style={{fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                        </div>       
                          <div className='mt-4 lg:mt-6 flex flex-col lg:flex-row items-center gap-3'>
                                <button style={{backgroundColor:"#0500FF"}} className='text-base font-medium text-white font-raleway rounded-md w-full lg:w-2/4 h-10 lg:h-12'>
                                    <div className='flex justify-center items-center gap-2'>
                                        Ver Productos
                                        <img src={arrowButton} className='h-3 w-1.5'/>
                                    </div>
                                </button>
                                <button className='text-white border border-white w-full lg:w-2/4 h-10 lg:h-12 '>Otro Link</button>
                          </div>    
                    </div>
               </div>
            </div>

            <div className='w-full lg:w-2/4 h-96 border order-1 lg:order-2' style={{ backgroundImage: `url(${lastImage})`, backgroundSize: 'cover', backgroundPosition: 'top center'}}></div>
        </div>
</div>
  )
}

export default Publicity
