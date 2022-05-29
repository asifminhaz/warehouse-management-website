import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useInventories from '../Hooks/useInventories';
import Manage from './Manage';

const UpdateInventory = () => {
const [cars, setCars] = useInventories()
const navigate = useNavigate()



useEffect(() => {
          const url = `http://localhost:5000/inventories`
          fetch(url)
          .then(res => res.json())
          .then(data => setCars(data))
},[])
          
const addItem = () => {
          navigate('/addItem')
}
         
          return (
                    

                    <div>
                    {
                              cars.map(car => <Manage
                              key= {car._id}
                              car={car}
                              ></Manage>)
                    }

                    <button onClick={addItem} className='btn btn-success' >Add Item</button>
                    </div>
          );
};

export default UpdateInventory;