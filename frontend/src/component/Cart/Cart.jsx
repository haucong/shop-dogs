import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router'
import './Cart.css'
const Cart = () => {
    const { myCart, total, AddToCart, setTotal } = useContext(CartContext)
     let navigate = useNavigate()
    const handleDone = () => {
      AddToCart([{}]);
      setTotal(0)
    }
    const handleReturnHome = () => {
        navigate('/')
    }
    return (
      <>
        <div className='cart-container'>
          <div className='cart-header'>Checkout:</div>
          <div className='cart-items'>
            {myCart.slice(1).map((item) => {
              return (
                <div className='cart-item' key={item.id}>
                  <img className='cart-item-img' src={item.imageUrl} alt='' />
                  {item.name}: {item.price} $
                </div>
              )
            })}

            <div className='cart-toal'>TOTAL: {total} $ </div>
          </div>
          <button className='cart-checkout' onClick={handleDone}>
            Delete cart
          </button>
          <button className='cart-gohome' onClick={handleReturnHome}>
            RETURN HOME
          </button>
        </div>
      </>
    )
}

export default Cart
