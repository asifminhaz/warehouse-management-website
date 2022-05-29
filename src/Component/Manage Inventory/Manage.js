import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Manage = ({car}) => {
          const {_id, image, price, name, discription, qauantity, supplier} = car
          

         

         const handleDelete =(id) => {
          fetch(`http://localhost:5000/inventories/${id}`, {
                    method: 'DELETE',
          })
       
                    .then(res => res.json())
                    .then(data => console.log(data))
          }
          return (

                    
                    <Card style={{ width: '100%' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {discription}
    </Card.Text>
    <Card.Text>
      {qauantity}
    </Card.Text>
    <Card.Text>
      {supplier}
    </Card.Text>
    <Card.Text>
      {price}
    </Card.Text>
    <button className='btn btn-danger' onClick={() => handleDelete (_id)}>Delete</button>
  </Card.Body>
</Card>

          //           <div>
           
          //                      <img src={image} alt="/"></img>
          //                     <h3>{name}</h3>
          //                     <h5>{price}</h5>
          //                     <p>{discription}</p>
          //                     <p>Quantity:{qauantity}</p>
          //                     <p>Supplier:{supplier}</p>
          //                   <button className='btn btn-danger'>Delete</button>
                          
                             
          //         </div>
          );
};

export default Manage;