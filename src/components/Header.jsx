import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../Modules/Cart/View/Cart";
import { useState } from "react";

const Header = () => {
  const [cartIsopen, setCartIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to={"/"}>MyShop</Link>
          </div>
          <nav className="navBar">
            <ul className="navList">
              <li className="navItem">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="navItem">
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li className="navItem">
                <FaShoppingCart onClick={() => setCartIsOpen(true)} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Cart isOpen={cartIsopen} setIsOpen={setCartIsOpen} />
    </header>
  );
};

export default Header;
