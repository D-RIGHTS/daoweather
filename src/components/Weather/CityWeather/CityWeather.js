import React from 'react'

function CityWeather(props) {
    console.log('props', props);
    const {data} = props;
    const weatheIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    return (
        <div className="divBlock">
        <div 
        className={(typeof data.name != "undefined" ) 
         ? ((data.main.temp >= -10 && data.main.temp  <= 9)
         ? 'cold ' 
         : (data.main.temp  >= 10 && data.main.temp  <= 29)
         ? 'warm'
         : (data.main.temp  >= 30 )
         ? 'hot'
         : 'standard')  
         : 'standard' }>
                <img src={weatheIcon} alt="" />
                <h4 className="text-secondary">{data.name}, {data.sys.country}</h4>
                <small>
                    As of {new Date().toLocaleTimeString()}
                </small>
                <h2>{Math.round(data.main.temp)}°C </h2>
                <div>{data.weather[0].main}</div>
                <div className="text-secondary"> {data.weather[0].description}  </div>
                <small>H:{Math.round(data.main.temp_max)} L:{Math.round(data.main.temp_max)}</small> 
            </div>   
        </div>
    )
}

export default CityWeather;
