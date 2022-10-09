import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice/cartSlice'
import { RootState } from '../../redux/store'
import './card.scss'

type CardProps = {
  image: string
  title: string
  price: number
  id: number
  count: number
}

const Card: React.FC<CardProps> = ({image, title, price, id, count}) => {
  const cartItem = useSelector((state: RootState) => state.cartSlice.subjects.find((obj) => obj.id === id))
  const addedCount = cartItem ? cartItem.count : 0
  const dispatch = useDispatch()

  const onClickAdd = () => {
    const item: CardProps = {
      id,
      title,
      price,
      image,
      count
    }
    dispatch(addItem(item))
  }

  return (
    <div className='card'>
        <div className="card__image">
          <img src={image} alt="" />
        </div>
        <div className="card__bottom">
          <div className="card__words">
            <h1 className="card__title">{title}</h1>
            <p className="card__subtitle">
                $ {price} USD
            </p>
          </div>
          <button className='btn' onClick={onClickAdd}>
            Add {addedCount > 0 && <span>{addedCount}</span>}
          </button>
        </div>
    </div>
  )
}

export default Card