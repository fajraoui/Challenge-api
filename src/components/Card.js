import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ el }) => {
  return (
    <div>
      <motion.div className='cardt'
        initial={{ scale:5 }}
        animate={{ rotate:370, scale: 2 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 50,
        }}
        >
        <div className='temp'> 
        <h6>{el.location&&el.location.name}</h6>
        <h6>{el.location&&el.location.country}</h6>
        <h6>{el.current&&el.current.last_updated}</h6>
         
        <h1>{el.current&&el.current.temp_c}°C</h1>
        <Link to="/detail">
        <img src={el.current&&el.current.condition&&el.current.condition.icon} alt=''/>
         </Link>
        <h6>{el.current&&el.current.condition&&el.current.condition.text}</h6>
         <h6>{el.forecast&&el.forecast.forecastday[0].day.maxtemp_c}°C/{el.forecast&&el.forecast.forecastday[0].day.mintemp_c}°C</h6>
         <h6>Humidity:{el.current&&el.current.humidity}</h6>
        </div>
        </motion.div>
      
        
    </div>
  );
};

export default Card;
