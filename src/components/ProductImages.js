import React from 'react';
import { Link } from 'react-router-dom';
import frame1 from '../assets/Frame1.png';
import frame2 from '../assets/Frame2.png';
import frame3 from '../assets/Frame3.png';
import frame4 from '../assets/Frame4.png';
import frame5 from '../assets/Frame5.png';

const ProductImages = () => {
  return (
    <div>
      <div>
        <ul>
          <li className="my-2">
            <img src={frame5} alt="farme5" />
          </li>
          <li className="my-2 mb-2">
            <div className="float-left w-[210px]">
              <img src={frame1} alt="farme1" />
            </div>
            <div className="float-left w-[210px]">
              <img src={frame2} alt="farme2" />
            </div>
          </li>
          <li className="my-1">
            <div className="relative top-3">
              <img src={frame4} alt="farme4" />
              <div className="font-bold text-xs absolute top-[238px] left-[140px] m-4">
                VIEW MORE LIKE THIS PRODUT
              </div>
            </div>
          </li>
          <li className="my-4">
            <img src={frame3} alt="farme3" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductImages;
