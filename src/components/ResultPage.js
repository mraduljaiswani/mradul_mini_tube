import React, { useEffect, useState } from "react";
import { KEY, KEY_V, SEARCH_RESULTS } from "../utils/constants";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const ResultPage = () => {
  const seachKeyword = useSelector((store) => store.search.search);
  console.log(seachKeyword);
  const [searchItems, setsearchItems] = useState([]);
  useEffect(() => {
    getAllResults();
  }, [seachKeyword]);
  const getAllResults = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
        seachKeyword +
        "&type=video&key=" +
        KEY_V
    );
    const json = await data.json();
    // console.log(json.items);
    setsearchItems(json.items);
  };

  return (
    <div>
      {searchItems.map((vdo, index) => (
        <a href={"/watch?v=" + vdo.id.videoId} key={index}>
          <VideoCard info={vdo} />
        </a>
      ))}
    </div>
  );
};

export default ResultPage;
