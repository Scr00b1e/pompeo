import React from 'react'
import { Parallax } from 'react-parallax'
import Button from '../../my_UI/button/Button'
import './shopping.scss'

const Shopping: React.FC = () => {
  return (
    <Parallax bgImage='./img/background.png' bgImageAlt='Background' strength={230}>
      <div className='shopping'>
        <div className="container">
            <div className="shopping__inner">
                <span className='shopping__subtitle'>Pompeo POttery</span>
                <h1 className="shopping__title">
                    Ready to start shopping?
                </h1>
                <p className='shopping__text'>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span> .
                <p>Suspendisse varius enim in eros elementum.</p></p>
                <Button btnClass={'btn'} btnText={'New Collection'}/>
            </div>
        </div>
      </div>
    </Parallax>
  )
}

export default Shopping