import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllAcrylics } from './acrylicAPI';

const initialState = {
  acrylics: [],
  status: 'idle',
};

export const fetchAllAcrylicsAsync = createAsyncThunk(
  'acrylic/fetchAllAcrylics',
  async () => {
    const response = await fetchAllAcrylics();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const acrylicSlice = createSlice({
  name: 'acrylic',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAcrylicsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllAcrylicsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.acrylics = action.payload;
      });
  },
});

export const { increment } = acrylicSlice.actions;

export const selectAllAcrylics = (state) => state.acrylic.acrylics;

export default acrylicSlice.reducer;