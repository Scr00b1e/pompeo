import React from 'react'
import './about.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About: React.FC = () => {
  React.useEffect(() => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <div className='container'>
        <div className="about">
          <div data-aos='fade-up' className="about__inner">
            <span className='about__subtitle'>Product Categories</span>
            <h1 className='about__title'>Porcelain <img src="../img/idk.png" alt="&" /> Pottery</h1>

            <div className="about__images">
              <div className="about__item-first">
                <img src="./img/rectangles/1-image.png" alt="" className='about__img'/>
                <h1 className='about__item-text'>Vases</h1>
              </div>
              <div className="about__item-second">
                <img src="./img/rectangles/2-image.png" alt="" />
                <h1 className='about__item-text'>Vases</h1>
              </div>
              <div className="about__item-third">
                <img src="./img/rectangles/3-image.png" alt="" />
                <h1 className='about__item-text'>Vases</h1>
              </div>
            </div>

            <div className="about__words">
              <div className="about__words-left">
                <h1>Hand Grafted</h1>
                <h1>Pottery since 1990</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
              </div>
              <div className="about__words-right">
                <h1>We Provide Premium</h1>
                <h1>Pottery Produts</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About