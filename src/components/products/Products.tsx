import React from 'react'
import './products.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Products: React.FC = () => {
    React.useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

  return (
    <div className="products">
        <div className='container'>
            <div className="products__inner">
                <div className="products__item">
                    <img data-aos='fade-right' src="./img/farfor1.png" alt="" className='products__img'/>
                    <div data-aos='fade-left' className="products__words">
                        <h1 className='products__title'>Gold & Black Pottery</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
                        <span>View Details</span>
                    </div>
                </div>
                <div className="products__item">
                    <div data-aos='fade-right' className="products__words">
                        <h1 className='products__title'>Orange Ceramic</h1>
                        <p>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
                        <span>View Details</span>
                    </div>
                    <img data-aos='fade-left' src="./img/farfor2.png" alt="" className='products__img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products