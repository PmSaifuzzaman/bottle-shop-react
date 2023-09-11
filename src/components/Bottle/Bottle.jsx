
import './Bottle.css';

const Bottle = ({bottle, handlePurchase}) => {
    const{id, img, price} = bottle;
    
    return (
        <div className="bottle">
            <h3>Bottle:{id}</h3>
            <img src={img} alt="" />
            <p>Price:${price}</p>
            <button onClick={()=>handlePurchase(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;