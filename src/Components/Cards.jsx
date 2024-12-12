import { useEffect, useState } from "react";
import Card from "./Card";
import { usePopupStore, useThemeStore } from "../store";
import Popup from "./Popup";

const Cards = ({ search }) => {
  const { isPopupVisible } = usePopupStore();
  const [cards, setCards] = useState([]);
  const { theme } = useThemeStore();
  const cardBgClass = theme === "dark" ? "bg-black text-white" : "bg-white";

  const fetchCards = () => {
    fetch("/public/youtube.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  };

  useEffect(() => {
    if (search === "") {
      fetchCards();
    }
    // console.log(data);
  }, [search]);

  useEffect(() => {
    const onSearch = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const filtered = cards.filter((c) => c.category === search);

        setCards(filtered);
      }
    };

    window.addEventListener("keydown", onSearch);

    return () => {
      window.removeEventListener("keydown", onSearch);
    };
  }, [cards, search]);

  return (
    <div className="flex mt-20">
      <Popup />
      <div
        className={`${
          isPopupVisible
            ? `grid grid-cols-1 md:grid-cols-2 gap-2 mx-10 lg:grid-cols-3 w-full  px-10 ${cardBgClass}`
            : `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full px-10 ${cardBgClass}`
        } `}
      >
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
