import React, { useEffect, useState, useRef } from 'react'
import filterIcon from "../../../images/filterIcon.png"
import arrowBlue from "../../../images/arrowBlue.png"
import CardProducts from './CardProducts';
import axios from 'axios';
import Loading from '../../Common/Loading';
import {Select, SelectItem} from "@nextui-org/react";

const Products = () => {

    const productsData = [
        {
          productName: "Auricular",
          category: "Musica",
          price: 1500,
          image: "https://storage.googleapis.com/tecnowestune/2018/11/d868966c-product_detail_x2_desktop_hd_25_isofront_rgb_red.jpg"
        },
        {
            productName: "Auricular",
            category: "Musica",
            price: 1500,
            image: "https://storage.googleapis.com/tecnowestune/2018/11/d868966c-product_detail_x2_desktop_hd_25_isofront_rgb_red.jpg"
        },
        {
            productName: "Auricular",
            category: "Musica",
            price: 1500,
            image: "https://storage.googleapis.com/tecnowestune/2018/11/d868966c-product_detail_x2_desktop_hd_25_isofront_rgb_red.jpg"
        },
        {
            productName: "Auricular",
            category: "Musica",
            price: 1500,
            image: "https://storage.googleapis.com/tecnowestune/2018/11/d868966c-product_detail_x2_desktop_hd_25_isofront_rgb_red.jpg"
        },
        {
            productName: "Auricular",
            category: "Musica",
            price: 1500,
            image: "https://storage.googleapis.com/tecnowestune/2018/11/d868966c-product_detail_x2_desktop_hd_25_isofront_rgb_red.jpg"
          },
          {
              productName: "Auricular",
              category: "Musica",
              price: 1500,
              image: "https://storage.googleapis.com/tecnowestune/2018/11/d868966c-product_detail_x2_desktop_hd_25_isofront_rgb_red.jpg"
          },
          {
              productName: "Auricular",
              category: "Musica",
              price: 1500,
              image: "https://storage.googleapis.com/tecnowestune/2018/11/d868966c-product_detail_x2_desktop_hd_25_isofront_rgb_red.jpg"
          },
          {
              productName: "Auricular",
              category: "Musica",
              price: 1500,
              image: "https://storage.googleapis.com/tecnowestune/2018/11/d868966c-product_detail_x2_desktop_hd_25_isofront_rgb_red.jpg"
          },
          {
            productName: "Auricular",
            category: "Musica",
            price: 1500,
            image: "https://storage.googleapis.com/tecnowestune/2018/11/d868966c-product_detail_x2_desktop_hd_25_isofront_rgb_red.jpg"
          },
          {
              productName: "Auricular",
              category: "Musica",
              price: 1500,
              image: "https://storage.googleapis.com/tecnowestune/2018/11/d868966c-product_detail_x2_desktop_hd_25_isofront_rgb_red.jpg"
          },
          {
              productName: "Auricular",
              category: "Musica",
              price: 1500,
              image: "https://storage.googleapis.com/tecnowestune/2018/11/d868966c-product_detail_x2_desktop_hd_25_isofront_rgb_red.jpg"
          },
          {
              productName: "Auricular",
              category: "Musica",
              price: 1500,
              image: "https://storage.googleapis.com/tecnowestune/2018/11/d868966c-product_detail_x2_desktop_hd_25_isofront_rgb_red.jpg"
          },
    ]

    
    const [availableProducts, setAvailablesProducts] = useState([])
    const [show, setShow] = useState(false)
    const [parentWidth, setParentWidth] = useState(0);
    const parentDivRef = useRef();

    async function getProducts(pageSize, page) {
        const url = `https://jellyfish-app-mpahs.ondigitalocean.app/api/products?pageSize=${pageSize}&page=${page}`;
        const response = await axios.get(url);
        return response.data.data;
       }
       
       async function get12Products() {
        const firstPageProducts = await getProducts(9, 1);
        const secondPageProducts = await getProducts(3, 2);
        const allProducts = [...firstPageProducts, ...secondPageProducts];
        setAvailablesProducts(allProducts)
        console.log(allProducts)
        return allProducts;
       }
       
      useEffect(() => { 
        get12Products()
      }, [])

      const selectItems = ["Mayor precio", "Menor Precio", "A-Z", "Z-a"]

      useEffect(() => {
        const updateSize = () => {
          setParentWidth(parentDivRef.current.offsetWidth);
        };
    
        window.addEventListener('resize', updateSize);
        updateSize(); 
    
        return () => window.removeEventListener('resize', updateSize); 
      }, []);


  return (
     <div  className='w-screen left-0  flex flex-col items-center justify-center'>
      <div className=' w-4/5'>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex justify-between items-center  w-full'>
                <div className='flex flex-col  justify-start items-start w-auto'> 
                    <div  className='w-2/4 items-start text-start'>
                        <h5 className='flex flex-col md:flex-row gap-0 md:gap-2  font-raleway text-3xl font-bold text-black'>Productos <span style={{color:"#0500FF"}}> destacados</span></h5>
                    </div>
                    <div className='w-full xl:w-3/4 flex flex-col justify-start items-start text-start'>
                        <p className='font-raleway' style={{color:"#6B7280"}}>¡Descubre nuestros productos estrella! Encuentra lo mejor en tecnología y accesorios para simplificar tu vida.</p>
                    </div>
                </div>
                <div className='flex-row justify-end items-center gap-2 mt-6 hidden lg:block'>                  
                      <div className="w-full flex justify-end gap-4 ">                          
                      <Select
                            variant="bordered"
                            radius='md'
                            placeholder="Ordenar Por"
                            className="w-40 2xl:w-52 font-medium text-black  border border-black rounded-md"
                            disallowEmptySelectio="true"
                            startContent={<img src={filterIcon} alt="Icono de filtro" className='ml-6 2xl:ml-8'/>}
                            selectorIcon={<></>} 
                            >
                        {selectItems.map((item) => (
                        <SelectItem key={item} value={item}>
                            {item}
                        </SelectItem>
                        ))}
          </Select>                
                      </div> 
            
                </div>
            </div>

            <div className='mt-4 w-full flex items-center justify-center' ref={parentDivRef}>
               {availableProducts.length > 0 ? <CardProducts productsData={availableProducts}  parentWidth={parentWidth}/> : 
                 <div className='mt-2 mb-2 flex items-center justify-center'>
                  <Loading/>
                </div>
                }
            </div>

        </div>
    </div>
   
 
</div>
       
  
  )
}

export default Products
