import { configureStore } from '@reduxjs/toolkit';
import listReducer from './favListSlice';
import favReducer from './favouriteSlice';
import apiReducer from './apiSlice';
import saveToggle from './saveToggle';

const store = configureStore({
    reducer: {
      favs: listReducer,
      favourite: favReducer,
      api: apiReducer,
      save: saveToggle
    },
  })  

export default store;