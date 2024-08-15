import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);
  function addBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index !== -1) {
      basket[index].count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  }
  function decreaseBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (basket[index].count > 1) {
      basket[index].count--;
      setBasket([...basket]);
    }
  }

  function removeBasket(item) {
    setBasket(basket.filter((x) => x._id !== item._id));
  }

  function getTotal() {
    return basket.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.count,
      0
    );
  }

  return (
    <div>
      <BasketContext.Provider
        value={{ basket, addBasket, removeBasket, decreaseBasket, getTotal }}
      >
        {children}
      </BasketContext.Provider>
    </div>
  );
}

export default BasketProvider;
