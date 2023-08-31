"use client";

import { useProductDispatch } from "@/context/Product/ProductContext";
import SizeForm from "components/SizeForm";
import BurgerForm from "components/BurgerForm";
import React, { useState } from "react";
import { ORDER_ACTION } from "@/types/types";

const AddOrder = () => {
  const [burger, setBurger] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [error, setError] = useState<string>("");
  const dispatch = useProductDispatch();

  const add = () => {
    if (!burger || !size) {
      setError("Both burger and size must be selected");
      return;
    }
    dispatch({
      type: ORDER_ACTION.ADD_PRODUCT,
      payload: { size, burger },
    });
    setSize("");
    setBurger("");
    setError("");
  };
  console.log(error);

  return (
    <div>
      <h3 className="text-slate-100">Select Burger and Size</h3>
      <div className="flex gap-8 mt-6 items-center">
        <BurgerForm burger={burger} setBurger={setBurger} />
        <SizeForm size={size} setSize={setSize} />
        <button
          className="col-span-2 place-self-center bg-slate-500 p-2 rounded-md"
          onClick={add}
        >
          Add
        </button>
      </div>
      <p>
      {!error ? (
          <strong>
            {burger} {size}
          </strong>
      ) : (
        <span className="text-red-400">{ error }</span>
        )}
      </p>
    </div>
  );
};

export default AddOrder;
