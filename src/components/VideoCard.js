import React from "react";

const VideoCard = ({ info, add }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <>
      <div className="p-2 m-2 w-64 shadow-lg">
        <span className="bg-gray-200 absolute">{add && "This is an Add"}</span>
        <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics && statistics.viewCount} Views</li>
        </ul>
      </div>
    </>
  );
};

export const AdVideoCard = ({ info }) => {
  const y = "y";
  return (
    <div className="p-1 m-1  border-2 border-black">
      <VideoCard info={info} add={y === "y"} />
    </div>
  );
};
export default VideoCard;
