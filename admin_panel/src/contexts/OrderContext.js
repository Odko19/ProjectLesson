import { createContext, useContext, useEffect, useState } from "react";

export const OrderContext = createContext({});

export function useOrder() {
  return useContext(OrderContext);
}

export const OrderProvider = (props) => {
  const [order, setOrder] = useState();

  // localStorage deeree hadgalj baigaa
  useEffect(() => {
    if (order) {
      localStorage.setItem("order", JSON.stringify(order));
    }
  }, [order]);

  // localStorage deerees awahdaa
  // useEffect(() => {
  //   setOrder(JSON.parse(localStorage.getItem("order")));
  // });

  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {props.children}
    </OrderContext.Provider>
  );
};
