import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllMurals } from './muralAPI';

const initialState = {
  murals: [],
  status: 'idle',
};

export const fetchAllMuralsAsync = createAsyncThunk(
  'mural/fetchAllMurals',
  async () => {
    const response = await fetchAllMurals();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const muralSlice = createSlice({
  name: 'mural',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMuralsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllMuralsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.murals = action.payload;
      });
  },
});

export const { increment } = muralSlice.actions;

export const selectAllMurals = (state) => state.mural.murals;

export default muralSlice.reducer;