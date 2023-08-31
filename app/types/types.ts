import { ReactNode } from 'react';

export interface WithChildren {
  children: ReactNode;
}

export interface Product {
  burger: string;
  size: string;
  id: string;
  count: number;
}

export interface ProductContext {
    products: Product[];
}

export enum ORDER_ACTION {
  ADD_PRODUCT = 'ADD_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
}

export type CartActions =
  | AddProductAction
  | DeleteProductAction


interface AddProductAction {
  type: ORDER_ACTION.ADD_PRODUCT;
  payload: Pick<Product, 'burger' | 'size'>;
}

interface DeleteProductAction {
  type: ORDER_ACTION.DELETE_PRODUCT;
  payload:  Pick<Product, 'id'>;
}
