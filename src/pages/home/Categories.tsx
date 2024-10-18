import mens from "../../assets/categories/mens.jpg";
import womens from "../../assets/categories/womens.jpg";
import jewlery from "../../assets/categories/jewlery.jpg";
import electronics from "../../assets/categories/electronics.jpg";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <section className="py-[50px] px-[10px] md:px-[25px] lg:px-[50px] my-[50px] lg:my-0">
      <div className="w-full max-w-[1440px] mx-auto">
        <h3 className="text-center">Categories</h3>
        <article className="grid grid-cols-2 md:grid-cols-2 gap-[10px] md:gap-[25px] block lg:relative md:h-[475px] xl:h-[550px] lg:my-[150px] mx-auto">
          <Link to="/products">
            <div className="group flex justify-center items-center overflow-hidden relative lg:absolute lg:top-0 lg:left-[2.5%] lg:w-[250px] xl:w-[300px] lg:h-[250px] xl:h-[300px] lg:rotate-45 border-2 border-teal-500">
              <img
                className="object-cover lg:-rotate-45 lg:scale-[1.42]"
                src={mens}
                alt="Men's clothes category"
              />
              <div className="hidden group-hover:flex justify-center items-center z-20 absolute top-0 bottom-0 right-0 left-0 bg-teal-500/70 cursor-pointer">
                <h5 className="font-bold lg:-rotate-45 text-white">
                  Men's Clothing
                </h5>
              </div>
            </div>
          </Link>
          <Link to="/products">
            <div className="group flex justify-center items-center overflow-hidden relative lg:absolute lg:bottom-0 lg:left-[21%] lg:w-[250px] xl:w-[300px] lg:h-[250px] xl:h-[300px] lg:rotate-45 object-cover border-2 border-teal-500">
              <img
                className="object-cover lg:-rotate-45 lg:scale-[1.42]"
                src={womens}
                alt="Women's clothes category"
              />
              <div className="hidden group-hover:flex justify-center items-center z-20 absolute top-0 bottom-0 right-0 left-0 bg-teal-500/70 cursor-pointer">
                <h5 className="font-bold lg:-rotate-45 text-white">
                  Women's Clothing
                </h5>
              </div>
            </div>
          </Link>
          <div className="hidden lg:block absolute top-0 left-[39%] lw-[250px] xl:w-[300px] h-[250px] xl:h-[300px] lg:rotate-45 bg-teal-500"></div>
          <Link to="/products">
            <div className="group flex justify-center items-center overflow-hidden relative lg:absolute lg:bottom-0 lg:right-[21%] lg:w-[250px] xl:w-[300px] lg:h-[250px] xl:h-[300px] lg:rotate-45 border-2 border-teal-500">
              <img
                className="object-cover lg:-rotate-45 lg:scale-[1.42]"
                src={jewlery}
                alt="Jewlery clothes category"
              />
              <div className="hidden group-hover:flex justify-center items-center z-20 absolute top-0 bottom-0 right-0 left-0 bg-teal-500/70 cursor-pointer">
                <h5 className="font-bold lg:-rotate-45 text-white">Jewlery</h5>
              </div>
            </div>
          </Link>
          <Link to="/products">
            <div className="group flex justify-center items-center overflow-hidden relative lg:absolute lg:top-0 lg:right-[2.5%] lg:w-[250px] xl:w-[300px] lg:h-[250px] xl:h-[300px] lg:rotate-45  border-2 border-teal-500">
              <img
                className="object-cover lg:-rotate-45 lg:scale-[1.42]"
                src={electronics}
                alt="Electronics clothes category"
              />
              <div className="hidden group-hover:flex justify-center items-center z-20 absolute top-0 bottom-0 right-0 left-0 bg-teal-500/70 cursor-pointer">
                <h5 className="font-bold lg:-rotate-45 text-white ">
                  Electronics
                </h5>
              </div>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default Categories;
