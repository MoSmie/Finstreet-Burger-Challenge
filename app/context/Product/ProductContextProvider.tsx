"use client";

import React, { useState, useReducer, useEffect, createContext, useContext } from "react";
import { orderReducer } from "./ProductContext";
import { Product } from "@/types/product";
import { WithChildren } from "@/types/component";
import { ProductDispatchContext } from "./ProductContext";

const initialProducts: Product[] = [];

interface IProductContext {
  products: Product[];
  isPromo: boolean;
}

const ProductContext = createContext<IProductContext>({
  products: [],
  isPromo: false,
});


export const ProductContextProvider = ({ children }: WithChildren) => {
  const [products, dispatch] = useReducer(orderReducer, initialProducts);
  const [isPromo, setPromo] = useState(false);

  useEffect(() => {
    const existingItemIndex = products.find((item) => item.count === 2);

    if (existingItemIndex) {
      setPromo(true);
    }
  }, [products]);


  return (
    <ProductContext.Provider
      value={{
        products,
        isPromo,
      }}
    >
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductContext.Provider>
  );
};


export const useProductContext = () => useContext(ProductContext);
