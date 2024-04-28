import React, { useState } from "react";
import { list } from "../../data/Data";

const RecentCard = ({ setCartCount }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isInCart, setIsInCart] = useState({});

  const addToCart = (property) => {
    setCartCount((countCart) => countCart + 1);
    setCartItems([...cartItems, property]);
    setIsInCart((prevState) => ({ ...prevState, [property.id]: true }));
  };

  const removeFromCart = (propertyId) => {
    setCartCount((countCart) => countCart - 1);
    const updatedCartItems = cartItems.filter((item) => item.id !== propertyId);
    setCartItems(updatedCartItems);
    setIsInCart((prevState) => ({ ...prevState, [propertyId]: false }));
  };

  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { id, cover, category, location, name, price, type } = val;
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className={`fa fa-heart${isInCart[id] ? ' red' : ''}`} onClick={() => isInCart[id] ? removeFromCart(id) : addToCart(val)}></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;




