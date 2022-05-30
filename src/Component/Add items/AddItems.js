import React from 'react';
import { useForm } from "react-hook-form";
const AddItems = () => {
          const { register, handleSubmit } = useForm();
    
          const onSubmit = data => {
              console.log(data);
              const url = `http://localhost:5000/inventories`;
              fetch(url, {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(data)
              })
              .then(res=> res.json())
              .then(result =>{
                  console.log(result);
              } )
          };
          return (
                    <div>
                             <h4>Add new Items</h4> 
                             <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='email' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='btn btn-success' type="submit" value="Add" />
            </form>
                    </div>
          );
};

export default AddItems;