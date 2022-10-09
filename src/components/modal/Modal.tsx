import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../my_UI/button/Button'
import { removeItem } from '../../redux/slices/cartSlice/cartSlice'
import './modal.scss'

type ModalProps = {
  setOpenModal: any
  title: string
  id: number
}

const Modal: React.FC<ModalProps> = ({setOpenModal, title, id}) => {
  const dispatch = useDispatch()

  const onClickCancel = () => {
    setOpenModal(false)
  }

  const onClickYes = () => {
    dispatch(removeItem(id))
    setOpenModal(false)
  }

  return (
    <div className='modal'>
        <div className="modal__content">
            <img src="./img/close.svg" alt="" onClick={onClickCancel}/>
            <div className="modal__words">
                <h1>Are u sure u wanna remove this item?</h1>
                <p>{title}</p>
            </div>
            <div className="modal__buttons">
              <div className="modal__buttons-item" onClick={onClickCancel}>
                <Button btnClass='btn cancel' btnText='Close'/>
              </div>
              <div className="modal__buttons-item" onClick={onClickYes}>
                <Button btnClass='btn' btnText='Yes'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Modal