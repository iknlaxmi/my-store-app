import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Line } from '../assets/Line.svg';

const EditorNote = () => {
  return (
    <div className=" sm:mt-5 sm:ml-96 text-center sm:w-[650px] justify-center w-[400px]">
      <div className="flex items-center sm:ml-32 ml-12">
        <ul className="flex sm:m-12 sm:p-2 p-2 m-2">
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
      <h3 className="text-xs font-bold text-center sm:mt-0 mt-6">
        A NOTE FROM THE EDITOR
      </h3>
      <p className="font-medium sm:text-2xl mb-5 text-lg">
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky.
      </p>
      <div id="editor" className=" flex mb-10 sm:ml-48 ml-10">
        <Line className="" />

        <p className="inline text-sm -mt-2">&nbsp;By&nbsp;</p>
        <p className="inline underline text-sm -mt-2">MINNA SHIM,&nbsp;</p>
        <p className="inline text-sm -mt-2">Fashion Editor</p>
      </div>
    </div>
  );
};

export default EditorNote;
