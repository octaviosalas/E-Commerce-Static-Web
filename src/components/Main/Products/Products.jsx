import React, { useEffect, useState } from 'react'
import filterIcon from "../../../images/filterIcon.png"
import {Select, SelectItem} from "@nextui-org/react";
import arrowBlue from "../../../images/arrowBlue.png"
import CardProducts from './CardProducts';
import axios from 'axios';

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


  return (
     <div  className='w-screen left-0 border border-red-800 flex flex-col items-center justify-center'>
      <div className='border border-yellow-600 w-4/5'>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex justify-between items-center border border-green-800 w-full'>
                <div className='flex flex-col border border-blue-700 justify-start items-start w-auto'> 
                    <div  className='w-2/4 items-start text-start'>
                        <h5 className='flex flex-col md:flex-row gap-0 md:gap-2  font-raleway text-3xl font-bold text-black'>Productos <span style={{color:"#0500FF"}}> destacados</span></h5>
                    </div>
                    <div className='w-full xl:w-3/4 flex flex-col justify-start items-start text-start'>
                        <p className='font-raleway' style={{color:"#6B7280"}}>¡Descubre nuestros productos estrella! Encuentra lo mejor en tecnología y accesorios para simplificar tu vida.</p>
                    </div>
                </div>
                <div className='flex-row justify-end items-center gap-2 mt-6  hidden lg:block'>
                   
                      <div className="w-full flex justify-end gap-4 ">                          
                        <select label="Selecciona un tipo de Cliente" className="w-24 xl:w-44 2xl:w-72 font-medium text-black flex flex-col items-center justify-center rounded-lg" style={{padding: '10px 15px'}}>
                            <option disabled selected className='flex'><img src={filterIcon}/> Ordenar por</option>
                            {selectItems.map((item, index) => (
                                <option key={index} value={item}> {item} </option>
                            ))}
                        </select>                       
                      </div> 
            
                </div>
            </div>

            <div className='mt-4 w-full flex'>
               {availableProducts.length > 0 ? <CardProducts productsData={availableProducts}/> : null}
            </div>

        </div>
    </div>
   
 
</div>
       
  
  )
}

export default Products



/* 

import React from 'react'
import filterIcon from "../../../images/filterIcon.png"
import {Select, SelectItem} from "@nextui-org/react";

const Products = () => {

    const radius = [
        "full",
        "lg",
        "md",
        "sm",
        "none",
      ];

      const selectItems = ["Mayor precio", "Menor Precio", "A-Z", "Z-a"]

  return (
    <div>
          <div  className='w-screen left-0 border border-red-800 flex flex-col items-center justify-center'>
            <div className='border border-yellow-600 w-4/5'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex justify-between items-center border border-green-800 w-auto'>
                    <div className='flex flex-col border border-blue-700 justify-start items-start w-3/4'>   
                    <div>
                        <h5 className='flex gap-2 font-raleway text-4xl lg:text-4xl font-bold text-black md:break-words'>Productos <span style={{color:"#0500FF"}}> destacados</span> </h5>    
                    </div>
                    <div className='w-full flex flex-col justify-start items-start text-start'>
                       <p className='font-raleway' style={{color:"#6B7280"}}>¡Descubre nuestros productos estrella! Encuentra lo mejor en tecnología y accesorios para simplificar tu vida.</p>
                    </div>
               </div>
            <div className='flex-row justify-end items-center gap-2 mt-6 hidden lg:block w-1/4 border border-red-600'>  
                <div className="w-full flex justify-end gap-4">                          
                    <select label="Selecciona un tipo de Cliente" className="w-24 xl:w-44 2xl:w-72 font-medium text-black flex flex-col items-center justify-center rounded-lg" style={{padding: '10px 15px'}}>
                        <option disabled selected className='flex'><img src={filterIcon}/> Ordenar por</option>
                        {selectItems.map((item, index) => (
                            <option key={index} value={item}> {item} </option>
                        ))}
                    </select>                       
                    </div> 
                </div>
         </div>
        <div className='flex flex-col justify-start items-start border border-green-800 mt-8 w-full'>
            <div className='flex items-center justify-center'>
          lala
            </div>
        </div>
</div>
</div>


</div>
</div>
)
}

export default Products


*/