import { useState } from "react";
import DropDown from "./DropDown";
import RatingLayout from "../../utils/RatingLayout";

type categoriesFilterType = {
  mens: boolean;
  womens: boolean;
  jewelery: boolean;
  electronics: boolean;
};

type categoriesFLState = {
  catgoriesFl: categoriesFilterType;
  setCategoriesFl: (
    args: (args: categoriesFilterType) => categoriesFilterType
  ) => void;
};

type RatingStateType = {
  ratingFL: number;
  setRatingFL: (...args: number[]) => void;
};

function Filter({
  categoriesFLState,
  ratingState,
  changePricingRange,
}: {
  categoriesFLState: categoriesFLState;
  ratingState: RatingStateType;
  changePricingRange: (args: { min: number; max: number }) => void;
}) {
  return (
    <div className="lg:w-[350px] px-[10px] md:px-[25px] mt-[15px]">
      <h3>Filter</h3>
      <hr className="lg:mb-[50px] border-stone-400" />
      <div className="md:grid lg:block grid-cols-3 gap-[25px]">
        <CategoriesFilter categoriesFLState={categoriesFLState} />
        <RatingFilter ratingState={ratingState} />
        <PricingFilter changePricingRange={changePricingRange} />
      </div>
      <hr className="lg:mb-[50px] border-stone-400" />
    </div>
  );
}

export default Filter;

const categories = [
  { id: "mens", title: "Men's Clothing" },
  { id: "womens", title: "Women's Clothing" },
  { id: "jewelery", title: "Jewelery" },
  { id: "electronics", title: "Electronics" },
];

export function CategoriesFilter({
  categoriesFLState,
}: {
  categoriesFLState: categoriesFLState;
}) {
  function addfilterCategories(event: { target: { id: string } }) {
    const id: string = event.target.id;
    const currentState: boolean =
      categoriesFLState.catgoriesFl[id as keyof categoriesFilterType];
    console.log(currentState);
    categoriesFLState.setCategoriesFl(
      (prevState: categoriesFilterType): categoriesFilterType => {
        return {
          ...prevState,
          [id]: !currentState,
        };
      }
    );
  }

  return (
    <DropDown title="Categories" classes="">
      <form>
        {categories.map((category) => (
          <div key={category.id} className="my-[5px]">
            <input
              type="checkbox"
              id={category.id}
              name={category.id}
              className="mr-[10px]"
              onChange={addfilterCategories}
            />
            <label htmlFor={category.id}>{category.title}</label>
            <br />
          </div>
        ))}
      </form>
    </DropDown>
  );
}

export function RatingFilter({
  ratingState,
}: {
  ratingState: RatingStateType;
}) {
  function handleRatingFilter(event: { target: { id: string } }) {
    const id: number = Number(event.target.id);

    ratingState.setRatingFL(id);
  }
  function clearRatingFilter() {
    ratingState.setRatingFL(0);
  }

  return (
    <DropDown title="Rating" classes="h-[200px]">
      <form className="mt-[10px]">
        <div className="flex mb-[5px]">
          <input
            type="radio"
            id="5"
            name="rating"
            value="5"
            onChange={handleRatingFilter}
            className="mr-[10px]"
          />
          <label htmlFor="5">
            <div className="flex items-center">
              <RatingLayout rate={5} />{" "}
            </div>
          </label>
          <br />
        </div>
        <div className="flex">
          <input
            type="radio"
            id="4"
            name="rating"
            value="4"
            onChange={handleRatingFilter}
            className="mr-[10px]"
          />
          <label htmlFor="4">
            <div className="flex items-center">
              <RatingLayout rate={4} /> and up
            </div>
          </label>
          <br />
        </div>
        <div className="flex">
          <input
            type="radio"
            id="3"
            name="rating"
            value="3"
            onChange={handleRatingFilter}
            className="mr-[10px]"
          />
          <label htmlFor="3">
            <div className="flex items-center">
              <RatingLayout rate={3} /> and up
            </div>
          </label>
          <br />
        </div>
        <div className="flex">
          <input
            type="radio"
            id="2"
            name="rating"
            value="2"
            onChange={handleRatingFilter}
            className="mr-[10px]"
          />
          <label htmlFor="2">
            <div className="flex items-center">
              <RatingLayout rate={2} /> and up
            </div>
          </label>
          <br />
        </div>
        <div className="flex">
          <input
            type="radio"
            id="1"
            name="rating"
            value="1"
            onChange={handleRatingFilter}
            className="mr-[10px]"
          />
          <label htmlFor="1">
            <div className="flex items-center">
              <RatingLayout rate={1} /> and up
            </div>
          </label>
          <br />
        </div>
        <button
          type="reset"
          onClick={clearRatingFilter}
          className="hover:text-teal-500 mt-[15px] px-[18px]"
        >
          Clear rating filter
        </button>
      </form>
    </DropDown>
  );
}

export function PricingFilter({
  changePricingRange,
}: {
  changePricingRange: (args: { min: number; max: number }) => void;
}) {
  const [min, setMin] = useState<string>("");
  const [max, setMax] = useState<string>("");
  const [minError, setMinError] = useState<boolean>(false);
  const [maxError, setMaxError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handlePricingRangeChange(event: {
    target: { id: string; value: string };
  }): void {
    const id: string = event.target.id;
    const value: string = event.target.value;

    if (id === "min") setMinError(false);
    if (id === "max") setMaxError(false);
    setErrorMessage("");

    if (id === "min") {
      setMin(value);
    } else {
      setMax(value);
    }
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (min === "") setMin("0");
    const minNum = Number(min);
    const maxNum = Number(max);

    setMinError(isNaN(minNum));
    setMaxError(isNaN(maxNum) || max === "");

    if (max === "") setErrorMessage("Max price can't empty");
    else if (isNaN(minNum) || isNaN(maxNum))
      setErrorMessage("Min and max prices must be numbers");
    else {
      changePricingRange({
        min: minNum,
        max: maxNum,
      });
    }
  }

  function handleReset(event: { preventDefault: () => void }) {
    event.preventDefault();

    setMin("");
    setMax("");

    changePricingRange({
      min: 0,
      max: 0,
    });
  }

  return (
    <DropDown title="Price" classes="h-[150px]">
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="mt-[10px] flex items-center justify-between">
          <input
            type="text"
            id="min"
            name="min"
            value={min}
            onChange={handlePricingRangeChange}
            className={`w-1/2 mr-[10px] p-[5px] border-2 rounded-md focus:outline-none  ${
              minError
                ? "border-red-500 focus:border-red-500"
                : "focus:border-teal-500"
            }`}
            placeholder="Min price"
          />
          <input
            type="text"
            id="max"
            name="max"
            value={max}
            onChange={handlePricingRangeChange}
            className={`w-1/2 p-[5px] border-2 rounded-md focus:outline-none focus:border-teal-500 ${
              maxError
                ? "border-red-500 focus:border-red-500"
                : "focus:border-teal-500"
            }`}
            placeholder="Max price"
          />
        </div>
        {minError ||
          (maxError && (
            <p className="m-0 text-red-500 italic text-xs">{errorMessage}</p>
          ))}
        <button
          type="submit"
          className="w-full mt-[10px] py-[5px] px-[10px] bg-teal-500 text-white hover:bg-teal-700"
        >
          Filter
        </button>
        <button
          type="reset"
          className="w-full mt-[10px] py-[5px] px-[10px] bg-amber-500 text-white hover:bg-amber-700"
        >
          Clear Filter
        </button>
      </form>
    </DropDown>
  );
}
