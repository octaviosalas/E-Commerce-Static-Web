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
       const walk = (x - startX) * 2; // Ajusta la velocidad de desplazamiento si es necesario
       carouselRef.current.scrollLeft = scrollLeft - walk;
    };
   
    const handleMouseUp = () => {
       setIsDragging(false);
    };

  return (
    <div
      className='no-scrollbar flex overflow-x-auto mt-8 w-full '
      style={{ maxWidth: parentWidth }} // Usa el ancho del padre aquí
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


/*
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
*/