"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { useProductContext } from "@/context/Product/ProductContextProvider";
import TotalPrice from "components/TotalPrice";

const ProductContainer = () => {
  const { products, totalPrice } = useProductContext();

  if (products.length === 0)
    return <h3 className="text-center p-5">No Product Added Yet!</h3>

  return (
    <div className="flex flex-wrap gap-3 p-5">
      {products.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
      <TotalPrice />
    </div>
  );
};

export default ProductContainer;
