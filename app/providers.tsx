'use client';

import { OrderProvider } from './context/orderConetext/orderContext';

export function Providers({ children }) {
  return (
    <OrderProvider>
      {children}
    </OrderProvider>
  );
}