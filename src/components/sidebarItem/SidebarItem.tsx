import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, CartType, minusItem, removeItem } from '../../redux/slices/cartSlice/cartSlice'
import './sidebarItem.scss'

type PropsType = {
    id: number
    title: string
    price: number
    image: string
    count: number
    onClickRemove: any
}

const SidebarItem: React.FC<PropsType> = ({id, title, price, image, count, onClickRemove}) => {
    //redux
    const dispatch = useDispatch()

    const onClickMinus = () => {
        dispatch(minusItem({id} as CartType))
    }

    const onClickPlus = () => {
        dispatch(addItem({id} as CartType))
    }

    if(count === 0) {
        dispatch(removeItem(id))
    }

  return (
    <>
        <div className='sidebar__item'>
        <div className="sidebar__item-info">
            <img src={image} alt="" className='sidebar__item-img'/>
            <h1 className="sidebar__item-text">
                {title}
            </h1>
        </div>
        <div className="sidebar__item-cash">
            <div className="sidebar__item-counter">
                <div className="sidebar__item-minus" onClick={onClickMinus}>
                    -
                </div>
                <p className="sidebar__item-count">
                    {count}
                </p>
                <div className="sidebar__item-plus" onClick={onClickPlus}>
                    +
                </div>
            </div>
            <p className="sidebar__item-price">
                {price} $
            </p>
        </div>
            <img onClick={onClickRemove} src="./img/close.svg" alt="" className='sidebar__item-close'/>
        </div>
    </>
  )
}

export default SidebarItem