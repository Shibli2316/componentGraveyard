import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllLinearts } from './lineartAPI';

const initialState = {
  linearts: [],
  status: 'idle',
};

export const fetchAllLineartsAsync = createAsyncThunk(
  'lineart/fetchAllLinearts',
  async () => {
    const response = await fetchAllLinearts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const lineartSlice = createSlice({
  name: 'lineart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllLineartsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllLineartsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.linearts = action.payload;
      });
  },
});

export const { increment } = lineartSlice.actions;

export const selectAllLinearts = (state) => state.lineart.linearts;

export default lineartSlice.reducer;