import { configureStore } from '@reduxjs/toolkit';
import acrylicReducer from '../features/product/acrylicSlice';
import doodleReducer from '../features/product/doodleSlice';
import lineartReducer from '../features/product/lineartSlice';
import muralReducer from '../features/product/muralSlice';

export const store = configureStore({
  reducer: {
    acrylic: acrylicReducer,
    doodle: doodleReducer,
    lineart: lineartReducer,
    mural: muralReducer,
  },
});
