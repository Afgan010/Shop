import { Link } from "react-router-dom";
import CustomButton from "../../../../components/CustomButton";
import { useContext } from "react";
import { ProductStore } from "../../../../context/ProductsContext";

const ProductCard = ({ data, inCart }) => {
  const { title, images, description, price, id, quantitiy } = data;
  const { addToCart, decrementProduct } = useContext(ProductStore);
  return inCart ? (
    <div className="inCartProduct">
      <div className="productImage">
        <img src={images[0]} alt={title} />
      </div>
      <div className="info">
        <h2 className="title">{title}</h2>
        <p className="price">{price} AZN</p>
        <div className="btnGroup">
          <CustomButton text={"-"} onClick={() => decrementProduct(id)} />
          <span>{quantitiy}</span>
          <CustomButton text={"+"} onClick={() => addToCart(data)} />
        </div>
      </div>
    </div>
  ) : (
    <Link to={`/shop-details/${id}`} className="productCard">
      <div className="productImage">
        <img src={images[0]} alt={title} />
      </div>
      <div className="info">
        <h2 className="title">{title}</h2>
        <p className="details">{description}</p>
        <p className="price">Price: {price} AZN</p>

        <CustomButton
          text={"Add to cart"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(data);
          }}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
