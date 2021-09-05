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
        <h6>{el.map(el=>el.date)}</h6>
      </motion.div>

    </div>
  );
};

export default Card;
