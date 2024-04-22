import React, { useEffect } from 'react'

const CategorysCard = ({categoryData}) => {

    useEffect(() => { 
     console.log(categoryData)
    }, [categoryData])

  return (
    <div className='flex gap-2 xl:gap-6'>
        {categoryData.data.map((data) => ( 
            <div className='rounded-lg border border-gray-200 flex flex-col h-72 2xl:h-80 w-24 lg:w-40 xl:w-60 2xl:w-80' style={{ backgroundImage: `url(${data.image.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                 <div className='flex-grow'></div> 
                 <div  className='flex flex-col justify-start items-start p-1'>
                        <p className='font-raleway text-white font-bold text-xs'>{data.name}</p>
                        <p className='font-raleway text-white font-medium text-xs'>20 productos</p>
                    </div>
            </div>   
        ))}
    </div>
  )
}

export default CategorysCard
