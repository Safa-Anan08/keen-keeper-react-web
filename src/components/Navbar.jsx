import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoMdHome } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";

export default function Navbar() {

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1 md:gap-2 rounded-lg transition 
    px-2 py-1 text-xs 
    md:px-4 md:py-2 md:text-sm
    ${
      isActive
        ? "bg-green-900 text-white font-semibold"
        : "text-gray-600 hover:text-green-600"
    }`;

  return (
    <div className="bg-white shadow px-4 md:px-6 py-3 flex justify-between items-center">

      <div className="flex items-center gap-2">
        <img src={logo} className="h-5 md:h-6" />
      </div>

      <div className="flex gap-2 md:gap-6">

        <NavLink to="/" className={linkClass}>
          <IoMdHome className="text-base md:text-lg" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/timeline" className={linkClass}>
          <FaClock className="text-base md:text-lg" />
          <span>Timeline</span>
        </NavLink>

        <NavLink to="/stats" className={linkClass}>
          <FiActivity className="text-base md:text-lg" />
          <span>Stats</span>
        </NavLink>

      </div>
    </div>
  );
}