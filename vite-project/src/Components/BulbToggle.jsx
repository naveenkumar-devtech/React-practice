import React, { useState } from 'react'
import "./BulbToggle.css"
const bulbOnImg = "https://th.bing.com/th/id/OIP.zHtYy800GhmmVF2UfkgymwAAAA?rs=1&pid=ImgDetMain"
const bulbOffImg  = "https://th.bing.com/th/id/OIP.dTmDdvOWEO-0s7t0Z3Yr4gAAAA?rs=1&pid=ImgDetMain"

const BulbToggle = () => {
    const [isOn,setIsOn] = useState(false)
    const toggleBulb = () =>{
        setIsOn(!isOn)
    }
  return (
    <div>
      
      {/* <img src={bulbOnImg} alt="bulbOnImg.png" /> */}
      <img src={isOn?bulbOnImg:bulbOffImg} alt="bulbOffImg.png" />
      <button onClick={toggleBulb}>Click Me</button>
    </div>
  )
}

export default BulbToggle
