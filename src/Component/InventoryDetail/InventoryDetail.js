import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
const InventoryDetail = () => {
          const {inventoryId} = useParams()   
          const [inventory, setInventory] = useState({});
          const quantityRef = useRef(0)
          const {_id, name, price, discription, image, qauantity} = inventory
          useEffect(() => {
            const url = `http://localhost:5000/inventories/${inventoryId}`
            fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
  },[])
    
const deliveryProduct = (id) => {
    const newQuantity = qauantity - 1
    console.log(newQuantity)

    if (newQuantity > -1) {
          fetch(`http://localhost:5000/inventories/${inventoryId}`, {
                method: 'PUT',
                body: JSON.stringify({
                      newQuantity
                }),
                headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                },
          })
                .then((response) => response.json())
                .then((json) => {
                      toast(json.success)
                });

    }
    else {
          toast('Sorry No Quantity. Please Add quantity')

    }

}


// stock
const addQuantity = event => {
    event.preventDefault()
    const addedQuantity = quantityRef.current.value

    if (addedQuantity > 0) {
          const newQuantity = parseInt(qauantity) + parseInt(addedQuantity)


          fetch(`http://localhost:5000/inventory/${inventoryId}`, {
                method: 'PUT',
                body: JSON.stringify({
                      newQuantity
                }),
                headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                },
          })
                .then((response) => response.json())
                .then((json) => {
                      toast(json.success)
                });

    }
    else {
          toast('please enter a positive value')
    }
}

          return (
                    <div>
                        <h2 className='text-center'>WELCOME TO inventory</h2>  
                        <img src={inventory?.image} alt=""></img>
                                  <h2>{inventory?.name}</h2>    
                                  <h2>{inventory?.price}</h2>
                                  <p>{inventory?.discription}</p>
                                  <p>Supplier:{inventory?.supplier}</p>
                                  <h4>Quantity:{inventory?.qauantity}</h4>  

                                   <button onClick={()=> deliveryProduct () } className="btn btn-success">Delivery</button>

                                   <div className='p-2'>
                                       <input placeholder='Enter Quantity' ref={quantityRef} type="number" name="number" id="" />
                                       <button onClick={addQuantity} className="btn btn-success">stock</button>
                                   </div>
                                    


                                
                                  
                    </div>
                    
          );
};

export default InventoryDetail;