/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

export interface FavoriteState {
  list: Product[];
}

const initialState: FavoriteState = {
  list: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Product>) => {
      try {
        const currentFavorites: Product[]
          = JSON.parse(localStorage.getItem('favorites') || '[]');

        const isItemInFavorites
          = currentFavorites.some(product => product.name
            === action.payload.name);

        if (isItemInFavorites) {
          const updatedFavorites
            = currentFavorites.filter(product => product.name
              !== action.payload.name);

          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
          state.list = updatedFavorites;

          return;
        }

        const updatedFavorites = [...currentFavorites, action.payload];

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        state.list = updatedFavorites;
      } catch (error) {
        throw new Error('Error updating favorites data');
      }
    },

    removeFavorite: (state, action: PayloadAction<Product>) => {
      try {
        const currentFavorites: Product[]
          = JSON.parse(localStorage.getItem('favorites') || '[]');

        const updatedFavorites
          = currentFavorites.filter(product => product.name
            !== action.payload.name);

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        state.list = updatedFavorites;
      } catch (error) {
        throw new Error('Error updating favorites data');
      }
    },

    clearFavorites: (state) => {
      state.list = [];
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
  clearFavorites,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
