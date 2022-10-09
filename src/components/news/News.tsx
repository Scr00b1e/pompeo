import React from 'react'
import Button from '../../my_UI/button/Button'
import Input from '../../my_UI/input/Input'
import './news.scss'

const News: React.FC = () => {
  return (
    <div className='container'>
        <div className="news">
            <img src="./img/send.png" alt="" className='news__img'/>
            <span className='news__subtitle'>Latest news</span>
            <h1 className='news__title'>Latest news <img src="../img/idk.png" alt="&" /> New updates</h1>
            <div className="news__send">
                <Input inputType={'text'} inputClass={'input'} Placeholder={'Enter your email'}/>
                <Button btnClass={'btn btn-send'} btnText={'SUBSCRIBE'}/>
            </div>
            <div className="news__checkbox">
              <Input inputType={'checkbox'} inputClass={'input checkbox'} Placeholder={''}/>
              <label htmlFor='input'>Sign up for our newsletter</label>
            </div>
        </div>
    </div>
  )
}

export default News