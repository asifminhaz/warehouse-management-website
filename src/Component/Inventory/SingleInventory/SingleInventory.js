import React from 'react';

const SingleInventory = ({car}) => {
          const {image, price, name, discription} = car
          return (
                    <div>
                              <img src={image} alt="/"></img>
                             <h3>{name}</h3>
                             <h5>{price}</h5>
                             <p>{discription}</p>
                    </div>
          );
};

export default SingleInventory;