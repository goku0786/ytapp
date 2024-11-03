import React from "react";
import Sidebar from "./Sidebar.jsx";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider.jsx";
import ListItems from "./ListItems.jsx";
function Home() {
  const { data, loading } = useAuth();
  console.log(data);
  return (
    <div className="flex pt-3">
      <div>
        <Sidebar />
      </div>
      <div className="overflow-x-hidden pl-5">
        <ListItems />
        <div className="h-[85vh] overflow-y-scroll overflow-x-hidden  ">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 py-5 pr-5">
            {!loading &&
              data.map((item) => {
                if (item.type !== "video") return false;
                return <Video key={item.id} video={item?.video} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
