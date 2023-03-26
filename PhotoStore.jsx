
import React from 'react';
import Photo from './Photo';

const PhotoStore = ({ photos }) => {
  return (
    <div className="photo-store">
      {photos.map(photo => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoStore;
