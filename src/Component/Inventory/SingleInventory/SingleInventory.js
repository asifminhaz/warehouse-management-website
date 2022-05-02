import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleInventory = ({car}) => {
          const {id, image, price, name, discription, quantity, supplier} = car
          const navigate = useNavigate()
          const navigateToInventoryDetail = id => {
                    navigate(`/inventory/${id}`);
          }
          return (
                    <div>
                              <img src={image} alt="/"></img>
                             <h3>{name}</h3>
                             <h5>{price}</h5>
                             <p>{discription}</p>
                             <p>Quantity:{quantity}</p>
                             <p>Supplier:{supplier}</p>
                             <button onClick={() => navigateToInventoryDetail(id)} className='btn btn-success'>Update</button>
                    </div>
          );
};

export default SingleInventory;