import { createContext, useState } from "react";

export const ProductStore = createContext({});

export const ProductContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (data) => {
    const existing = cart.find((item) => item.id == data.id);
    if (existing) {
      const updated = cart.filter((product) => {
        if (product.id === existing.id) {
          return { ...product, quantitiy: product.quantitiy++ };
        } else {
          return product;
        }
      });
      setCart(updated);
    } else {
      setCart((prev) => [...prev, { ...data, quantitiy: 1 }]);
    }
  };

  const decrementProduct = (id) => {
    const updated = cart
      .map((item) => {
        if (item.id === id) {
          if (item.quantitiy > 1) {
            return { ...item, quantitiy: item.quantitiy - 1 };
          } else {
            removeProduct(id);
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);

    setCart(updated);
  };

  const removeProduct = (id) => {
    const isValid = confirm("Silinsin?");
    if (isValid) {
      const updated = cart.filter((item) => item.id !== id);
      setCart(updated);
    }
  };

  const globalStates = {
    cart,
    setCart,
    addToCart,
    decrementProduct,
  };
  return (
    <ProductStore.Provider value={globalStates}>
      {children}
    </ProductStore.Provider>
  );
};
