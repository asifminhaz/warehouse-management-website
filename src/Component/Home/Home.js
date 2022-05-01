
import { } from 'bootstrap';
import React, { useState } from 'react';
import { Card, CardGroup, Carousel } from 'react-bootstrap';
import Inventory from '../Inventory/Inventory';
import SingleInventory from '../Inventory/SingleInventory/SingleInventory';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
          const [index, setIndex] = useState(0);

          const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
          };
          return (
                    <div className='banner'>
                            
   <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Drive Me</h1>
          <h1>But Fast</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1555652736-e92021d28a10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 >Road and</h1>
          <h1>track</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Explore Me</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<div>
          <p className='text-center mt-5'>Check out our recent cars</p>
          <h3 className='text-center'>Featured Car</h3>
</div>
<Inventory></Inventory>
<h1 className='text-center m-5 '>Our Services</h1>
<Services></Services>

  


   </div>
          );
};

export default Home;