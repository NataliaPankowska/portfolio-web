
import './AboutMe.css';
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className='about-me'>
      <p>{t("main")}</p>
{/* <p>I’m a digital creator based in Aix-en-Provence. I love to design, I love to code, and I love to learn. As a jack-of-all-trades in web design, I transform ideas into clean and functional digital products. I’m currently open to new job opportunities and eager to hear about your exciting projects.</p>     */}
</div>
  )
}

export default AboutMe