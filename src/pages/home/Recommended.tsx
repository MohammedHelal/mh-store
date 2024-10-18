import { useState, useEffect } from "react";
import ProductItem from "../shared/ProductItem";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function Recommended() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      //
      let res;
      try {
        res = await fetch("https://fakestoreapi.com/products");
      } catch (error) {
        console.log(error);
      }

      if (res?.ok) {
        const resData = await res.json();
        resData.sort(
          (a: { rating: { rate: number } }, b: { rating: { rate: number } }) =>
            b.rating.rate - a.rating.rate
        );
        setProducts(resData.slice(0, 5));
      } else {
        console.log(`HTTP Response Code: ${res?.status}`);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="px-[10px] md:px-[25px] xl:px-[50px] max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center">
        <h3 className="my-[50px]">Recommended</h3>
        <h5 className="cursor-pointer hover:text-teal-500">
          <Link to="/products">
            See all products <span className="text-amber-500">&gt;</span>
          </Link>
        </h5>
      </div>
      <article className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[10px] md:gap-[25px] xl:gap-[50px] ">
        {products.map((product: Product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </article>
    </section>
  );
}

export default Recommended;
