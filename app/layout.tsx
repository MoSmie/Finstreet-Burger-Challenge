import "./globals.css";
import { ProductContextProvider } from "./context/Product/ProductContextProvider";

export const metadata = {
  title: "Finstreet Burger Challenge",
  description: "Order Finstreet Burger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProductContextProvider>
          <div className="flex min-h-screen flex-col items-center bg-gray-900 text-white p-8">
            <div className="rounded-lg p-8 border border-slate-300 items-center w-full">
              {children}
            </div>
          </div>
        </ProductContextProvider>
      </body>
    </html>
  );
}
