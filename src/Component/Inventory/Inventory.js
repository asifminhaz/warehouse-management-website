import React, { useEffect, useState } from 'react';
import SingleInventory from '../Inventory/SingleInventory/SingleInventory';
import './Inventory.css'


const Inventory = () => {
          const [cars, setCars] = useState([])

          useEffect(() => {
                    fetch('data.json')
                    .then(res => res.json())
                    .then(data => setCars(data))

          },[])
          return (
                    <div>
                              
                              <div className="cars-container">
                              {
                                        cars.map(car => <SingleInventory
                                        key= {car.id}
                                        car={car}
                                        ></SingleInventory>)
                              }
                              </div>
                             
                         
                    </div>
          );
  };
export default Inventory;