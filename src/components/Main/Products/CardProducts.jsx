import React, {useState, useEffect, useRef} from 'react'
import { formatePrice } from '../../../functions/gralFunctions'
import like from "../../../images/like.png"

const CardProducts = ({productsData, parentWidth}) => {
   
    console.log(productsData)
    console.log(productsData.map((prod) => prod.galleryImages)[0].map((p) => p.url)[0])

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const carouselRef = useRef(null);
   
    const handleMouseDown = (e) => {
       e.preventDefault();
       setIsDragging(true);
       setStartX(e.pageX - carouselRef.current.offsetLeft);
       setScrollLeft(carouselRef.current.scrollLeft);
    };
   
    const handleMouseMove = (e) => {
       if (!isDragging) return;
       const x = e.pageX - carouselRef.current.offsetLeft;
       const walk = (x - startX) * 2; // Ajusta la velocidad de desplazamiento si es necesario
       carouselRef.current.scrollLeft = scrollLeft - walk;
    };
   
    const handleMouseUp = () => {
       setIsDragging(false);
    };
  

   

  return (
    <div className='no-scrollbar flex w-full overflow-x-auto overflow-y-auto'
         ref={carouselRef}  
         style={{ maxWidth: parentWidth }}
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
         onMouseLeave={handleMouseUp}
      >
       <div className="flex gap-2 items-center md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full md:gap-1 ">
          {productsData.map((prod) => ( 
             <div className='flex flex-col items-start gap-1  rounded-lg h-60 lg:h-72 xl:h-80 '>
                       <div className='flex w-full justify-end items-end text-end'>
                             <div className='bg-white rounded-xl'>
                                <img src={like} className='w-4 h-4 xl:h-5 xl:w-5 m-2'/>
                             </div>
                        </div>
                <div className='flex flex-col h-40 w-40 lg:w-56 xl:w-64 2xl:w-80 rounded-lg ' 
                  style={{
                     backgroundImage: `url(${prod.galleryImages[0].url})`,
                     backgroundSize: 'cover',
                     backgroundPosition: '50% 50%', 
                     backgroundRepeat: 'no-repeat', 
                  }}> 
                     
                        <div className='flex items-start justify-start mt-auto ml-3'>
                            <div className='h-5 w-12 bg-gray-100 flex items-center justify-center'>
                                <p className='text-xs  text-black font-barlow'>{formatePrice(prod.price)}</p>
                            </div>
                        </div>
                </div>
                <div className='flex flex-col justify-start items-start text-start mt-1 w-4/4 lg:w-2/4'>
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
