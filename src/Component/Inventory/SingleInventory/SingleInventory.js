import React from 'react';

const SingleInventory = ({car}) => {
          const {image, price, name, discription, quantity, supplier} = car
          return (
                    <div>
                              <img src={image} alt="/"></img>
                             <h3>{name}</h3>
                             <h5>{price}</h5>
                             <p>{discription}</p>
                             <p>Quantity:{quantity}</p>
                             <p>Supplier:{supplier}</p>
                             <button className='btn btn-success'>Update</button>
                    </div>
          );
};

export default SingleInventory;