
import { AnimatePresence, motion } from "motion/react"
import './HoverProject.css'
import { useHoverDescriptions } from '../services/hoveDescriptions';
// import imgOne from '../assets/pankoski-strona/pankowski-cykl.png';
// import imgTwo from '../assets/food-tracker/main-mobile.png';
// import imgThree from '../assets/photo-portfolio/gallery-mobile.png';
// import { useTranslation } from 'react-i18next';

interface Props{
    visible: boolean;
    position: { x: number; y: number };
    hoverKey: string
}




const HoverProject = ({visible, position, hoverKey}: Props) => {
  
 const hoverDescriptions = useHoverDescriptions();
    const project = hoverDescriptions.find((el) => el.key === hoverKey);
    if (!project) return null;
   
  
  return (
    <>
    
    <AnimatePresence>
        {visible &&
            (    <motion.div
                className='project-hover'
                style={{
                    top: position.y + 50,
                    left: position.x - 300
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, 
                          y: -20,
                          transition: {y: {duration: 1, ease: [0, 0.71, 0.2, 1.01],
                                        opacity: {duration: .2}
                          }}
                 }}
            
                exit={{ opacity: 0, y: 0 }}
                >
                    <div className='feat-img' style={{backgroundImage: `url(${project.img_url})`}}></div>
                    <div className='txt' >
                    <h2 className='title'>{project.title}</h2>
                    <p className='project-description'>{project.description}</p>
                    {/* <p className='project-description'>{complement}</p> */}
                    </div>
                </motion.div>)
        }

    </AnimatePresence>
    </>
  )
}

export default HoverProject