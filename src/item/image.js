import React from 'react';
import ReactDOM from 'react-dom';

function Image({url}) {
  console.log(url);
  return (
    <img src={url} alt="blabla" />
  );
}

export default Image;