import React from 'react';
import ReactDOM from 'react-dom';
import Image from './image.js'

function Item({item}) {
  return (
    <li>
      <p>{item.name}</p>
      {item.tagline}
      <Image url={item.image_url} />
    </li>
  );
}

export default Item;