import React, {useEffect, useState, useRef} from 'react'
import arrowBlue from "../../../images/arrowBlue.png"
import axios from 'axios'
import CategorysCard from './CategorysCard'


const Categorys = () => {

    const  [availableCategorys, setAvailablesCategorys] = useState([])
    const [show, setShow] = useState(false)
    const [parentWidth, setParentWidth] = useState(0);
    const parentDivRef = useRef();
    const getCategorys = async () => { 
        try {
            const getData = await axios.get("https://jellyfish-app-mpahs.ondigitalocean.app/api/categories?pageSize=7&page=1")
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

   
   
    useEffect(() => {
       const updateSize = () => {
         setParentWidth(parentDivRef.current.offsetWidth);
       };
   
       window.addEventListener('resize', updateSize);
       updateSize(); // Actualiza el tamaño inicial
   
       return () => window.removeEventListener('resize', updateSize); // Limpia el evento al desmontar
    }, []);

  return (
    <div  className='w-screen left-0  flex flex-col items-center justify-center'>
        <div className=' w-4/5'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center w-full'>
                    <div className='flex flex-col justify-start items-start w-auto'> 
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
                <div className='flex flex-col justify-start items-start mt-2 xl:mt-4 w-full' ref={parentDivRef}>
                    <div className='flex items-center justify-center'>
                      {show ? <CategorysCard categoryData={availableCategorys} parentWidth={parentWidth}/> : null}
                    </div>
                </div>
            </div>
        </div>
       
     
    </div>
  )
}

export default Categorys


