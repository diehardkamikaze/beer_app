/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { SORT_PARAMS } from '../../constants';
import '../../styles/controls.css';

class Controls extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const {
      searchQuery, sortBy, handleChange, handleClick, modal,
    } = this.props;
    return (
      <div className="controls">
        { SORT_PARAMS.map((item, key) => (
          <button
            key={key}
            onClick={() => handleClick(item)}
            type="button"
            className={`sortby${item === sortBy ? ' active' : ''}`}
          >
            {item.toUpperCase()}
          </button>
        ))}
        <input type="text" value={searchQuery} onChange={handleChange} placeholder="Поиск по названию" />
        <a href="#reg" onClick={modal} className="register">Sign up</a>
      </div>
    );
  }
}

export default Controls;
