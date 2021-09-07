import React from "react";

const DetailCard = ({ detail }) => {
  return (
    
    <div className="card">
      <div className='content'> 
      <div className='front'> 
      <h4>{detail.date}</h4>
      <h4>sunrise:{detail.astro && detail.astro.sunrise}</h4>
      <h4>sunset:{detail.astro && detail.astro.sunset}</h4>
      <h4>
        {detail.day && detail.day.maxtemp_c}°C/
        {detail.day && detail.day.mintemp_c}°C
      </h4>
      </div>
      <div className='back'> 
      <table className='table'>
        <tr>
          <td>
            {detail.hour.map((el) => (
              <h4>{el.time.slice(10)}</h4>
            ))}
          </td>

          <td>
            {detail.hour.map((el) => (
              <h4>{el.temp_c}°C</h4>
            ))}
          </td>
        </tr>
      </table>
      </div>
      </div>
    </div>
  );
};

export default DetailCard;
