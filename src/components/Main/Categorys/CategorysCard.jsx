import React, { useEffect, useState, useRef } from 'react'

const CategorysCard = ({categoryData, parentWidth}) => {

    useEffect(() => { 
     console.log(categoryData)
    }, [categoryData])

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
       const walk = (x - startX) * 2; 
       carouselRef.current.scrollLeft = scrollLeft - walk;
    };
   
    const handleMouseUp = () => {
       setIsDragging(false);
    };

  return (
    <div
      className='no-scrollbar flex overflow-x-auto mt-8 w-full '
      style={{ maxWidth: parentWidth }} 
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
  >
    <div className='flex gap-2 xl:gap-6'>
      {categoryData.data.map((data, index) => (
        <div
          key={index}
          className='rounded-lg  flex flex-col h-56 xl:h-80 w-36 lg:w-52 xl:w-64 2xl:w-72'
          style={{
            backgroundImage: `url(${data.image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='flex-grow'></div>
          <div className='flex flex-col justify-start items-start p-1'>
            <p className='font-raleway text-white font-bold text-xs'>{data.name}</p>
            <p className='font-raleway text-white font-medium text-xs'>20 productos</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default CategorysCard

