

const Bottle = ({bottle}) => {
    const{id, img, price} = bottle;
    return (
        <div>
            <h3>Bottle:{id}</h3>
            <img src={img} alt="" />
            <p>Price:${price}</p>
        </div>
    );
};

export default Bottle;