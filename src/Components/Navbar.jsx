// import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { LuTableOfContents } from "react-icons/lu";
import { usePopupStore, useThemeStore } from "../store";

// import { MdDarkMode } from "react-icons/md";
const Navbar = ({setSearch}) => {
  const { theme, toggleTheme } = useThemeStore();
  // console.log(theme);
  const { togglePopup } = usePopupStore();
  


  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex flex-row justify-between  p-4 items-center ${
        theme === "light" ? "bg-base-100  text-black" : "bg-black text-white"
      }`}
    >
      <div className="flex items-center gap-6">
        <LuTableOfContents className="text-3xl" onClick={togglePopup} />
        <p className="text-4xl font-bold ">PTube</p>
      </div>
      <div className="w-[600px] flex justify-center relative items-center ">
        <CiSearch
          className={`absolute left-10  text-lg ${
            theme === "dark" && "text-black"
          }`}
        />
        
          <input
            type="text"
            className={`w-full border-2 pl-16 py-2  border-slate-300 rounded-l-3xl rounded-r-lg  ${
        theme === "light" ? "bg-base-100  text-black" : "bg-white text-black"
      }`}
            onChange={(e) => setSearch(e.target.value)}
          />
       
      </div>
      <div className="flex items-center gap-6">
        <div>
          <div>
            {/* <MdDarkMode className="text-2xl" /> */}
            <label className={`flex cursor-pointer gap-2 `}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="dropdown dropdown-end flex items-center gap-6">
          <details className="relative group">
            <summary
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar flex items-center"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </summary>
            <ul className="menu menu-sm absolute bg-base-100 rounded-box z-[1] mt-2 w-52 right-0 p-2 shadow hidden group-open:block">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
