import React from 'react'
import './button.scss'

type ButtonProps = {
    btnText: string
    btnClass: string
}

const Button: React.FC<ButtonProps> = ({btnText, btnClass}) => {
  return (
    <button className={btnClass}>
        {btnText}
    </button>
  )
}

export default Button