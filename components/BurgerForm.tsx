import React, { useState } from "react";

interface IProps {
  burger: string;
  setBurger: (value: string) => void;
}

const BurgerForm = ({ burger, setBurger }: IProps) => {

  const onOptionChange = (e: { target: { value: string; }; }) => {
    setBurger(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-row gap-2">
        <div>
          <input
            className="hidden"
            type="radio"
            name="burger"
            value="Hamburger"
            id="hamburger"
            checked={burger === "hamburger"}
            onChange={onOptionChange}
          />

          <label
            className={`${
              burger === "Hamburger" && "border-lime-600"
            } flex flex-col p-2 border-2 border-gray-400 cursor-pointer`}
            htmlFor="hamburger"
          >
            <span className="text-xs font-semibold">Hamburger</span>
          </label>
        </div>

        <div>
          <input
            className="hidden"
            type="radio"
            name="burger"
            value="Cheesseburger"
            id="cheesseburger"
            checked={burger === "Cheesseburger"}
            onChange={onOptionChange}
          />

          <label
            className={`${
              burger === "Cheesseburger" && "border-lime-600"
            } flex flex-col p-2 border-2 border-gray-400 cursor-pointer`}
            htmlFor="cheesseburger"
          >
            <span className="text-xs font-semibold">
              Cheesseburger
            </span>
          </label>
        </div>

        <div>
          <input
            className="hidden"
            type="radio"
            name="burger"
            value="ChilliCheeseburger"
            id="chilliCheeseburger"
            checked={burger === "ChilliCheeseburger"}
            onChange={onOptionChange}
          />
          <label
            className={`${
              burger === "ChilliCheeseburger" && "border-lime-600"
            } flex flex-col p-2 border-2 border-gray-400 cursor-pointer w-max`}
            htmlFor="chilliCheeseburger"
          >
            <span className="text-xs font-semibold">
              Chilli Cheeseburger
            </span>
          </label>
        </div>

      </div>
    </div>
  );
};

export default BurgerForm;
