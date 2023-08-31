import { useProductContext } from "@/context/Product/ProductContextProvider";

export default function Checkout() {

  return (
    <>
      <main className="text-center">
        <div className="m-2">
          <h1 className="text-gray-300">Your order is completed!</h1>
          <p>you will receive his order soon</p>
        </div>
      </main>
    </>
  );
}
