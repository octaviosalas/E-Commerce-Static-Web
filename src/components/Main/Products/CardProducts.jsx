import React from 'react'
import { formatePrice } from '../../../functions/gralFunctions'
import like from "../../../images/like.png"

const CardProducts = ({productsData}) => {
   
    console.log(productsData)
    console.log(productsData.map((prod) => prod.galleryImages)[0].map((p) => p.url)[0])
  

  return (
    <div className='flex w-full border border-red-700 '>
       <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-1 ">
          {productsData.map((prod) => ( 
             <div className='flex flex-col items-start gap-1 border rounded-lg'>
                       <div className='flex w-full justify-end items-end text-end'>
                             <div className='bg-white rounded-xl'>
                                <img src={like} className='w-4 h-4 xl:h-5 xl:w-5 m-2'/>
                             </div>
                        </div>
                <div className='flex flex-col h-60 w-40 lg:w-56 xl:w-64 2xl:w-80 rounded-lg' 
                  style={{
                     backgroundImage: `url(${prod.galleryImages[0].url})`,
                     backgroundSize: 'cover',
                     backgroundPosition: '50% 50%', 
                     backgroundRepeat: 'no-repeat', 
                     backgroundColor:"red"
                  }}> 
                     
                        <div className='flex items-start justify-start mt-auto ml-3'>
                            <div className='h-5 w-12 bg-gray-100 flex items-center justify-center'>
                                <p className='text-xs  text-black font-barlow'>{formatePrice(prod.price)}</p>
                            </div>
                        </div>
                </div>
                <div className='flex flex-col justify-start items-start text-start mt-1 w-2/4'>
                    <p className='font-bold text-black text-xs ml-3 font-raleway'>{prod.name}</p>
                    <p className='font-raleway  text-xs ml-3' style={{color:"#9CA3AF"}}>{prod.categories.map((p) => p.name)[0]}</p>
                </div>
            </div> 
          ))}
       </div>
    </div>
  
  )
}

export default CardProducts
