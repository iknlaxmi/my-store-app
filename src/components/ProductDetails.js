import React from 'react';

const ProductDetails = () => {
  return (
    <div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4 font-bold">DETAILS</li>
          <li className="text-gray-400 px-4">DELIVERY</li>
          <li className="text-gray-400 px-4">FIT</li>
          <li className="text-gray-400 px-4">SHARE</li>
        </ul>
      </div>
      <p className="m-4 w-[332px]">
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky. it
        has a straight fit with well defined shoulders and a shawl collar
        culminating in a button and has been flawlessly finished with three jet
        pockets with a sartorial feel.
      </p>
      <div className="m-4">
        See the{' '}
        <a href="#editor" className="underline">
          EDITOR’S NOTE
        </a>
      </div>
      <div className="m-4">
        Learn about the <span className="underline">DESIGNER</span>{' '}
      </div>
    </div>
  );
};

export default ProductDetails;
