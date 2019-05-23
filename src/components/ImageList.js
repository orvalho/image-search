import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

export default({images}) => {
  const imageList = images.map(image => <ImageCard key={image.id} image={image}/>);
  return <div className="image-list">{imageList}</div>;
};
