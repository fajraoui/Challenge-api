import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Sport = ({query}) => {
    const [listOfSport, setListOfSport] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.weatherapi.com/v1/sports.json?key=1731ca5619fc4430a9885719210309&q=${query}`)
      .then((res) => {
        console.log(res);
        setListOfSport(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);
    return (
        <div>
          <h1>Today you can enjoy your time playing:</h1>
          <h3>{listOfSport&&listOfSport[0]}</h3>  
          <h3>{listOfSport&&listOfSport[0]}</h3>  
          <h3>{listOfSport&&listOfSport[0]}</h3> 
          <h1>Have a good day</h1>
        </div>
    )
}

export default Sport
