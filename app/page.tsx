import ProductContainer from "./components/ProductContainer";
import AddOrder from "./components/AddOrder";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <h1 className="text-3xl text-center pb-8">
          Finstreet Burger Challenge
        </h1>

        <div>
          <div className="flex flex-row gap-8 mb-8">
            <div className="basis-1/2 rounded-lg	border border-slate-300 p-8">
              <AddOrder />
            </div>
            <div className="basis-1/2 rounded-lg border border-slate-300 flex flex-col items-center p-8">
              <ProductContainer />
            </div>
          </div>

          <Link
            className="text-white bg-gray-500 p-2 rounded-lg"
            href="/checkout"
          >
            Checkout
          </Link>
        </div>
      </div>
    </main>
  );
}
