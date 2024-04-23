import React, {useEffect, useState} from 'react'
import arrowBlue from "../../../images/arrowBlue.png"
import axios from 'axios'
import CategorysCard from './CategorysCard'


const Categorys = () => {

    const  [availableCategorys, setAvailablesCategorys] = useState([])
    const [show, setShow] = useState(false)

    const getCategorys = async () => { 
        try {
            const getData = await axios.get("https://jellyfish-app-mpahs.ondigitalocean.app/api/categories?pageSize=5&page=1")
            const response = getData.data
            console.log("Categorias", response)
            setAvailablesCategorys(response)
            if(response) { 
                setShow(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

   

    useEffect(() => { 
        getCategorys()
    }, [])



  return (
    <div  className='w-screen left-0  flex flex-col items-center justify-center'>
        <div className='border border-yellow-600 w-4/5'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center border border-green-800 w-full'>
                    <div className='flex flex-col border border-blue-700 justify-start items-start w-auto'> 
                        <div  className='w-auto items-start text-start'>
                            <h5 className='flex flex-col md:flex-row gap-0 md:gap-2 font-raleway text-3xl font-bold text-black'>Categorias mas <span style={{color:"#0500FF"}}>visitadas</span></h5>
                        </div>
                        <div className='w-full flex flex-col justify-start items-start text-start'>
                            <p className='font-raleway' style={{color:"#6B7280"}}>Descubre lo último en tecnología con nuestras categorías más populares.</p>
                            <p className='font-raleway' style={{color:"#6B7280"}}>Encuentra lo que buscas en electrónica, informática y más.</p>
                        </div>
                    </div>
                    <div className='flex justify-end items-center gap-2 mt-2'>
                        <p className='font-raleway font-bold text-sm' style={{color:"#0500FF"}}>Ver todas las categorias</p>
                        <img src={arrowBlue} className='h-2 w-2'/>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start border border-green-800 mt-8 w-full'>
                    <div className='flex items-center justify-center'>
                    {show ? <CategorysCard categoryData={availableCategorys}/> : null}
                    </div>
                </div>
            </div>
        </div>
       
     
    </div>
  )
}

export default Categorys


