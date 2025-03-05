
import {AnimatePresence, motion} from 'motion/react';
import './Project.css';
import PortfolioPiotr from './PortfolioPiotr';
import FoodTracker from './FoodTracker';
import ArtistsPTemplate from './ArtistsPTemplate';


interface Props{
    show: boolean,
    close: () => void;
    projectKey: string
}

const Project = ({show, close, projectKey}: Props) => {
 

  return (
    <>
    <AnimatePresence>
        {show ?
               <motion.div
               className='project'
               initial={{opacity: 0, y: 100}}
               animate={{opacity: 1, y: 0}}
               transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01]
               }}
               >
                <button className='project-close-button' onClick={() => close()}>{'\u00D7'}</button>
            {(() => {
              switch(projectKey){
                case 'one':
                return <PortfolioPiotr />;
                case 'two':
                return  <FoodTracker />;
                case 'three':
                return  <ArtistsPTemplate/>;
              }
            })()}
               
              
             
                   
               </motion.div>
            : null
        }
 
    </AnimatePresence>
    </>
  )
}

export default Project