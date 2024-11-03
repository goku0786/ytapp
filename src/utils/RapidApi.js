// import axios from "axios";

// const API_KEY=process.env.REACT_APP_YOUTUBE_API_KEY;

// const BASE_URL="https://youtube138.p.rapidapi.com"

// // console.log("API_KEY:", API_KEY);


// const options = {
// 	headers: {
// 		'x-rapidapi-key': API_KEY,
// 		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
// 	}
// };

// export const fetchData=async(url)=>{
//     try{
//         const {data} = await axios.get(`${BASE_URL}/${url}`,options);
//         return data;
//     }catch(error){
//         console.error("error fetching api data: ",error);
//         throw error;
//     }
// }