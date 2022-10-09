import React from 'react'
import './home.scss'
import About from '../components/about/About'
import Intro from '../components/intro/Intro'
import Products from '../components/products/Products'
import Card from '../components/card/Card'
import Button from '../my_UI/button/Button'
import Shopping from '../components/shopping/Shopping'
import News from '../components/news/News'
import axios from 'axios'
import aos from 'aos'
import 'aos/dist/aos.css'

type CardProps = {
  title: string
  price: number
  image: string
  id: number
}

const Home: React.FC = () => {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    axios.get('https://6290eebe665ea71fe13e1a80.mockapi.io/pizza/pottery')
    .then((arr) => {
      setItems(arr.data)
    })
  })

  React.useEffect(() => {
    aos.init({duration: 2000})
  }, [])

  return (
    <div className='home'>
        <Intro/>
        <About/>
        <Products/>
        <div data-aos='fade-up' className="container">
          <div className="home__words">
            <span className='home__subtitle'>Our online store</span>
            <h1 className='home__title'>Pottery Collection</h1>
          </div>
          <div className="content">
            {
              items.map((obj: CardProps) => (
                <Card count={0} {...obj} key={obj.id}/>
              ))
            }
          </div>
          <div className="home__link">
            <Button btnText={'View All Products'} btnClass={'btn'}/>
          </div>
        </div>
        <Shopping/>
        <News/>
    </div>
  )
}

export default Home