import React from 'react'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'
import Button from '../../my_UI/button/Button'
import './intro.scss'

const Intro: React.FC = () => {
  return (
    <Parallax bgImage='./img/intro.png' strength={200}>
      <div className='intro'>
        <div className="container">
            <div className="intro__inner">
              <div className="intro__words">
                  <p className='intro__subtitle'>Pompeo POttery</p>
                  <h1 className="intro__title">Unique Porcelain</h1>
                  <h1 className="intro__title">Stone Collection</h1>
                  <p className="intro__text">Unique & modern pottery made by our master in porcelain & stones</p>

                  <Link to={'/shop'}>
                    <Button btnText={'Shop Collection'} btnClass={'btn'}/>
                  </Link>
              </div>
              <img src="./img/farfor.png" alt="" className='intro__img'/>
            </div>
        </div>
      </div>
    </Parallax>
  )
}

export default Intro