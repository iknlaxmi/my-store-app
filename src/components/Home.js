import React from 'react';
import ProductDetails from './ProductDetails';
import ProductImages from './ProductImages';
import ProductCartData from './ProductCartData';

import EditorNote from './EditorNote';

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-10 h-screen w-screen">
        <div className="h-[100%]">
          <ProductDetails />
        </div>
        <div className="h-[100%] no-scrollbar overflow-y-auto">
          <ProductImages />
        </div>
        <div className="h-[100%]">
          <ProductCartData />
        </div>
      </div>

      <EditorNote />
    </div>
  );
};

export default Home;
