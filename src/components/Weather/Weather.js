import React from 'react'
import SearchCity from '../Weather/CityWeather/SearchCity';
import bgPic from '../Weather/weather.jpg'
import LocalWeather from '../Weather/LocalWeather/LocalWeather';


function Weather() {

    return (

        <div className="d-flex text-center flex-column w-100 justify-content-center align-items-center mainContainer" style={{backgroundImage: `url(${bgPic})`}}>
            <h1 className="text-white">Weather forecast</h1>
            <SearchCity />
            <LocalWeather /> 
        </div>
    )
}

export default Weather
