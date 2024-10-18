function RatingLayout({ rate }: { rate: number }) {
  return (
    <>
      <div
        className={`border-2 rounded-full p-[6px] mr-[2px] ${
          rate >= 1
            ? "bg-amber-500"
            : rate >= 0 && rate <= 1
            ? `p${Math.ceil(rate * 100)}`
            : "inherit"
        }`}
      ></div>
      <div
        className={`border-2 rounded-full p-[6px] mr-[2px] ${
          rate >= 2
            ? "bg-amber-500"
            : rate > 1 && rate <= 2
            ? `p${Math.ceil((rate - 1) * 100)}`
            : "inherit"
        }`}
      ></div>
      <div
        className={`border-2 rounded-full p-[6px] mr-[2px] ${
          rate >= 3
            ? "bg-amber-500"
            : rate > 2 && rate <= 3
            ? `p${Math.ceil((rate - 2) * 100)}`
            : "inherit"
        }`}
      ></div>
      <div
        className={`border-2 rounded-full p-[6px] mr-[2px] ${
          rate >= 4
            ? "bg-amber-500"
            : rate > 3 && rate <= 4
            ? `p${Math.ceil((rate - 3) * 100)}`
            : "inherit"
        }`}
      ></div>
      <div
        className={`border-2 rounded-full p-[6px] mr-[2px] ${
          rate > 4 && rate <= 5 ? `p${Math.ceil((rate - 4) * 100)}` : "inherit"
        }`}
      ></div>
    </>
  );
}

export default RatingLayout;
