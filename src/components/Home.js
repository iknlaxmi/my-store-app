import React from 'react';
import ProductDetails from './ProductDetails';
import ProductImages from './ProductImages';
import ProductCartData from './ProductCartData';

import EditorNote from './EditorNote';
import { ReactComponent as Line } from '../assets/Line.svg';

const Home = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-x-10 sm:h-screen sm:w-screen sm:mb-0 mb-40">
        <div className="hidden h-[100%] sm:block">
          <ProductDetails />
        </div>
        <div className="h-[100%] no-scrollbar overflow-y-auto">
          <ProductImages />
        </div>
        <div className="h-[100%]">
          <ProductCartData />
        </div>
        <Line className="sm:hidden m-4" />
      </div>

      <EditorNote />
    </div>
  );
};

export default Home;
