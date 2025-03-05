
import './Heading.css';
import { motion } from "motion/react"

const Heading = () => {
  return (
    <div className='heading'>
        <h2>natalia pańkowska</h2>
        <div className='web-container'>
        <h1>web</h1>
        <div className='animation-container'>
        <motion.h1 
        // initial={{ opacity: 0}}
        className='animated'
        animate={{ 
            opacity: [0, 1, 1, 0],
            y: [4, 0, 0,- 4]
        }}
        transition={{ duration: 2, 
                      times: [0, 0.1, 0.9,1],
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
        
        >designer</motion.h1>
           <motion.h1 
        className='animated'
        animate={{ 
            opacity: [0, 1, 1, 0],
            y: [4, 0, 0,- 4]
        }}
        transition={{ duration: 2, 
                      times: [0, 0.1, 0.9,1],
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 2,
                      delay: 2
                    }}
        
        >developer</motion.h1>
        </div>
        </div>
    </div>
  )
}

export default Heading