import React from 'react'
import "./App.css"
import WeatherCard from './Components/WeatherCard'
import Navbar from './Components/Navbar'
import BulbToggle from './Components/BulbToggle'
import Calculator from './Components/Calculator'
import StopWatch from './Components/StopWatch'

const App = () => {
  return (
   <>
   {/* <Navbar/>
   <WeatherCard
   pic="https://e1.pxfuel.com/desktop-wallpaper/124/761/desktop-wallpaper-taj-mahal-agra-india-taj-mahal-at-night-3d-thumbnail.jpg"
   
   location={"Agra"}

   data="27°"
   />

   <WeatherCard
   pic="https://crazyhodophile.in/wp-content/uploads/2020/07/Hawa-Mahal-2048x1365.jpg"
   
   data="37°"
   location={"Jaipur"}
  //  /> */}
   <StopWatch/>

   </>


  )
}

export default App
