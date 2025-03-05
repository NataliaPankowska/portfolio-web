
import './ArtistsTemplate.css';
import artImg1 from '../assets/photo-portfolio/gallery-desktop.png';
import artImg2 from '../assets/photo-portfolio/slider1-photo.png';
import artImg3 from '../assets/photo-portfolio/gallery-mobile.png';
import artImg4 from '../assets/photo-portfolio/slider-mobile.png';
import artImg5 from '../assets/photo-portfolio/menu-mobile.png';
import video from '../assets/photo-portfolio/slider-photo.mp4';
import { useTranslation } from 'react-i18next';

const ArtistsPTemplate = () => {
  const {t} = useTranslation();
  return (
    <div className='presentation'>
        <h1 className='projects-title'>{t("portfolio_template_title")}</h1>
        <div className='img-roww'>
            <img src={artImg1} className='imgg one' alt=''/>
            <img src={artImg2} alt="" className='imgg two'/>
        </div>
        <div className='img-roww two'>
            <img src={artImg3} className='img mob' alt=''/>
            <img src={artImg4} alt="" className='img mob'/>
            <img src={artImg5} alt="" className='img mob'/>
        </div>
        <div className='img-roww op'>
            {/* <div className='opis-decoration'></div> */}
            <p className='opiss'>{t("portfolio_template_main" )}</p>
          <p className='opiss technical'><b>{t("technical_environment")}</b> {t("portfolio_template_te_list")}</p>
        </div>
        <div className='img-roww three'>
        <video autoPlay loop muted className='slider-video'>
                <source src={video} type="video/mp4"/>
                </video>
          
        </div>
        <div className='img-row butt'>
           <a href="https://photo-portfolio-lyart.vercel.app/" target='_blank' className='live-prev'>{t("live")}</a>
           <a href="https://github.com/NataliaPankowska/photo-portfolio" target='_blank' className='live-prev git'>GitHub</a>
        </div>
    </div>
  )
}

export default ArtistsPTemplate