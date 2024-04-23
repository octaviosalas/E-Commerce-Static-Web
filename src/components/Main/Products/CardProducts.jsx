import React from 'react'
import { formatePrice } from '../../../functions/gralFunctions'

const CardProducts = ({productsData}) => {

  return (
    <div className='flex w-full border border-red-700 '>
       <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-1 ">
          {productsData.map((prod) => ( 
             <div className='flex flex-col items-start gap-1 border border-black rounded-lg'>
                <div className='flex flex-col h-60 w-40 lg:w-56 xl:w-64 2xl:w-80 rounded-lg' style={{ backgroundImage: `url(${prod.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='flex justify-end items-end '>
                             <div className='bg-white rounded-lg'>
                                <img src={"https://static.vecteezy.com/system/resources/thumbnails/000/544/094/small/190203_01_Heart_in_Valentines_White_Background_01.jpg"} className='w-4 h-4 m-2'/>
                             </div>
                        </div>
                        <div className='flex items-start justify-start mt-auto ml-3'>
                            <div className='h-5 w-12 bg-gray-300 flex items-center justify-center'>
                                <p className='text-xs font-medium text-black'>{formatePrice(prod.price)}</p>
                            </div>
                        </div>
                </div>
                <div className='flex flex-col justify-start items-start text-start mt-1'>
                    <p className='font-medium text-black text-sm ml-3'>{prod.name}</p>
                    <p className='font-medium text-black text-xs ml-3' style={{color:"#9CA3AF"}}>{prod.category}</p>
                </div>
            </div> 
          ))}
       </div>
    </div>
  
  )
}

export default CardProducts
