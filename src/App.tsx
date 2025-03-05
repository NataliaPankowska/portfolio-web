
import GlobalStyle from './GlobalStyle';

import './App.css'
import LandingPage from './components/LandingPage'
import { motion, useScroll } from 'motion/react';
import { useTranslation } from 'react-i18next';

function App() {
 
  const { scrollYProgress } = useScroll();
  const {i18n} = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")
  }
  return (
    <>
        <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: '#ce4900',
                    zIndex: 100
                }}
            />
            <button className='language-button' onClick={() => toggleLanguage()}>{i18n.language === "en" ? "FR" : "EN"}</button>
     <GlobalStyle />
    <LandingPage />
    </>
  )
}

export default App
