import React from 'react'
import MainNavBar from './MainNavBar'
import ImageMainComponent from './ImageMainComponent'
import Categorys from './Categorys/Categorys'
import Publicity from './Categorys/Publicity'
import Products from './Products/Products'
import Footer from "../Footer/Footer"
const Main = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-center">
      <MainNavBar/>
      <div className="flex-grow mt-6">
        <ImageMainComponent/>
      </div>
        <div className="flex-grow mt-12">
          <Categorys/>
        </div>
        <div className="flex-grow mt-12">
          <Products/>
        </div>
        <div className="flex-grow mt-12">
         <Publicity/>
        </div>
        <Footer/>
     
    </div>
  )
}

export default Main
