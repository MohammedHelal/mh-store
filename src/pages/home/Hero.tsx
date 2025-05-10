import HeroImg from "../../assets/Family_online_shopping_illustration_concept_vector_generated.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row justify-between max-w-[1440px] mx-auto mb-[50px] px-[25px]">
      <div className="order-2 lg:order-1 h-[250px] md:h-[300px] lg:h-auto text-center lg:text-left lg:w-auto mt-[50px] lg:pr-6 flex flex-col justify-center">
        <h1 className="m-0">A little of everything</h1>
        <div className="mt-[15px]"></div>
        <h5 className="w-[500px]">
          From clothes to electronics, your one way stop for{" "}
          <span className="text-teal-500">a little of everything</span>
        </h5>
        <div className="mt-[15px]"></div>
        <Link to="/products" className="w-[200px]">
          <button className="lg:ml-0 py-[10px] px-[50px] bg-teal-500 text-white hover:bg-teal-700">
            Check us out
          </button>
        </Link>
      </div>
      <img
        className="order-1 lg:order-2 lg:w-1/2 lg:pl-6"
        src={HeroImg}
        alt="Hero image"
      />
    </section>
  );
}

export default Hero;
