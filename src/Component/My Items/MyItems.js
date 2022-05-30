import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../LogIn/Loading';


const Myitems = () => {
//           const [product, setProduct] = useState([])
//           const [user, loading] = useAuthState(auth)
// console.log(user?.email)
// useEffect(() => {
//           fetch(`http://localhost:5000/inventories/${user?.email}`)
//               .then(res => res.json())
//               .then(data => setProduct(data))
//       }, [])

// if(loading){
//           return <Loading></Loading>
// }

          return (
                    <div>
                              {/* <h1>{product.length}</h1> */}

                    </div>
          );
};

export default Myitems;