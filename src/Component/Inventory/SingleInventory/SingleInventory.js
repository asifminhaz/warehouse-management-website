import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleInventory = ({car}) => {
          const {_id, image, price, name, discription, qauantity, supplier} = car
          const navigate = useNavigate()
          const navigateToInventoryDetail = id => {
                    navigate(`/inventory/${id}`);
                    console.log(id)
          }
          return (
                    <div>
                              <img src={image} alt="/"></img>
                             <h3>{name}</h3>
                             <h5>{price}</h5>
                             <p>{discription}</p>
                             <p>Quantity:{qauantity}</p>
                             <p>Supplier:{supplier}</p>
                             <button onClick={() => navigateToInventoryDetail(_id)} className='btn btn-success'>Update</button>
                    </div>
          );
};

export default SingleInventory;