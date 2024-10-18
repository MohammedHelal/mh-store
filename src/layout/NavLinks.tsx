import { NavLink } from "react-router-dom";

function NavLinks({ classes }: { classes: string }) {
  return (
    <ul className={`${classes} list-none m-0 lg:h-[80px]`}>
      <li className="inline py-[10px] px-[25px]">
        <NavLink to="/" className="stroke">
          Home
        </NavLink>
      </li>
      <li className="inline py-[10px] px-[25px]">
        <NavLink to="/products" className="stroke">
          Products
        </NavLink>
      </li>
      <li className="inline py-[10px] pl-[25px]">
        <NavLink to="/" className="stroke">
          Cart
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
