import React, { useEffect } from "react";
import { API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchVideoCard from "./SearchVideoCard";
import { getVideos } from "../utils/searchSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.search.popularVideos);

  // const [videos, setVideos] = useState([]);

  const searchVideos = useSelector(
    (store) => store.search.searchSuggestionData
  );
  useEffect(() => {
    getPopularVideos();
    // eslint-disable-next-line
  }, []);

  const [searchParams] = useSearchParams();

  const getPopularVideos = async () => {
    const data = await fetch(API);
    const json = await data.json();
    // console.log(json.items);
    // setVideos(json.items);
    dispatch(getVideos(json?.items));
  };

  return videos === null ? (
    "No videos Found"
  ) : (
    <div className="flex flex-col  w-full flex-wrap px-4 gap-4 mt-4  justify-center items-center ">
      {searchVideos !== null ? (
        <div className="flex flex-col w-full md:w-3/4 gap-3 p-2">
          <p className="w-full font-bold text-lg">
            Search Results for{" "}
            <span className="text-red-600 italic">
              {searchParams.get("search_query")}
            </span>
          </p>
          {searchVideos.map((video) => {
            return (
              <Link
                to={`/watch?v=${video?.id?.videoId}`}
                key={video?.id?.videoId}
              >
                {/* thumbnail title,channelTitle,publishedat,viewcount */}
                <SearchVideoCard
                  id={video?.id}
                  thumbnail={video?.snippet?.thumbnails?.medium?.url}
                  title={video?.snippet?.title}
                  channelTitle={video?.snippet?.channelTitle}
                  description={video?.snippet?.description}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex  w-full flex-wrap px-4 gap-4  justify-center items-stretch">
          {" "}
          {videos.map((video) => {
            return (
              <Link to={`/watch?v=${video?.id}`} key={video?.id}>
                {/* thumbnail title,channelTitle,publishedat,viewcount */}

                <VideoCard
                  info={video}
                  // id={video?.id}
                  // thumbnail={video?.snippet?.thumbnails?.medium?.url}
                  // title={video?.snippet?.title}
                  // channelTitle={video?.snippet?.channelTitle}
                  // releaseDate={video?.snippet?.publishedAt}
                  // viewsCount={video?.statistics?.viewCount}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );

  // return (
  //   <div className=" flex flex-wrap w-fit">
  //     {videos[0] && (
  //       <Link to={"watch?v=" + videos[0].id} key={videos[0].id}>
  //         <AdVideoCard info={videos[0]} />
  //       </Link>
  //     )}

  //     {videos.slice(1).map((vdo) => (
  //       <Link to={"watch?v=" + vdo.id} key={vdo.id}>
  //         {" "}
  //         <VideoCard info={vdo} />
  //       </Link>
  //     ))}
  //   </div>
  // );
};

export default VideoContainer;
