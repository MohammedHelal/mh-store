import { useState, useEffect } from "react";
import Filter from "./Filter";
import ProductItem from "../shared/ProductItem";

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

type categoriesFilterType = {
  mens: boolean;
  womens: boolean;
  jewelery: boolean;
  electronics: boolean;
};

type PricingRangeFL = {
  min: number;
  max: number;
};

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [catgoriesFl, setCategoriesFl] = useState<categoriesFilterType>({
    mens: false,
    womens: false,
    jewelery: false,
    electronics: false,
  });
  const [ratingFL, setRatingFL] = useState<number>(0);

  const [pricingRangeFL, setPricingRangeFL] = useState<PricingRangeFL>({
    min: 0,
    max: 0,
  });

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
        //Categories
        let filteredData = resData;
        if (
          catgoriesFl.mens ||
          catgoriesFl.womens ||
          catgoriesFl.jewelery ||
          catgoriesFl.electronics
        ) {
          filteredData = filteredData.filter(
            (data: Product): boolean | void => {
              if (data.category === "men's clothing") return catgoriesFl.mens;
              else if (data.category === "women's clothing")
                return catgoriesFl.womens;
              else if (data.category === "jewelery")
                return catgoriesFl.jewelery;
              else if (data.category === "electronics")
                return catgoriesFl.electronics;
            }
          );
        }
        //Rating
        if (ratingFL > 0)
          filteredData = filteredData.filter(
            (data: Product): boolean | void => data.rating.rate >= ratingFL
          );

        //Pricing
        const min = pricingRangeFL.min;
        const max = pricingRangeFL.max;
        if (min <= max && max !== 0)
          filteredData = filteredData.filter(
            (data: Product): boolean | void =>
              Number(data.price) >= min && Number(data.price) <= max
          );

        setProducts(filteredData);
      } else {
        console.log(`HTTP Response Code: ${res?.status}`);
      }
    }

    fetchData();
  }, [catgoriesFl, ratingFL, pricingRangeFL]);

  function changePricingRange(range: { min: number; max: number }) {
    setPricingRangeFL((prevState: PricingRangeFL): PricingRangeFL => {
      return {
        ...prevState,
        min: range.min,
        max: range.max,
      };
    });
  }

  const categoriesFLState = {
    catgoriesFl,
    setCategoriesFl,
  };

  const ratingState = {
    ratingFL,
    setRatingFL,
  };

  return (
    <section className="max-w-[1440px] mx-auto min-h-[600px] lg:flex">
      <Filter
        categoriesFLState={categoriesFLState}
        ratingState={ratingState}
        changePricingRange={changePricingRange}
      />
      <article className="px-[10px] md:pl-[25px] border-l-[1px] ">
        <h2 className="mb-[30px]">Products</h2>
        <hr className="mb-[50px]" />
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[10px] md:gap-[25px] lg:gap-[50px]">
          {products.map((product: Product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </div>
      </article>
    </section>
  );
}

export default Products;
