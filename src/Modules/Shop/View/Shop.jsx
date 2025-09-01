import { useEffect, useState } from "react";
import { ShopService } from "../Services/ShopService";
import ProductCard from "./components/ProductCard";
import CustomButton from "../../../components/CustomButton";
import Loading from "../../../components/Loading";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setshowAll] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await ShopService.productsList();
      setProducts(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="shop">
      <div className="container">
        <div className="row">
          <h2 className="title">Shop Page</h2>
          <div className="productBox">
            {products.slice(0, showAll ? 999999 : 8).map((item) => (
              <ProductCard data={item} key={item.id} />
            ))}
          </div>
          <CustomButton
            onClick={() => setshowAll(!showAll)}
            text={showAll ? "Show less" : "Show more"}
          />
        </div>
      </div>
    </section>
  );
};

export default Shop;
