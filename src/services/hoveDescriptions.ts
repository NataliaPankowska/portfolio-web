import imgOne from '../assets/pankoski-strona/pankowski-cykl.png';
import imgTwo from '../assets/food-tracker/main-mobile.png';
import imgThree from '../assets/photo-portfolio/gallery-mobile.png';
import { useTranslation } from 'react-i18next';

export const useHoverDescriptions = () => {
    const {t} = useTranslation();
    return[
        { 
          key: 'one', 
          title: t("pankowski_portfolio_hover_title"), 
          description: t("pankowski_portfolio_hover"), 
          img_url: imgOne
        }, 
        {
          key: 'two', 
          title: t("food_tracker_hover_title"), 
          description: t("food_tracker_hover"), 
          img_url: imgTwo
        }, 
        {
          key: 'three', 
          title: t("portfolio_template_hover_title"), 
          description: t("portfolio_template_hover"), 
          img_url: imgThree
        }];
};