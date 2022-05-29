import React, { useEffect, useState } from 'react';
import useInventories from '../Hooks/useInventories';
import SingleInventory from '../Inventory/SingleInventory/SingleInventory';
import './Inventory.css'


const Inventory = () => {
          
          const [cars, setCars] = useInventories()


          // useEffect(() => {
          //           fetch('data.json')
          //           .then(res => res.json())
          //           .then(data => setCars(data))

          // },[])
          return (
                   
                              
                              <div className="cars-container">
                              {
                                        cars.slice(0, 6).map(car => <SingleInventory
                                        key= {car._id}
                                        car={car}
                                        ></SingleInventory>)
                              }
                              </div>
                             
                         
                   
          );
  };
export default Inventory;