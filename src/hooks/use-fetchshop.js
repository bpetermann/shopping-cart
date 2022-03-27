import { useState, useCallback } from 'react';

const useFetchShop = () => {
  const [error, setError] = useState(null);
  const [storeItems, setStoreItems] = useState([]);
  const fetchStoreItems = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        'https://react-shopping-cart-fe673-default-rtdb.firebaseio.com/storeItems.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedStoreItems = [];

      for (const key in data) {
        loadedStoreItems.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
          amount: data[key].amount,
        });
      }

      setStoreItems(loadedStoreItems);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return {
    storeItems: storeItems,
    error: error,
    fetchStoreItems: fetchStoreItems,
  };
};

export default useFetchShop;
