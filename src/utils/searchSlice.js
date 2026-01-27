import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    cache: {},
    selectedQuery: null,
  },
  reducers: {
    cacheResults: (state, action) => {
      // state = Object.assign(state, action.payload);
      // OR
      state.cache = {
        ...state,
        ...action.payload,
      };
    },
    setSelectedQuery: (state, action) => {
      state.selectedQuery = action.payload;
    },
    clearSelectedQuery: (state) => {
      state.selectedQuery = null;
    },
  },
});

export const { cacheResults, setSelectedQuery, clearSelectedQuery } =
  searchSlice.actions;
export default searchSlice.reducer;

// OR
// LRU CACHE - max 100 keys - when it reaches 100 start removing it from the top.
