import RatingLayout from "../../utils/RatingLayout";
import { useAppDispatch } from "../../store/hooks";
import { cartActions } from "../../store/cart-store";

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

function ProductItem({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  function addToCart(item: Product) {
    dispatch(cartActions.addItem(item));
  }
  //border-[#cbd5e1]
  return (
    <div className="w-[175px] md:w-[230px] shadow-none hover:shadow-lg ">
      <div className="mb-[25px] relative border-2 border-[#cbd5e1] rounded-md hover:border-teal-500">
        <img
          className="w-[175px] md:w-[230px] lg:w-[250px] h-[175px] md:h-[230px] lg:h-[250px] mb-[25px] object-contain"
          src={product.image}
          alt="product card"
        />
        <button
          className="relative w-full md:w-auto -bottom-[18px] lg:left-[28px] xl:left-[36px] rounded-full bg-teal-500 hover:bg-teal-700 px-[25px] py-[5px] text-white"
          onClick={() => addToCart(product)}
        >
          <i className="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
      </div>
      <div className="px-2">
        <div className="relative group max-h-[25px] z-30 ">
          <p className="mb-0 hover:px-2 truncate group-hover:bg-[#213547] group-hover:text-white hover:whitespace-normal hover:overflow-auto group-hover:text-wrap cursor-pointer">
            {product.title}
          </p>
        </div>
        <h4 className="m-0 text-teal-500">${product.price}</h4>
        <div className="my-2 flex items-center">
          <RatingLayout rate={product.rating.rate} />
          <p className="text-amber-500 m-0 p-0">({product.rating.count})</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
