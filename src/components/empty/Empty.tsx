import React from 'react'

const Empty: React.FC = () => {
  return (
    <div className='empty'>
        <img src="./img/empty-cart.png" alt="" />
        <h1>
            Cart is empty
        </h1>
        <p>
         For make order u have to order card   
        </p>
    </div>
  )
}

export default Empty