// import { createContext, useContext, useEffect, useState } from "react";
// import { fetchData } from "../utils/RapidApi.js";

// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);
//   const [value, setValue] = useState("New");

//   useEffect(() => {
//     fetchAlldata(value);
//   }, [value]);

//   const fetchAlldata = (query) => {
//     setLoading(true);
//     fetchData(`search/?q=${query}`).then(({ contents }) => {
//       console.log(contents);
//       setData(contents);
//       setLoading(false);
//     });
//   };
//   return (
//     <AuthContext.Provider value={{ loading, data, value, setValue }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useState, useEffect } from "react";
import  contents  from "../constants/videos.json";
import videoData from "../constants/videoDetails.json" // Import the data

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [videoDetails, setvideoDetails] = useState([]);

  useEffect(() => {
    // Simulate data fetching by loading the data directly
    setLoading(true);
    setTimeout(() => {
      setData(contents.contents); // Load the local data
      setvideoDetails(videoData.keywords)
      console.log("here is video details",videoDetails)
      setLoading(false);
    }, 1000); // Simulating a 1-second delay (optional)
  }, []);

  return (
    <AuthContext.Provider value={{ loading, data }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
