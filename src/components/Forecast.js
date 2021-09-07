
import React from 'react'

const Forecast = ({data}) => {
    return (
        <div className='card3'>
            <div className='card2'> 
          
           <h4>{data.forecast&&data.forecast.forecastday[1].date}</h4>
           <h4>{data.forecast&&data.forecast.forecastday[1].day.maxtemp_c}°C/{data.forecast&&data.forecast.forecastday[1].day.mintemp_c}°C</h4>
           
           <h4>{data.forecast&&data.forecast.forecastday[1].day.condition.text}</h4>
           <img src={data.forecast&&data.forecast.forecastday[1].day.condition.icon} alt=''/>
           <h4>sunrise:{data.forecast&&data.forecast.forecastday[1].astro.sunrise}</h4>
           <h4>sunset:{data.forecast&&data.forecast.forecastday[1].astro.sunset}</h4>
    
           </div>
           <div className='card2'> 
           <h4>{data.forecast&&data.forecast.forecastday[2].date}</h4>
           <h4>{data.forecast&&data.forecast.forecastday[2].day.maxtemp_c}°C/{data.forecast&&data.forecast.forecastday[2].day.mintemp_c}°C</h4>
           <h4>{data.forecast&&data.forecast.forecastday[2].day.condition.text}</h4>
           <img src={data.forecast&&data.forecast.forecastday[2].day.condition.icon} alt=''/>
           <h4>sunrise:{data.forecast&&data.forecast.forecastday[2].astro.sunrise}</h4>
           <h4>sunset:{data.forecast&&data.forecast.forecastday[2].astro.sunset}</h4>
           </div>
        </div>
    )
}

export default Forecast
