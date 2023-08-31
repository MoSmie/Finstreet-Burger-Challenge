"use client";

import React, { useEffect, useState } from "react";
import { useProductContext } from "@/context/Product/ProductContextProvider";
import { sizeRate, burgerPrices } from "@/utils/utils";

const TotalPrice = () => {
  const { products, isPromo } = useProductContext();
  const [totalPrice, setTotalPrice] = useState(0);
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
      setUseDiscountAmount(countBurger * 0.2)
      setTotalPrice(discount.toFixed(2));
    } else {
       setTotalPrice(countBurger);
    }
  }, [products, useDiscount]);

  return (
    <div className="flex flex-row gap-10">
      <div className="text-center text-slate-500">
        totalPrice: <span className="text-xl text-white">{totalPrice}</span>
      </div>
      <div className="text-center text-red-300 ">
        <div>{isPromo ? "2 in Price of 1!" : null}</div>
        <div>{!useDiscount ? <button className="bg-slate-500 rounded-md h-11 p-2" onClick={() => setUseDiscount(true)}>Discount Applied!</button> : `-20% has been added --> ${useDiscountAmount}`}</div>
      </div>
    </div>
  );
};

export default TotalPrice;
