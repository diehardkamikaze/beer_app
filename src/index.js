import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Catalog from './catalog.js'

fetch('https://api.punkapi.com/v2/beers')
.then((result) => result.json())
.then((responce) => {
  console.log(responce);
  ReactDOM.render(
    <Catalog items={responce}></Catalog>,
    document.getElementById('root')
  );
});

