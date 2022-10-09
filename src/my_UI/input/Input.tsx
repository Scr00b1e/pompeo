import React from 'react'
import './input.scss'

type InputProps = {
    inputClass: string
    Placeholder: string
    inputType: string
}

const Input: React.FC<InputProps> = ({inputClass, Placeholder, inputType}) => {
  return (
    <input type={inputType} className={inputClass} placeholder={Placeholder}/>
  )
}

export default Input