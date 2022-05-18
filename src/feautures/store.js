import { configureStore } from '@reduxjs/toolkit';
import listReducer from './favListSlice';
import favReducer from './favouriteSlice';

const store = configureStore({
    reducer: {
      favs: listReducer,
      favourite: favReducer
    },
  })  

export default store;