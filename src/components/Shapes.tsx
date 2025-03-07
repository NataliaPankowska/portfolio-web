import { useState } from 'react'
import { motion } from "motion/react"
import './Shapes.css';
import { useTranslation } from 'react-i18next';

interface Props{
  onHover: (key: string) => void;
  onHoverEnd: () => void;
  onClick: (key: string) => void;
  
}

const Shapes = ({onHover, onHoverEnd, onClick}: Props) => {
  const [hoverOne, setHoverOne] = useState({
    scaleA: '1', 
    scaleB: '1'
  })
  const [hoverTwo, setHoverTwo] = useState({
    scaleA: '1',
    scaleB: '1'
  })

  const [hoverThree, setHoverThree] = useState({
    scaleA: '1',
    scaleB: '1'
  })
  const {t} = useTranslation();
  return (
    <div className='shape-container'>
        <motion.div className='shape one'
        key= 'one'
           onHoverStart={() => {
            setHoverOne({scaleA: '1.2', scaleB: '1.2'});
            onHover('one');
           }
           
          }
           onHoverEnd={() => {
            setHoverOne({scaleA: '1', scaleB: '1'});
            onHoverEnd();
           }}
           onClick={() => onClick('one')}
        >

                <motion.div 
            className='project-icon one b'
            style={{transform: `scale(${hoverOne.scaleA})`, transition: 'transform .5s ease-out'}}

            initial={{marginLeft: '50%'}}
            whileInView={{marginLeft: '-60%'}}
            transition = {
            {  duration: 1.5,
              ease: [0, 0.71, 0.2, 1.01],}
            }
            />
            <motion.div 
            className='project-icon one a'
            // animate={{marginLeft: '50%'}}
            style={{transform: `scale(${hoverOne.scaleA})`, transition: 'transform .5s ease-out'}}
            initial={{marginLeft: '-50%'}}
            whileInView={{marginLeft: '60%',  
              transition : {
               duration: 1.5,
                ease: [0, 0.71, 0.2, 1.01],}
              }}
           
            
            />
            <motion.div 
            className='project-icon one b top'
            // animate={{marginLeft: '-50%'}}
            style={{transform: `scale(${hoverOne.scaleB})`, transition: 'transform .5s ease-out'}}

            initial={{marginLeft: '0'}}
            whileInView={{marginLeft: '-60%'}}
            transition = {
            {  duration: 1.5, 
              ease: [0, 0.71, 0.2, 1.01],}
            }
            />     
          
              <h2 className='mobile-project'>{t("pankowski_portfolio_mobile_title")}</h2>

          
             
        </motion.div>
        <motion.div className='shape two'
        key='two'
         onHoverStart={() => {
          setHoverTwo({scaleA: '1.3', scaleB: '.8'});
          onHover('two')
        }}
         onHoverEnd={() => {
          setHoverTwo({scaleA: '1', scaleB: '1'});
          onHoverEnd()
        }}
        onClick={() => onClick('two')}
        >
      
            <motion.div 
            className='project-icon two a'
          
            style={{transform: `scale(${hoverTwo.scaleA})`, transition: 'transform .5s ease-out'}}
            initial={{marginTop: '80%'}}
            whileInView={{marginTop: '20%',  transition: 
              {  duration: 1.5, 
                ease: [0, 0.71, 0.2, 1.01],}
              }}
            />
            <motion.div 
            className='project-icon two b'
            style={{transform: `scale(${hoverTwo.scaleB})`, transition: 'transform .5s ease-out'}}
          initial={{marginTop: '-40%'}}
          whileInView={{marginTop: '0', transition: 
            {  duration: 1.5, 
              ease: [0, 0.71, 0.2, 1.01],}
            }}
          
            />
            <h2 className='mobile-project'>{t("food_tracker_mobile_title")}</h2>
        </motion.div>
        <motion.div className='shape three'
        key='three'
        onHoverStart={() => {
          setHoverThree({scaleA: '1.2', scaleB: '.8'});
          onHover('three')
      }}
        onHoverEnd={() => {
          setHoverThree({scaleA: '1', scaleB: '1'});
          onHoverEnd();
      }}
      onClick={() => onClick('three')}
        >
          <motion.div 
            className='project-icon three c'
            // animate={{marginTop: '100%'}}
            initial={{marginTop: '0'}}
            whileInView={{marginTop: '-100%'}}
            transition = {
            {  duration: 1.5,
             
            }
            }
            />
            <motion.div 
            className='project-icon three a'
            style={{transform: `scale(${hoverThree.scaleA})`, transition: 'transform .5s ease-out'}}
        
            />
            <motion.div 
            className='project-icon three b'
            style={{transform: `scale(${hoverThree.scaleB})`, transition: 'transform .5s ease-out'}}
            initial={{marginTop: '0'}}
            whileInView={{marginTop: '50%', transition: 
              {  duration: 1.5, 
                ease: [0, 0.71, 0.2, 1.01],}
              }}
            />
            <h2 className='mobile-project'>{t("portfolio_template_mobile_title")}</h2>
        </motion.div>
    </div>
  )
}

export default Shapes