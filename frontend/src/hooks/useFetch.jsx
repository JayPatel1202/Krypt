import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_GIPHY_API;

function useFetch({ keyword }) {
  const [gifUrl, setGifUrl] = useState('');

  async function fetchGifs() {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
          .split(' ')
          .join('')}&limit=1`
      );
      const { data } = await response.json();
      // Verify the existance of nested object property
      setGifUrl(data[0]?.images?.downsized_medium?.url);
    } catch (err) {
      setGifUrl(
        'https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284'
      );
    }
  }

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
}

export default useFetch;
