import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import homeIcon from "../assets/call.png";
import timelineIcon from "../assets/text.png";
import statsIcon from "../assets/video.png";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-2 text-green-600 font-semibold"
      : "flex items-center gap-2 text-gray-600";

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={logo} className="h-6" />
      </div>

      <div className="flex gap-6">
        <NavLink to="/" className={linkClass}>
          <img src={homeIcon} className="w-4" /> Home
        </NavLink>

        <NavLink to="/timeline" className={linkClass}>
          <img src={timelineIcon} className="w-4" /> Timeline
        </NavLink>

        <NavLink to="/stats" className={linkClass}>
          <img src={statsIcon} className="w-4" /> Stats
        </NavLink>
      </div>
    </div>
  );
}