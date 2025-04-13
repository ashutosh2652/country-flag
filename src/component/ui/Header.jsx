import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="h-[60px] w-screen bg-gray-700 shadow-md">
      <div className="flex justify-around items-center h-full">
        <div className="hover:bg-gray-500 rounded-md p-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-400 font-extrabold" : ""
            }
          >
            <h1>WorldAtlas</h1>
          </NavLink>
        </div>
        <div>
          <ul className="flex gap-5">
            <li className="hover:bg-gray-500 rounded-md p-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-extrabold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:bg-gray-500 rounded-md p-1">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-extrabold" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li className="hover:bg-gray-500 rounded-md p-1">
              <NavLink
                to="/country"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-extrabold" : ""
                }
              >
                Country
              </NavLink>
            </li>
            <li className="hover:bg-gray-500 rounded-md p-1">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-extrabold" : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
