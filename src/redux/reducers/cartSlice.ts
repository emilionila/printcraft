/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartProduct, Product } from '../../types/product';

export interface CartState {
  list: CartProduct[],
}

const initialState: CartState = {
  list: JSON.parse(localStorage.getItem('cart') || '[]'),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      try {
        const currentCart: CartProduct[]
          = JSON.parse(localStorage.getItem('cart') || '[]');

        const isItemInCart = currentCart
          .some(product => product.name === action.payload.name);

        if (isItemInCart) {
          const updatedCart = currentCart
            .filter(product => product.name !== action.payload.name);

          localStorage.setItem('cart', JSON.stringify(updatedCart));
          state.list = updatedCart;

          return;
        }

        const itemToAdd = { ...action.payload, quantity: 1 };

        const updatedCart = [...currentCart, itemToAdd];

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        state.list = updatedCart;
      } catch (error) {
        throw new Error('Error updating cart data');
      }
    },

    removeProduct: (state, action: PayloadAction<Product>) => {
      try {
        const currentCart: CartProduct[]
          = JSON.parse(localStorage.getItem('cart') || '[]');

        const updatedCart = currentCart
          .filter(product => product.name !== action.payload.name);

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        state.list = updatedCart;
      } catch (error) {
        throw new Error('Error removing cart data');
      }
    },

    plusOne: (state, action: PayloadAction<Product>) => {
      try {
        const currentCart: CartProduct[]
          = JSON.parse(localStorage.getItem('cart') || '[]');

        const isItemInCart = currentCart
          .find(product => product.name === action.payload.name);

        if (!isItemInCart) {
          throw new Error('item doesn`t exist');
        }

        const newQuantity = isItemInCart?.quantity
          ? isItemInCart?.quantity + 1
          : 1;

        if (isItemInCart) {
          const updatedCart = currentCart.map(product => {
            return product.name === isItemInCart.name
              ? { ...product, quantity: newQuantity }
              : { ...product };
          });

          localStorage.setItem('cart', JSON.stringify(updatedCart));
          state.list = updatedCart;
        }
      } catch (error) {
        throw new Error('Error updating cart data');
      }
    },

    minusOne: (state, action: PayloadAction<Product>) => {
      try {
        const currentCart: CartProduct[]
          = JSON.parse(localStorage.getItem('cart') || '[]');

        const isItemInCart = currentCart
          .find(product => product.name === action.payload.name);

        if (!isItemInCart) {
          throw new Error('item doesn`t exist');
        }

        if (isItemInCart) {
          const updatedCart = currentCart.map(product => {
            return product.name === isItemInCart.name
              ? { ...product, quantity: product.quantity - 1 }
              : { ...product };
          });

          localStorage.setItem('cart', JSON.stringify(updatedCart));
          state.list = updatedCart;
        }
      } catch (error) {
        throw new Error('Error updating cart data');
      }
    },

    clearCart: (state) => {
      state.list = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  removeProduct,
  clearCart,
  plusOne,
  minusOne,
} = cartSlice.actions;

export default cartSlice.reducer;
