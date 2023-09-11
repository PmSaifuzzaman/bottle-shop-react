import { useEffect, useState } from 'react';
import './Bottle.css';

const Bottle = ({bottle}) => {
    const{id, img, price} = bottle;
    // State declear
    const[purchase, setPurchase]=useState([]);
    // Use effect declear
    
    return (
        <div className="bottle">
            <h3>Bottle:{id}</h3>
            <img src={img} alt="" />
            <p>Price:${price}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default Bottle;