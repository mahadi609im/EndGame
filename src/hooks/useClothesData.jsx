import axios from 'axios';
import { useEffect, useState } from 'react';

const useClothesData = () => {
  const [clothesData, setClothesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fake delay add korar jonno
    setTimeout(() => {
      axios('/clothesData.json')
        .then(data => setClothesData(data.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  return { clothesData, loading, error };
};

export default useClothesData;
