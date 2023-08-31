"use client";

import React, { useEffect, useState } from "react";
import { useProductContext } from "@/context/Product/ProductContextProvider";
import { sizeRate, burgerPrices } from "@/utils/utils";

const TotalPrice = () => {
  const { products, promotionProducts, handleTotalPrice, totalPrice } =
    useProductContext();

  const [useDiscount, setUseDiscount] = useState(false);
  const [useDiscountAmount, setUseDiscountAmount] = useState(0);

  useEffect(() => {
    let countBurger = products.reduce((acc, curr) => {
      return (
        acc +
        Math.ceil(curr.count / 2) *
          burgerPrices[curr.burger] *
          sizeRate[curr.size]
      );
    }, 0);

    if (useDiscount) {
      let discount = countBurger * 0.8;
      setUseDiscountAmount(Number((countBurger * 0.2).toFixed(2)));
      handleTotalPrice(Number(discount.toFixed(2)));
    } else {
      handleTotalPrice(countBurger);
    }
  }, [products, useDiscount]);

  const promotionCount = () => {
    return promotionProducts.reduce((acc, curr) => {
      return acc += curr.count / 2 * burgerPrices[curr.burger] * sizeRate[curr.size];
    }, 0);
  };

  return (
    <div className="flex flex-row gap-10">
      <div className="text-center text-slate-500">
        totalPrice: <span className="text-xl text-white">{totalPrice} €</span>
      </div>
      <div className="text-center text-red-300 ">
        <div>{promotionProducts.length ? `2 in Price of 1!  --> Promotion of: ${promotionCount()} €` : null}</div>
        <div>
          {!useDiscount ? (
            <button
              className="bg-slate-500 rounded-md h-11 p-2"
              onClick={() => setUseDiscount(true)}
            >
              Apply 20% Discount!
            </button>
          ) : (
            `-20% has been added --> discount of: ${useDiscountAmount} €`
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
