import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  // initialState: {
  //   search: "",
  //   cachedResults: [],
  // },
  // reducers: {
  //   cachedResults: (state, action) => {
  //     state = Object.assign(state, action.payload);
  //   },
  //   toSearch: (state, action) => {
  //     state.search = action.payload;
  //   },
  // },

  initialState: {
    searchSuggestionQuery: null,
    searchSuggestionData: null,
    popularVideos: null,
    searchQuery: "",
  },
  reducers: {
    getSearchSuggestionQuery: (state, action) => {
      state.searchSuggestionQuery = action.payload;
    },
    getSearchSuggestionData: (state, action) => {
      state.searchSuggestionData = action.payload;
    },
    getVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
    getSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSearchQuery: (state, action) => {
      state.searchQuery = "";
    },
  },
});
export default searchSlice.reducer;
export const {
  getSearchSuggestionQuery,
  getSearchSuggestionData,
  getSearchQuery,
  clearSearchQuery,
  getVideos,
} = searchSlice.actions;
