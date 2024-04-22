import React from 'react'
import MainNavBar from './MainNavBar'
import ImageMainComponent from './ImageMainComponent'
import Categorys from './Categorys'
import Publicity from './Publicity'

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
         <Publicity/>
        </div>
    </div>
  )
}

export default Main
