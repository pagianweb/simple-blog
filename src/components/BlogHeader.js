import React from 'react';
import { useFetch } from '../hooks/useFetch';
import Loader from './Loader';

const BlogHeader = (props) => {

  let imageURL = props.imageURL;
  
  const { data, error } = useFetch('sb/v1/settings');
  
  if(error) return <div>Failed to load data.</div>
  if(!data) return <Loader />

  if (!imageURL) {
    imageURL = data[0].header_image.url;
  }

  return <div style={{background: `url(${imageURL})`, height: '60vh', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>;
};

export default BlogHeader;