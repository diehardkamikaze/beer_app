import React from 'react';
import ReactDOM from 'react-dom';
import Item from './item/item.js'

function Catalog({items}) {
  return (
    <ul>
      {items.map((item) => <Item item={item} />)}
    </ul>
  );
}

export default Catalog;