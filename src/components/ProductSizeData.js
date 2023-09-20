import React, { useState } from 'react';
import clsx from 'clsx';
import { ReactComponent as LineStrike } from '../assets/LineStrike.svg';

const ProductSizeData = () => {
  const [sizeData, setSizeData] = useState('L');
  const [mediumSizeUnavailable, setMediumSizeUnavailable] = useState(true);

  return (
    <div>
      <div className=" flex mt-10">
        <p className="ml-4">SIZE {sizeData}</p>
        <p className="underline ml-60">SIZE GUIDE</p>
      </div>
      <div className="flex flex-wrap">
        <button
          className={clsx(
            'border-2 rounded-xl w-[75px] h-[30px] m-3',
            sizeData === 'XS' ? 'bg-black text-white' : ''
          )}
          onClick={() => setSizeData('XS')}
        >
          XS
        </button>
        <button
          className={clsx(
            'border-2 rounded-xl w-[75px] h-[30px] m-3',
            sizeData === 'S' ? 'bg-black text-white' : ''
          )}
          onClick={() => setSizeData('S')}
        >
          S
        </button>
        <button
          className={clsx(
            'border-2 rounded-xl w-[75px] h-[30px] m-3',
            sizeData === 'M' ? 'bg-black text-white' : ''
          )}
          disabled={mediumSizeUnavailable}
          onClick={() => setSizeData('M')}
        >
          <p className="fixed ml-5 mt-2">
            {mediumSizeUnavailable && <LineStrike />}
          </p>{' '}
          M
        </button>
        <button
          className={clsx(
            'border-2 rounded-xl w-[75px] h-[30px] m-3',
            sizeData === 'L' ? 'bg-black text-white' : ''
          )}
          onClick={() => setSizeData('L')}
        >
          L
        </button>
        <button
          className={clsx(
            'border-2 rounded-xl w-[75px] h-[30px] m-3',
            sizeData === 'XL' ? 'bg-black text-white' : ''
          )}
          onClick={() => setSizeData('XL')}
        >
          XL
        </button>
      </div>
    </div>
  );
};

export default ProductSizeData;
