import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './redux/store/store';

export const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
