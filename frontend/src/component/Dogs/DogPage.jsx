import React from 'react'
import DogCart from './DogCart'
import './dog.css'
const DogPage = (props) => {
    const {allDogs} = props;
    return (
      <>
        <section className='dogs-container'>
          {allDogs.map((dog) => {
            return (
              <div key={dog.id}>
                <DogCart
                  id={dog.id}
                  name={dog.name}
                  breed={dog.breed}
                  price={dog.price}
                  description={dog.description}
                  imageUrl={dog.imageUrl}
                />
              </div>
            )
          })}
        </section>
      </>
    )
}

export default DogPage
