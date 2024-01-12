import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllDoodles } from './doodleAPI';

const initialState = {
  doodles: [],
  status: 'idle',
};

export const fetchAllDoodlesAsync = createAsyncThunk(
  'doodle/fetchAllDoodles',
  async () => {
    const response = await fetchAllDoodles();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const doodleSlice = createSlice({
  name: 'doodle',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDoodlesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllDoodlesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.doodles = action.payload;
      });
  },
});

export const { increment } = doodleSlice.actions;

export const selectAllDoodles = (state) => state.doodle.doodles;

export default doodleSlice.reducer;