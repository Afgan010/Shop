import { FaRegWindowClose } from "react-icons/fa";
import ProductCard from "../../Shop/View/components/ProductCard";
import { useContext } from "react";
import { ProductStore } from "../../../context/ProductsContext";

const Cart = ({ isOpen, setIsOpen }) => {
  const { cart } = useContext(ProductStore);
  return (
    <>
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className={`cart ${isOpen ? "active" : ""}`}>
        <div className="head">
          <h2>Cart</h2>
          <FaRegWindowClose onClick={() => setIsOpen(false)} />
        </div>
        <div className="cartBox">
          {cart.map((item) => (
            <ProductCard inCart data={item} />
          ))}
          {cart.length === 0 && <p>Cart is empty</p>}
        </div>
      </div>
    </>
  );
};

export default Cart;
