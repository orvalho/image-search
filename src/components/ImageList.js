import './ImageList.css';
import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from './ImageCard';

const ImageList = ({images}) => {
  const imageList = images.map(image => <ImageCard key={image.id} image={image}/>);
  return <div className="image-list">{imageList}</div>;
};

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ImageList;