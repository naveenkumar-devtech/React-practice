import React from 'react'
import "./WeatherCard.css"

const WeatherCard = ({pic,location,data}) => {
  return (
    <main className="main">
  <div className="left">
    <div className="date">
      Thursday, 8 December 2022
    </div>
    <div className="city">
      {location}
    </div>
    <div className="tempreture">
      <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" alt="icon" className="left-img" />
      {data}
    </div>
  </div>
  <div className="right">
    <div className="city-img">
      <img src={pic} alt="tajmahal" className="right-img" />
    </div>
  </div>
</main>


  )
}

export default WeatherCard
