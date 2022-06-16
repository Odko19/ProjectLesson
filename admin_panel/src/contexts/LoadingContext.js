import { createContext, useContext, useState } from "react";
import { OrderContext } from "./OrderContext";

export const LoadingContext = createContext();

export function useLoading() {
  return useContext(LoadingContext);
}

export const LoadingProvider = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={[loading, setLoading]}>
      {props.children}
    </LoadingContext.Provider>
  );
};
