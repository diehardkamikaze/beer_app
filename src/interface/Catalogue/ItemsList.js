/* eslint-disable react/prop-types */
import React from 'react';
import MASK_IMG from '../../img/mask.png';
import { ON_PAGE } from '../../constants';

class ItemsList extends React.Component {
  render() {
    console.log(this.props);
    const items = new Array(ON_PAGE);
    const { beers, offset } = this.props;
    for (let i = 0; i < ON_PAGE; i += 1) {
      if (!beers[i + offset]) break;
      const item = beers[i + offset];
      items[i] = (
        <li key={item.id}>
          <img src={item.image_url ? item.image_url : MASK_IMG} alt="beer is nice" />
          <h2>{item.name}</h2>
          <p>{item.tagline}</p>
        </li>
      );
    }
    return (<ul className="itemslist">{items}</ul>);
  }
}

export default ItemsList;
