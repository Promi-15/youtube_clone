import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import { useState } from "react";
import { useThemeStore } from "./store";

const App = () => {
  const { theme } = useThemeStore();
  const cardBgClass = theme === "dark" ? "bg-black text-white" : "bg-white";
  const [search, setSearch] = useState("");
  console.log(search)
  return (
    <div className={`${cardBgClass} min-h-screen`}>
      <BrowserRouter>
        <Navbar setSearch={ setSearch} />
        <Cards search={ search} />
       
      </BrowserRouter>
    </div>
  );
};

export default App;
