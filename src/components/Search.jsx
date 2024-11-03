import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/RapidApi.js";
import Sidebar from "./Sidebar.jsx";
import SearchCard from "./SearchCard.jsx";
import { useAuth } from "../context/AuthProvider.jsx";

function Search() {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { data } = useAuth();

  // useEffect(() => {
  //   fetchSearchResults();
  // }, [searchQuery]);

  // const fetchSearchResults = () => {
  //   fetchData(`search/?q=${searchQuery}`).then(({ contents }) => {
  //     console.log(contents);
  //     setResult(contents);
  //   });
  // };

  return (
    <div className="pt-3">
      <div className="flex flex-row">
        <Sidebar />
        <div className="grow overflow-y-scroll h-[90vh] overflow-x-hidden pb-3">
          <div className="grid grid-cols-1 gap-2 p-2">
            {data?.map((item, index) => {
              if (item?.type !== "video") return false;
              return <SearchCard key={index} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;