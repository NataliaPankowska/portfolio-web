
import './PortfolioPiotr.css';
import { useTranslation } from 'react-i18next';
import image1 from '../assets/pankoski-strona/pankowski-glowna1.png';
import image2 from '../assets/pankoski-strona/pankowski-przedmioty2.png';
import image3 from '../assets/pankoski-strona/pankowski-portfolio-page.png';
import image4 from '../assets/pankoski-strona/pankowski-szpaki1.png';
import video from '../assets/pankoski-strona/dark-mode-toggle.mp4';
import video2 from '../assets/pankoski-strona/title-hover-video.mp4';
import video3 from '../assets/pankoski-strona/slider-video.mp4';

const PortfolioPiotr = () => {
  const {t} = useTranslation();
  return (
    <div>
         <div className='presentation'>
               <h1 className='projects-title'>{t("pankowski_portfolio_title")}</h1>

               <div className='project-row'>
               <img src={image1} className='image un'/>
               <img src={image2} className='image deux'></img>
               </div>
               <div className='project-row bis'>
               <img src={image3} className='image trois'/>
               <img src={image4} className='image quatre'/>          
              
               </div>
               <div className='project-row '>
               <p className='opisp'>{t("pankowski_portfolio_main")}</p>
               
               </div>  
               <div className='project-row col'>
              <h3 className='projects-title sub' >{t("Highlights")}</h3>
                <video autoPlay loop className='hover-title-video'>
                  
                <source src={video2} type="video/mp4"/>
                </video>
                <p className='opisp b'><b>{t("less-is-more")}</b><br/>

                 {t("pankowski_portfolio_minimalism")}</p>
               </div>
               <div className='project-row bis b'>
                <video autoPlay loop className='dark-mode-toggle'>
                <source src={video} type="video/mp4"/>
                </video>
                <p className='opisp d'>{t("pankowski_portfolio_toggle")}</p>
               </div>
               <div className='project-row row'>
                <video autoPlay loop className='slider-video'>
                <source src={video3} type="video/mp4"/>
                </video>
                <p className='opisp c'>{t("pankowski_portfolio_animations")}</p>
                </div>
                <div className='project-row'>
                   <div className='live-prev'>
                  <a href="https://www.piotrpankowski.com/" target='_blank'>Live Preview</a>
                </div>
                </div>
             
               </div>
    </div>
  )
}

export default PortfolioPiotr