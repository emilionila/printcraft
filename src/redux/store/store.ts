import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartSlice';
import favoriteReducer from '../reducers/favoriteSlice';
import productReducer from '../reducers/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
