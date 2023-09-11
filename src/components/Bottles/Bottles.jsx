import { useState } from "react";
import { useEffect } from "react";



const Bottles = () => {
    const[bottles, setBottles]= useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json()) 
        .then(data => setBottles(data))
}, [])
    return (
        <div>
            <h2>Items:{bottles.length}</h2>
        </div>
    );
};

export default Bottles;