import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">JK</p>
      </NavLink>
    </header>
  );
};

export default Navbar;
