import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API, SEARCH_RESULTS, KEY } from "../utils/constants";
// import { cachedResults, toSearch } from "../utils/searchSlice";
import {
  clearSearchQuery,
  getSearchQuery,
  getSearchSuggestionData,
  getSearchSuggestionQuery,
} from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";
// import { useYourContext } from "./Context"; // Import your context hook

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchQuery1 = useSelector((store) => store.search.searchQuery);

  // const [Suggestions, SetSuggestions] = useState([]);
  // const { Suggestions } = useYourContext() || { Suggestions: [] }; // Ensure Suggestions is properly initialized

  // const [ShowSuggestions, SetShowSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState(false);

  // const searchCache = useSelector((store) => store.search);
  const searchSuggestionList = useSelector(
    (store) => store.search.searchSuggestionQuery
  );
  // console.log(searchCache[searchQuery]);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery1]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery1);
    const json = await data.json();
    // console.log(json[1]);
    // SetSuggestions(json[1]);
    dispatch(getSearchSuggestionQuery(json[1]));
    // dispatch(getSearchSuggestionQuery(result?.data[1]));

    // dispatch(
    //   cachedResults({
    //     [searchQuery]: json[1],
    //   })
    // );
  };

  const getSearchSuggestionsResults = async (e) => {
    try {
      e.preventDefault();
      if (searchQuery1.length > 0) {
        navigate(`/results?search_query=${searchQuery1}`);
        const data = await fetch(
          `${SEARCH_RESULTS}q=${searchQuery1}&key=${KEY}`
        );
        const result = await data.json();
        console.log(data);
        dispatch(getSearchSuggestionData(result?.items));

        setSearchSuggestions(!searchSuggestions);
        dispatch(getSearchSuggestionQuery(""));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="grid  grid-flow-col p-2 m-2 shadow-md">
        <div className="flex col-span-1 cursor-pointer">
          <img
            className="p-2 m-2 w-16 h-14"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
            alt="menu"
            onClick={() => toggleMenuHandler()}
          />
          <a href="/">
            <img
              className="p-2 m-2 w-32 h-14"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/1280px-YouTube_Premium_logo.svg.png"
              alt="Logo"
            />
          </a>
        </div>

        <form
          className="flex justify-center   items-center    md:w-3/6 b"
          onSubmit={(e) => getSearchSuggestionsResults(e)}
          onBlur={() =>
            searchQuery1.length === 0 &&
            setSearchSuggestions(!searchSuggestions)
          }
        >
          <div className="flex-1     flex  justify-center  md:justify-center ">
            <div className=" flex justify-between w-3/4 md:w-3/4 relative">
              <input
                type="text"
                value={searchQuery1}
                onChange={(e) => dispatch(getSearchQuery(e.target.value))}
                className="   border-y border-l border-y-black border-l-black p-[3px]     w-full   rounded-tl-xl  rounded-bl-xl  placeholder:px-3 placeholder:text-xs md:placeholder:text-sm   truncate text-md"
                placeholder="Search"
                onFocus={() => setSearchSuggestions(!searchSuggestions)}
              />
              {/* {searchQuery1.length > 0 && ( */}
              <button
                className=" p-2 border border-gray-600 rounded-r-full"
                onClick={() => dispatch(clearSearchQuery())}
              >
                Search
                {/* <MdOutlineClear className=" text-red-600 text-2xl mt-1 mr-1" /> */}
              </button>

              {searchSuggestions && (
                <div className="absolute z-40 bg-white w-full  shadow-lg rounded-xl p-2 py-3 px-4 mt-9">
                  {console.log(
                    "searchSuggestionList123  " + searchSuggestionList
                  )}
                  {/* {searchSuggestionList !== null && */}
                  {Array.isArray(searchSuggestionList) &&
                    searchSuggestionList.length > 0 &&
                    searchSuggestionList.map((result, i) => (
                      <button
                        className="  flex hover:bg-gray-200 w-full  cursor-pointer "
                        key={i}
                        onClick={() => dispatch(getSearchQuery(result))}
                      >
                        <span>{result}</span>
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>
        </form>

        {/* <div className="  col-span-10 px-10 m-2 ">
          <input
            type="text"
            className="p-2 border border-gray-600 w-1/2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => SetShowSuggestions(true)}
            // onBlur={() => SetShowSuggestions(false)}
            onBlur={() => setTimeout(() => SetShowSuggestions(false), 100)}
          />

          <button className=" p-2 border border-gray-600 rounded-r-full">
            Search
          </button>
        </div> */}
        <div className="col-span-1">
          <img
            className="p-2 m-2 w-14"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="user"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
