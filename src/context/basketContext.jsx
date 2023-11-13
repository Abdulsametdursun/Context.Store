import { useState, createContext } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    const found = basket.find((i) => i.id === product.id);

    if (found) {
      // add + 1
      const updated = { ...found, amount: found.amount + 1 };
      // remove old item and add new one in to the cart
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );
      // update the state
      setBasket(newBasket);
    } else {
      // add to cart and make value 1
      setBasket([...basket, { ...product, amount: 1 }]);
    }
  };

  const removeFromBasket = (delete_id) => {
    // find the item in cart
    const found = basket.find((i) => i.id == delete_id);

    if (found.amount > 1) {
      // remove 1 item
      const updated = { ...found, amount: found.amount - 1 };
      // remove old item and add new one in to the cart
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );
      setBasket(newBasket);
    } else {
      // remove from cart
      const filtred = basket.filter((i) => i.id !== delete_id);
      setBasket(filtred);
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
