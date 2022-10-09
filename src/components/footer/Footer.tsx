import React from 'react'
import './footer.scss'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer__inner">
                <img src="./img/pompeo.png" alt="" className='footer__img'/>
                <p className='footer__text'>I have always striven to fix beauty in wood, stone,</p>
                <p className='footer__text'>glass or pottery, that has been my creed.</p>
                <div className="footer__info">
                    <div className="footer__item">
                        <img src="./img/footer/1.png" alt="" />
                        <h1 className='footer__title'>email</h1>
                        <span className='footer__subtitle'>pompeopotery@gmail.com</span>
                    </div>
                    <div className="footer__item">
                        <img src="./img/footer/2.png" alt="" />
                        <h1 className='footer__title'>FIND</h1>
                        <span className='footer__subtitle'>Central Park, Manhattan</span>
                        <span className='footer__subtitle'>New York, 1101</span>
                    </div>
                    <div className="footer__item">
                        <img src="./img/footer/3.png" alt="" />
                        <h1 className='footer__title'>CALL</h1>
                        <span className='footer__subtitle'>+1 292 345 678</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__foot">
            <div className="container">
                <div className="footer__foot-words">
                    <span className='footer__foot-text'>Template design by</span>
                    <h1 className='footer__foot-title'>Dorian Hoxha</h1>
                    <h1 className='footer__foot-title'>-</h1>
                    <h1 className='footer__foot-title'>Image License Info</h1>
                    <span className='footer__foot-text'>Powered by</span>
                    <h1 className='footer__foot-title'>Webflow</h1>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer