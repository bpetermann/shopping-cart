import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { CartContextProvider } from './store/cart-context';
import { WishlistContextProvider } from './store/wishlist-context';

ReactDOM.render(
  <CartContextProvider>
    <WishlistContextProvider>
      <App />
    </WishlistContextProvider>
  </CartContextProvider>,
  document.getElementById('root')
);
