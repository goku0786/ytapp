import React from "react";
import "../App.css";

function ListItems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
  ];

  return (
    <div className="flex gap-5 hide-scroll-bar overflow-x-scroll pb-3">
      {categories.map((category) => {
        return (
          <div
            key={category}
            className={`${
              category === "All" ? "bg-black text-white hover:bg-black" : "bg-blue-100"
            } flex-none px-5 py-1 rounded-lg hover:bg-gray-200 cursor-pointer font-semibold`}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
}

export default ListItems;
