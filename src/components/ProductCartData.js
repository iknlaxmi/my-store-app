import React, { useState } from 'react';
import color from '../assets/color.png';
import conchiglia from '../assets/conchiglia.png';
import ProductSizeData from './ProductSizeData';

const ProductCartData = () => {
  const [cartItems, setCartItems] = useState(0);

  const handleCartItems = () => {
    setCartItems(cartItems + 1);
  };
  return (
    <div>
      <h1 className="text-6xl font-medium">JONATHAN SIMKHAI</h1>
      <p>Lurex Linen Viscose Jacket in Conchiglia</p>
      <p>$225</p>

      <div className="float-left m-2 p-2">
        <p className="font-bold">COLOR</p>
        <img className="border border-black" src={color} alt="color" />
      </div>
      <div className="m-2 p-2">
        <p>CONCHIGLIA</p>
        <img className="border-2" src={conchiglia} alt="conchiglia" />
      </div>
      <ProductSizeData />
      <div className="w-[390px] h-[45px] bg-black text-white rounded-2xl text-center p-2 m-2">
        <button onClick={handleCartItems}>ADD TO BAG -&gt;</button>
      </div>
      <div className="w-[390px] p-4 m-4 text-sm ">
        <p>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
        <p>Speak to a Personal Stylist CHAT NOW</p>
      </div>
    </div>
  );
};

export default ProductCartData;
