import './OfferSection.css';
import { useTranslation } from "react-i18next";

const OfferSection = () => {
  const {t} = useTranslation();
  return (
    <>
    <div className='offerSection'>
    <h2 className='skills'>{t("skills")}</h2>
      <div className='sub-offer'>
        
        <h3 className='category web'>{t("web design")}</h3>
        <h4 className='detail'>{t("responsivenes")}</h4>
        <h4 className='detail'>{t("navigation_and_user_experience")}</h4>
        <h4 className='detail'>{t("custom_user_interface")}</h4>
        <h4 className='detail'>{t("flexible_and_scalable_websites")}</h4>
        <h4 className='detail'>{t("search_engine_optimization_SEO")}</h4>
        <h4 className='detail'>{t("e_commerce")}</h4>
        <h4 className='detail'>{t("UX/UI")}</h4>
        
       </div>
      
       <div className='sub-offer'> 
        
        <h3 className='category graph'>{t("graphic_design")}</h3>
        <h4 className='detail'>{t("visual_identity")}</h4>
        <h4 className='detail'>{t("motion_design")}</h4>
        <h4 className='detail'>{t("web_prototype")}</h4>

        <h3 className='category dev'>{t("web_develpement")}</h3>
        <h4 className='detail'>{t("front_end")}</h4>
        <h4 className='detail'>{t("HTML_CSS_javaSrcipt")}</h4>
        <h4 className='detail'>{t("TypeScript")}</h4>
        <h4 className='detail'>{t("React")}</h4>
        <h4 className='detail'>{t("CMS_content_management_system")}</h4>
        <h4 className='detail'>{t("wordpress")}</h4>
        <h4 className='detail'>{t("webflow")}</h4>
        </div>
        <h2 className='skills cont'>Contact</h2>
        <div className='sub-offer contact'>
       
        <h4 className='detail'>Natalia Pańkowska</h4>
        <h4 className='detail'>npankowska@gmail.com</h4>
        <h4 className='detail'>(+33) 07 58 04 72 36</h4>
        </div>



      
    </div>
    </>
  )
}

export default OfferSection