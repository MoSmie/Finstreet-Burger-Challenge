"use client";

import React, { useState, useReducer, useEffect, createContext, useContext } from "react";
import { orderReducer } from "./helper";
import { Product } from "@/types/types";
import { WithChildren } from "@/types/types";

const initialProducts: Product[] = [];

interface IProductContext {
  products: Product[];
  promotionProducts: Product[];
  handleTotalPrice: (price: number) => void;
  totalPrice: number;
}

const ProductContext = createContext<IProductContext>({
  products: [],
  promotionProducts: [],
  handleTotalPrice: () => {},
  totalPrice: 0,
});

const ProductDispatchContext = createContext({});


export const ProductContextProvider = ({ children }: WithChildren) => {
  const [products, dispatch] = useReducer(orderReducer, initialProducts);
  const [promotionProducts, setPromotionProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalPrice = (price: number) => {
    setTotalPrice(price);
  };

  useEffect(() => {
    const filterObj = products.filter((product) => product.count % 2 == 0);

    if (filterObj.length) {
      setPromotionProducts(filterObj);
    }
  }, [products]);


  return (
    <ProductContext.Provider
      value={{
        products,
        promotionProducts,
        handleTotalPrice,
        totalPrice
      }}
    >
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductContext.Provider>
  );
};


export const useProductContext = () => useContext(ProductContext);

export const useProductDispatch = () => {
  return useContext(ProductDispatchContext);
};