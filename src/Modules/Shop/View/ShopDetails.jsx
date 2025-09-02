import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopService } from "../Services/ShopService";
import CustomButton from "../../../components/CustomButton";
import Loading from "../../../components/Loading";
import { ProductStore } from "../../../context/ProductsContext";

const ShopDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(ProductStore);
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    images: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const image = productDetails?.images[0];

  const getDetails = async () => {
    setLoading(true);
    try {
      const res = await ShopService.productDetails(productId);
      setProductDetails(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, [productId]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="shopDetails">
      <div className="container">
        <div className="row">
          <div className="leftSide">
            <img src={image} alt={productDetails.title} />
          </div>
          <div className="rightSide">
            <h2 className="title">{productDetails.title}</h2>
            <div className="category">
              Category: {productDetails.category?.name}
            </div>
            <p className="details">{productDetails.description}</p>
            <p className="price">{productDetails.price} AZN</p>
            <CustomButton
              text={"Add to cart"}
              onClick={() => addToCart(productDetails)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;
