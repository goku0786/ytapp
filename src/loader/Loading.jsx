import React from "react";
import loader from "../assets/loader.gif";

function Loading() {
  return (
    <div>
      <span className="flex items-center justify-center h-screen text-3xl">
        <img src={loader} alt="loading" />
      </span>
    </div>
  );
}

export default Loading;
