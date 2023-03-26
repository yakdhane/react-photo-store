
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoStore from './PhotoStore';

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(response => {
      setPhotos(response.data.slice(0, 10));
    });
  }, []);

  return (
    <div className="App">
      <h1>Photo Store</h1>
      <PhotoStore photos={photos} />
    </div>
  );
};

export default App;
