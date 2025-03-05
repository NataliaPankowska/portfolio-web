
import './FoodTracker.css';
import { useTranslation } from 'react-i18next';
import foodImage1 from '../assets/food-tracker/main-desktop.png';
import foodImage2 from '../assets/food-tracker/save-dinner-mobile.png';
import foodImage3 from '../assets/food-tracker/saved-meal-desktop.png';
import foodImage4 from '../assets/food-tracker/nutriments-display-mobile.png';


const FoodTracker = () => {
  const {t} = useTranslation();
  return (
    <div className='presentation'>
        <h1 className='projects-title'>{t("food_tracker_title")}</h1>
        <div className='img-row'>
            <img src={foodImage1} className='img one' alt=''/>
            <img src={foodImage2} alt="" className='img two'/>
        </div>
        <div className='img-row bis'>
            <img src={foodImage3} className='img one' alt=''/>
            <img src={foodImage4} alt="" className='img two'/>
        </div>
        <div className='img-row op'>
            {/* <div className='opis-decoration'></div> */}
          <p className='opis'>{t("food_tracker_main")}<br/><span style={{fontSize: '12px', fontWeight: '400', lineHeight: '12px'}}>For now calculation of the percentage of daily needs is based on 55kg semi-active women's profile. Be patient, I'm currnetly working on perosnal data form so everyone can get a reliable information.</span> </p>
          <p className='opis technical'><b>{t("technical_environment")}</b> {t("food_tracker_te_list")} </p>
        </div>
        <div className='img-row butt'>
           <a href="https://food-tracker-roan.vercel.app/" target='_blank' className='live-prev'>{t("live")}</a>
           <a href="https://github.com/NataliaPankowska/food-tracker" target='_blank' className='live-prev git'>GitHub</a>
        </div>
    </div>
  )
}

export default FoodTracker