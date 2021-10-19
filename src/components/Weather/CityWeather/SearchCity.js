import React, { useState } from 'react';
import '../../Weather/styles.css'
import { Button } from 'react-bootstrap';
import CityWeather from '../CityWeather/CityWeather';



function SearchCity(props) {

    const APIkey = "e6739ea4c78fbfbbfa5106356ef30fa5"
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather?"
    const [weather, setWeather] = useState([])
    const [form, setForm] = useState({ city: ''})
    
    const handler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if(name === 'city') {
            setForm({...form, city: value});
        }
    }

    async function weatherInfo(event) {
        event.preventDefault();
        if(form.city === "") {
            alert('Please enter a city')
        } else {
            const data = await fetch(
                `${baseUrl}q=${form.city}&appid=${APIkey}&units=metric`
                )
                .then((res) => res.json())
                .then((data) => (data));
                setWeather(
                    {
                        data : data
                    }
                );
        }
    }

    return (
        <div className="text-center"> 
            <form className="d-flex align-items-center ">
                <div className="pr-3">
                    <input type="text" name="city" placeholder="City Name" onChange={handler} />
                </div>
                <div className="pl-3">
                    <Button onClick={weatherInfo}>Search</Button>
                </div>
            </form>
            <br />
            {
                weather.data !== undefined ?
                <CityWeather data={weather.data} /> 
                : null
            }
        </div>
    )
}

export default SearchCity
