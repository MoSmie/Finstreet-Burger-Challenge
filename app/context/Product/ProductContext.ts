import { ORDER_ACTION, Product, CartActions } from "@/types/product";
import { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";



export const ProductDispatchContext = createContext({});

export const useProductDispatch = () => {
  return useContext(ProductDispatchContext);
};


export const orderReducer = (currentProducts: Product[], action: CartActions) => {
  switch (action.type) {
    case ORDER_ACTION.ADD_PRODUCT: {
      let newItem = currentProducts;

      const existingItemIndex = currentProducts.findIndex(
        (item) =>
          item.burger === action.payload.burger &&
          item.size === action.payload.size
      );

      if (existingItemIndex === -1) {
        newItem = [
          ...currentProducts,
          {
            burger: action.payload.burger,
            size: action.payload.size,
            count: 1,
            id: uuidv4(),
          },
        ];
      } else {
        newItem = newItem.map((u, idx) =>
          idx !== existingItemIndex ? u : { ...u, count: u.count + 1 }
        );
      }

      return newItem;
    }

    case ORDER_ACTION.DELETE_PRODUCT: {
      return currentProducts.filter((t) => t.id !== action.payload.id);
    }

    default: {
      throw Error("Unknown action: ");
    }
  }
};
