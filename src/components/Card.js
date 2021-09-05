import { motion } from "framer-motion";
import React from "react";

const Card = ({ el }) => {
  return (
    <div>
      <motion.div className='card'
        initial={{ scale:5 }}
        animate={{ rotate:5, scale: 2 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 50,
        }}
        style={{backgroundColor:'rgb(167, 196, 233)',width:250,marginTop:80,marginLeft:500}}
      >
        <div className='card'> 
        <h6>{el.location&&el.location.name}</h6>
        <h6>{el.location&&el.location.country}</h6>
        <h6>{el.current&&el.current.last_updated}</h6>
        <h6>{el.current&&el.current.temp_c}</h6>
        <h6>{el.current&&el.current.condition&&el.current.condition.text}</h6>
        </div>
      </motion.div>

    </div>
  );
};

export default Card;
