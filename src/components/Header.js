import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { PiShoppingCartSimpleThin } from 'react-icons/pi';
// import searchSvg from '../assets/icons/Bag.png';
import { ReactComponent as Bag } from '../assets/Bag.svg';
import { ReactComponent as Account } from '../assets/Account.svg';
import { ReactComponent as Search } from '../assets/Search.svg';
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="p-5 m-5 my-8 text-lg">
        <Link to="/">
          <h1>MY COMPANY.COM</h1>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-10">
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
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2">
            <Search />
          </li>
          <li className="px-2">
            <Bag />
          </li>
          <li className="px-2">
            <Account />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
