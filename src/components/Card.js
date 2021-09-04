import { motion } from 'framer-motion'
import React from 'react'

const Card = ({el}) => {
    return (
        <div>
            <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 180, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
/>
   <h4>{el.location.name}</h4>
        </div>
    )
}

export default Card
