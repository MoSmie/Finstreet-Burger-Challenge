import React from "react";
import { Product, ORDER_ACTION } from "../app/types/product";
import { useProductDispatch } from "@/context/Product/ProductContext";
import { burgerPrices, sizeRate } from "../app/utils/utils";

interface IProps {
  product: Product;
}

const ProductCard = ({ product }: IProps) => {
  const { dispatch } = useProductDispatch();

  return (
    <div className="flex gap-4">
      {product.count} x
      <div className="border shadow hover:shadow-md cursor-pointer transition rounded-md flex flex-col gap-1 p-3 w-60">
        <p className="text-green-600 text-center text-lg">{product.burger}</p>
        <p className="text-slate-500 text-center">
          size: <span className="text-white">{product.size}</span>
        </p>
        <p className="text-slate-500 text-center">
          price:{" "}
          <span className="text-white">
            {burgerPrices[product.burger] * sizeRate[product.size]}
          </span>{" "}
        </p>
      </div>

      <button
        className="bg-slate-500 rounded-md h-11 p-2"
        onClick={() =>
          dispatch({
            type: ORDER_ACTION.DELETE_PRODUCT,
            payload: { id: product.id },
          })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default ProductCard;
