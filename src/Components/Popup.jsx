import { CiHome, CiStopwatch, CiVideoOn } from "react-icons/ci";
import {
  MdManageHistory,
  MdOutlineLiveTv,
  MdOutlinePeopleOutline,
  MdOutlineSportsBaseball,
} from "react-icons/md";
import { FaFireAlt, FaGamepad, FaYoutube } from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";
import { usePopupStore, useThemeStore } from "../store";
// ${
  // theme === "light" ? "" : "bg-black text-white"
// }
const Popup = () => {
  
  const { theme} = useThemeStore();
  const { isPopupVisible } = usePopupStore();
  if (!isPopupVisible) return null;
  return (
    
    <div className={`min-h-screen px-16  pt-4 ${
      isPopupVisible ? (`opacity-100 translate-y-0 ${
   theme === "light" ? "" : "bg-black text-white"
 }`) : (`opacity-0 -translate-y-4 pointer-events-none ${
   theme === "light" ? "" : "bg-black text-white"
 }`)
    }`} >
      {/* className={`absolute top-16 left-0 w-64 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ease-in-out ${
        isPopupVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}  */}
      <ul className="space-y-6">
        <div className="flex items-center gap-3 text-xl font-semibold">
          <CiHome className="text-xl" />
          <li>Home</li>
        </div>
        <div className="flex items-center gap-3 text-xl font-semibold">
          <CiVideoOn />
          <li>Shorts</li>
        </div>
        <div className="flex items-center gap-3 text-xl font-semibold">
          <MdOutlineLiveTv />
          <li>Subscriptions</li>
        </div>
        <hr className="w-full border-black" />
        <li className=" text-2xl font-bold">You</li>
        <div className="flex items-center gap-3 text-xl font-semibold">
          <MdOutlinePeopleOutline />
          <li>Your Channel</li>
        </div>
        <div className="flex items-center gap-3 text-xl font-semibold">
          <MdManageHistory />
          <li>History</li>
        </div>
        <div className="flex items-center gap-3 text-xl font-semibold">
          <CiStopwatch />
          <li>Watch Later</li>
        </div>
        <hr className="w-full border-black" />
        <li className=" text-2xl font-bold">Explore</li>
        <div className="flex items-center gap-3 text-xl font-semibold">
          <FaFireAlt />
          <li>Trending</li>
        </div>
        <div className="flex items-center gap-3 text-xl font-semibold">
          <IoMdMusicalNotes />
          <li>Music</li>
        </div>
        <div className="flex items-center gap-3 text-xl font-semibold">
          <FaGamepad />
          <li>Gaming</li>
        </div>
        <div className="flex items-center gap-3 text-xl font-semibold">
          <MdOutlineSportsBaseball />
          <li>Sports</li>
        </div>

        <div className="flex items-center gap-3 text-xl font-semibold">
          <FaYoutube />
          <li>You Tube Pro</li>
        </div>
        {/* <button onClick={togglePopup} className="mt-4 bg-red-500 text-white rounded p-2">
          Close
        </button> */}
      </ul>
    </div>
  );
};

export default Popup;
