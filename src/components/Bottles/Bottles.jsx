import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';



const Bottles = () => {
    const[bottles, setBottles]= useState([]);
    const [cart, setCart]= useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json()) 
        .then(data => setBottles(data))
}, [])

    const handlePurchase = (bottle) =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
    }
    return (
        <div>
            <h2 className='app'>Bottle available:{bottles.length}</h2>
            <h3>Cart:{cart.length}</h3>
            <div className="bottles">
                {
                    bottles.map(bottle =>
                         <Bottle key={bottle.id} 
                         bottle={bottle}
                         handlePurchase={handlePurchase}
                         >
                         </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;