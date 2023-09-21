import React from 'react';
import { Link } from 'react-router-dom';
import frame1 from '../assets/Frame1.png';
import frame2 from '../assets/Frame2.png';
import frame3 from '../assets/Frame3.png';
import frame4 from '../assets/Frame4.png';
import frame5 from '../assets/Frame5.png';
import { ReactComponent as Heart } from '../assets/heart.svg';

import { Carousel } from '@material-tailwind/react';

const ProductImages = () => {
  return (
    <div>
      <div className="sm:fixed ml-96 mt-2 sm:mt:0">
        <Heart />
      </div>
      {/*For mobile*/}
      <div>
        <Carousel className="visible sm:hidden rounded-xl">
          <img
            src={frame5}
            alt="farme5"
            className="h-full w-full object-cover"
          />

          <img
            src={frame1}
            alt="farme1"
            className="h-full w-full object-cover"
          />

          <img
            src={frame2}
            alt="farme2"
            className="h-full w-full object-cover"
          />

          <img
            src={frame4}
            alt="farme4"
            className="h-full w-full object-cover"
          />

          <img
            src={frame3}
            alt="farme3"
            className="h-full w-full object-cover"
          />
        </Carousel>
        {/*For desktop */}
        <ul className="hidden sm:block">
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
            <div className="float-left">
              <p className="relative -mb-2 ml-32 text-sm font-bold">
                {' '}
                VIEW MORE LIKE THIS PRODUT
              </p>
              <img src={frame4} alt="farme4" />
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
