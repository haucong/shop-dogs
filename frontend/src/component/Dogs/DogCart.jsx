import React, { useContext, useState } from 'react'
import './dog.css'
import { CartContext } from '../../contexts/CartContext'
const DogCart = (props) => {
  const {id, name, breed, price, description, imageUrl} = props
  const [ isAdded , setIsAdded] = useState(false)
  const { AddToCart } = useContext(CartContext);
  const {setTotal} = useContext(CartContext);


  const handleSetAdded = () => {
    setIsAdded(true);
    const newIems = {
      name: name,
      price : price,
      imageUrl : imageUrl
    };
    AddToCart((item) => [...item, newIems])
    setTotal((total) => (total += Number(price)))
    }
    return (
      <>
        <section className='dogs'>
          <div className='dogs-info'>
            <p>{name}</p>
            <p>{breed}</p>
          </div>
          <div className='dogs-img-container'>
            <img
              src={imageUrl}
              alt={`picture of: ${name}`}
              className='dog-img'
            />
          </div>
          <div className='dogs-desc'>{description}</div>
          <div className='dogs-price'>{price}$</div>
          {
              isAdded ? (
              
              <button disabled className='dogs-btn-disabled'>ADDED</button>
              
              ):(
                  
                  <button className='dogs-btn-disabled' onClick={handleSetAdded}>ADD TO CART</button>
              )
          }
        </section>
      </>
    )
}

export default DogCart
