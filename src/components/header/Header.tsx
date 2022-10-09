import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import BurgerNav from '../burgerNav/BurgerNav'

type HeaderProps = {
  onClickCart: any
}

const Header: React.FC<HeaderProps> = ({onClickCart}) => {
  const [burgerOpen, setBurgerOpen] = React.useState(false)

  const onClickBurger = () => {
    setBurgerOpen(!burgerOpen)
  }

  return (
    <div className='header'>
      <div className="container">
        <div className='header__inner'>
          <Link to='/'>
            <img src="./img/Pompeo.png" alt="Pompeo" />
          </Link>
          <nav className='header__navigation'>
            <ul className='header__list'>
              <Link to='/'>
                <li className='header__list-item'>Home</li>
              </Link>
              <li className='header__list-item'>About</li>
              <Link to='/shop'>
                <li className='header__list-item'>Shop</li>
              </Link>
              <li className='header__list-item'>Contact</li>
            </ul>
            <div className="header__cart" onClick={onClickCart}>
              <img src="./img/cart.png" alt="Cart" />
              Cart
            </div>
          </nav>
          <div className="burger__parent">
            <div className={burgerOpen ? 'burger open' : 'burger'} onClick={onClickBurger}>
              <div className='burger__menu'>Burger</div>
            </div>
            {
              burgerOpen && <BurgerNav/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header