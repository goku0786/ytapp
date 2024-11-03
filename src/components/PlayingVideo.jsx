// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// // import { fetchData } from "../utils/RapidApi";
// import ReactPlayer from "react-player";
// import { AiOutlineLike } from "react-icons/ai";
// import { abbreviateNumber } from "js-abbreviation-number";
// import SuggestedVideo from "./SuggestedVideo";
// import { BsFillCheckCircleFill } from "react-icons/bs";
// import { useAuth } from "../context/AuthProvider.jsx";

// function PlayingVideo() {
//   const [video, setVideo] = useState();
//   const [realatedVideo, setRelativeVideo] = useState();
//   const { id } = useParams();
//   const { data, loading } = useAuth();
//   console.log("this is data from palying video : ",data);

//   // useEffect(() => {
//   //   fetchVideoDetails();
//   //   fetchRelatedVideo();
//   // }, [(id)]);

//   // const fetchVideoDetails = () => {
//   //   fetchData(`video/details/?id=${id}`).then((res) => {
//   //     console.log(res);
//   //     setVideo(res);
//   //   });
//   // };

//   // const fetchRelatedVideo = () => {
//   //   fetchData(`video/related-contents/?id=${id}`).then((res) => {
//   //     console.log(res);
//   //     setRelativeVideo(res);
//   //   });
//   // };

//   return (
//     <div className=" flex justify-center flex-row h-[calc(100%-56px)]">
//       <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
//         <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6">
//           <div className="h-[200px] md:h-[700px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
//             <ReactPlayer
//               url={`https://www.youtube.com/watch?v=${id}`}
//               height="100%"
//               width="100%"
//               controls
//               style={{ backgroundColor: "#000000" }}
//               playing={false}
//             />
//           </div>
//           <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2">
//             {video?.title}
//           </div>
//           <div className="flex justify-between flex-col md:flex-row mt-4">
//             <div className="flex ">
//               <div className="flex items-start">
//                 <div className="flex h-11 w-11 rounded-full overflow-hidden">
//                   <img
//                     className="h-full w-full object-cover"
//                     src={video?.author?.avatar[0]?.url}
//                   />
//                 </div>
//               </div>
//               <div className="flex space-x-5">
//                 <div className="flex flex-col ml-3">
//                   <div className="text-md font-semibold flex items-center">
//                     {data?.author?.title}
//                     {data?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
//                       <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
//                     )}
//                   </div>
//                   <div className=" text-sm">
//                     {data?.author?.stats?.subscribersText}
//                    {
//                     console.log("data from near subscribe",data)
//                    }
//                   </div>
//                 </div>
//                 <span className="mt-1 text-center bg-red-500 px-3 pt-2 rounded-full text-white cursor-pointer hover:bg-red-700 duration-200 ">
//                   Subscribe
//                 </span>
//               </div>
//             </div>
//             <div className="flex mt-4 md:mt-0">
//               <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
//                 <AiOutlineLike className="text-xl mr-2" />
//                 {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
//               </div>
//               <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
//                 {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
//               </div>
//             </div>
//           </div>
//           <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm">
//             {video?.description}
//           </div>
//           <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
//             {video?.stats?.comments} <p>Comments</p>
//           </div>
//         </div>
//         {/* <div className="flex flex-col px-4 py-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[400px]">
//           {realatedVideo?.contents?.map((item, index) => {
//             if (item?.type !== "video") return false;
//             return <SuggestedVideo key={index} video={item?.video} />;
//           })}
//         </div> */}
//         <div className="flex flex-col px-4 py-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[400px]">
//           {data.map((item, index) => {
//             if (item?.type !== "video") return false;
//             return <SuggestedVideo key={index} video={item?.video} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PlayingVideo;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestedVideo from "./SuggestedVideo";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useAuth } from "../context/AuthProvider.jsx";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const { id } = useParams();
  const { data, loading } = useAuth();

  // Safely filtering to find the video with the matching `videoId`
  useEffect(() => {
    if (data && Array.isArray(data)) {
      const matchedVideo = data.filter(
        (item) => item?.video?.videoId === id
      )[0]; // Get the first matched video
      if (matchedVideo) {
        setVideo(matchedVideo.video); // Set the video details to state
      }
    }
  }, [data, id]);

  // If no video is found or still loading
  if (loading || !video) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" flex flex-col md:flex-row md:justify-center  h-screen gap-5 pt-5 overflow-y-scroll ">
      <div className="md:w-2/4 w-full px-5 md:px-0 pb-5 ">
        <div className="h-[400px] md:h-[480px] bg-black px-5 py-[1px] rounded-xl overflow-hidden">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${video.videoId}`}
            height="100%"
            width="100%"
            controls
            playing={false}
          />
        </div>
        <div className="font-semibold md:text-xl text-lg mt-4 line-clamp-2">
          {video.title}
        </div>
        <div className="flex flex-wrap justify-between mt-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={video?.author?.avatar[0]?.url}
                alt={video?.author?.title}
              />
            </div>
            <div className="flex gap-5">
              <div className="flex ml-3">
                <div className="text-md font-semibold flex flex-none items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                  )}
                </div>
                {video?.author?.stats?.subscribersText}
              </div>
              <span className="text-center bg-red-500 px-3 py-1 ml-3  rounded-full text-white cursor-pointer hover:bg-red-700 duration-200 ">
                Subscribe
              </span>
            </div>
          </div>
          <div className="flex ml-5">
            <div className="flex flex-none items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
              <AiOutlineLike className="text-xl mr-2" />
              {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
            </div>
            <div className="flex flex-none items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
              {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm">
          {video?.descriptionSnippet}
        </div>
      </div>
      <div className="flex flex-col px-5  pb-16  lg:w-[350px] xl:w-[400px] ">
        {data.map((item, index) => {
          if (item?.type !== "video") return false;
          return <SuggestedVideo key={index} video={item?.video} />;
        })}
      </div>
    </div>
  );
}

export default PlayingVideo;
