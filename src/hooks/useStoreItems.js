import { useState, useEffect, useContext } from 'react';
import WishlistContext from '../store/wishlist-context';
import CartContext from '../store/cart-context';

const useStoreItems = (url, options) => {
  const [error, setError] = useState(null);
  const [storeItems, setStoreItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getStoredCartItems, showShoppingCart } = useContext(CartContext);
  const { getStoredWishlistItems, showWishlist } = useContext(WishlistContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Something went wrong, please try again');
        }
        const data = await response.json();

        setStoreItems(data);
        setIsLoading(false);
        getStoredWishlistItems(data);
        getStoredCartItems(data);
      } catch (error) {
        setError(error.message || 'Something went wrong, please try again');
        setIsLoading(false);
      }
    };
    fetchData();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { storeItems, isLoading, error, showShoppingCart, showWishlist };
};

export default useStoreItems;
