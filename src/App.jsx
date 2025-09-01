import { Route, Routes } from "react-router-dom";
import Home from "./Modules/Home/View/Home";
import Shop from "./Modules/Shop/View/Shop";
import Header from "./components/Header";
import ShopDetails from "./Modules/Shop/View/ShopDetails";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-details/:productId" element={<ShopDetails />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
