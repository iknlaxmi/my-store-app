import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Line } from '../assets/Line.svg';

const EditorNote = () => {
  return (
    <div className=" mt-5 ml-96 text-center w-[650px] justify-center">
      <div className="flex items-center ml-32">
        <ul className="flex m-12 p-4">
          <li className="px-4 text-xs underline">
            <Link to="\jonathanSimkhai">JONATHAN SIMKHAI</Link>
          </li>
          <li className="px-4 underline text-xs">
            <Link to="\blazers">BLAZERS</Link>
          </li>
          <li className="px-4 underline text-xs">
            <Link to="\viscose">VISCOSE</Link>
          </li>
        </ul>
      </div>
      <h3 className="text-xs font-bold text-center">A NOTE FROM THE EDITOR</h3>
      <p className="font-medium text-2xl mb-5">
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky.
      </p>
      <div id="editor" className=" flex mb-10 ml-48">
        <Line className="" />

        <p className="inline text-sm -mt-2">&nbsp;By&nbsp;</p>
        <p className="inline underline text-sm -mt-2">MINNA SHIM,&nbsp;</p>
        <p className="inline text-sm -mt-2">Fashion Editor</p>
      </div>
    </div>
  );
};

export default EditorNote;
