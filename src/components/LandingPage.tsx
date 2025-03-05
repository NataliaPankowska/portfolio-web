
import Heading from './Heading'
import './LandingPage.css';
import AboutMe from './AboutMe';
import DevSection from './DevSection';

import OfferSection from './OfferSection';

const LandingPage = () => {

  return (
    <>
    <div className='section'>
      <div className='container'>
        <Heading />
        <AboutMe />
      </div>
      </div>
      <div className='section dev'>
      <div className='container two' >
  
        <DevSection />
       
      </div>
        </div>
        <div className='skills-section'>
        <div className='container two'>
          <OfferSection />
        </div>

      </div>
    
    </>
  )
}

export default LandingPage