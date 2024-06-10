/* eslint-disable no-param-reassign */

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/product';
import { fetchData } from '../../utils/helpers';

export const init = createAsyncThunk('goods/fetch', () => {
  return fetchData();
});

export interface ProductState {
  list: Product[];
  loading: boolean;
  error: string;
}

const initialState: ProductState = {
  list: [],
  loading: false,
  error: '',
};

const productSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Product[]>) => {
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = 'Error';
    });
  },
});

export const { set } = productSlice.actions;

export default productSlice.reducer;
