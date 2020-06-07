import {useState, useEffect} from 'react';

const useInitialState = (API) => {
  // const API = 'http://localhost:3000/initialState';

  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data))
  }, []);

  return videos;
}

export default useInitialState;