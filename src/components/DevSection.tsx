
import React, {  useState } from 'react'
import './DevSecion.css';
import Shapes from './Shapes';
import HoverProject from './HoverProject';
import Project from './Project';

// interface Props{
//   onClickOne: () => void
// }

const DevSection = () => {
  const [visible, setVisible] = useState(false)
  const [mousePos, setMousePos] = useState({x: 0, y: 0});
  const [key, setKey] = useState('');
  const [showProject, setShowProject] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({x: e.clientX, y: e.clientY})
  }

  const handleHover = (key: string) => {
    setVisible(true);
    setKey(key);
  }

  const handleHoverEnd = () => {
    setVisible(false);

  }

  const handleClick = (key: string) => {
    setShowProject(true);
    setKey(key)
  }
 

  // useEffect(() => console.log(key), [visible])
  return (
    <div className='devsection' onMouseMove={handleMouseMove}>

   
      <h1 className='projects-word'>Projects</h1>
        <Shapes onHover={(key: string) => handleHover(key)} onHoverEnd={handleHoverEnd} onClick={(key: string) => handleClick(key)}/>
        <HoverProject visible={visible} position={mousePos} hoverKey={key}/>
        <Project show={showProject} close={() => setShowProject(false)} projectKey={key}/>
    </div>
  )
}

export default DevSection