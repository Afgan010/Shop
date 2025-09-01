import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { title, images, description, price, id } = data;
  return (
    <Link to={`/shop-details/${id}`} className="productCard">
      <div className="productImage">
        <img src={images[0]} alt={title} />
      </div>
      <div className="info">
        <h2 className="title">{title}</h2>
        <p className="details">{description}</p>
        <p className="price">{price} AZN</p>
      </div>
    </Link>
  );
};

export default ProductCard;
