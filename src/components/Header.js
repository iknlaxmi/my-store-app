import { Link } from 'react-router-dom';

import { ReactComponent as Bag } from '../assets/Bag.svg';
import { ReactComponent as Account } from '../assets/Account.svg';
import { ReactComponent as Search } from '../assets/Search.svg';
import { useState } from 'react';
import clsx from 'clsx';

import { ReactComponent as NavLine } from '../assets/navLine.svg';
const Header = () => {
  const [navCollapse, setNavCollapse] = useState(false);

  /*Nav bar operation for mobile */
  const handleCollapse = () => {
    if (navCollapse === true) {
      setNavCollapse(false);
    } else {
      setNavCollapse(true);
    }
  };
  return (
    <div>
      <div className="flex sm:justify-between">
        <div className="sm:p-5 m-3 sm:my-8 text-lg">
          <Link to="/">
            <h1>MY&nbsp;COMPANY.COM</h1>
          </Link>
        </div>
        {/*For Desktop */}
        <div className="hidden sm:visible sm:flex sm:items-center ">
          <ul className="flex  p-4 m-10">
            <li className="px-3">
              <Link to="/theEdit">THE EDIT</Link>
            </li>
            <li className="px-3">
              <Link to="/newArrivals">NEW ARRIVALS</Link>
            </li>
            <li className="px-3">
              <Link to="/designers">DESIGNERS</Link>
            </li>
            <li className="px-3">
              <Link to="/clothing">CLOTHING</Link>
            </li>
            <li className="px-3">
              <Link to="/shoes">SHOES</Link>
            </li>
            <li className="px-3">
              <Link to="/bags">BAGS</Link>
            </li>
            <li className="px-3">
              <Link to="/accessories">ACCESSORIES</Link>
            </li>
            <li className="px-3">
              <Link to="/jewelry">JEWELRY</Link>
            </li>
            <li className="px-3">
              <Link to="/beauty">BEAUTY</Link>
            </li>
            <li className="px-3">
              <Link to="/">HOME</Link>
            </li>
          </ul>
        </div>

        <div className="sm:flex sm:items-center sm:ml-0 sm:mt-0 ml-56 mt-4">
          <ul className="flex sm:p-4 sm:m-4">
            <li className="px-2">
              <Search />
            </li>
            <li className="px-2">
              <Bag />
            </li>
            <li className="sm:hidden">
              <button onClick={handleCollapse}>
                <NavLine className="" />
                <NavLine className="mt-1" />
              </button>
            </li>
            <li className="hidden sm:block px-2">
              <Account />
            </li>
          </ul>
        </div>
      </div>
      {/* for mobile*/}
      <div className="sm:hidden">
        <div
          className={clsx(
            'items-center sm:hidden  m-4 p-4 ml-5',
            navCollapse === true ? 'hidden' : ''
          )}
        >
          <ul
            className={clsx(
              'flex flex-col ',
              navCollapse === true ? 'collapse' : ''
            )}
          >
            <li className="px-3 w-[100%] bg-gray-200 m-2">
              <Link to="/theEdit">THE EDIT</Link>
            </li>
            <li className="px-3 w-[100%] bg-gray-200 m-2">
              <Link to="/newArrivals">NEW ARRIVALS</Link>
            </li>
            <li className="px-3 w-[100%] bg-gray-200 m-2">
              <Link to="/designers">DESIGNERS</Link>
            </li>
            <li className="px-3 w-[100%] bg-gray-200 m-2">
              <Link to="/clothing">CLOTHING</Link>
            </li>
            <li className="px-3 w-[100%] bg-gray-200 m-2">
              <Link to="/shoes">SHOES</Link>
            </li>
            <li className="px-3 w-[100%] bg-gray-200 m-2">
              <Link to="/bags">BAGS</Link>
            </li>
            <li className="px-3 w-[100%] bg-gray-200 m-2">
              <Link to="/accessories">ACCESSORIES</Link>
            </li>
            <li className="px-3 w-[100%] bg-gray-200 m-2">
              <Link to="/jewelry">JEWELRY</Link>
            </li>
            <li className="px-3 w-[100%] bg-gray-200 m-2">
              <Link to="/beauty">BEAUTY</Link>
            </li>
            <li className="px-3 w-[100%] bg-gray-200 m-2">
              <Link to="/">HOME</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
