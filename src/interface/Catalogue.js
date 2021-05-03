/* eslint-disable react/prop-types */
import React from 'react';
import Controls from './catalogue/Controls';
import ItemsList from './catalogue/ItemsList';
import Pagination from './catalogue/Pagination';
import { ON_PAGE } from '../constants';

class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    const { beerData } = this.props;
    this.state = { pagi: 1, searchQuery: '', sortBy: -1 };
    this.handlePagi = this.handlePagi.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.catalog = beerData; // изавиться, можно сделать лучше через render
  }

  handlePagi(id) {
    let changeTo = 1;
    if (id === 'prev') changeTo = -1;
    this.setState((prevState) => (
      {
        pagi: prevState.pagi + changeTo,
        searchQuery: prevState.searchQuery,
        sortBy: prevState.sortBy,
      }
    ));
  }

  handleSearch({ target }) {
    const { sortBy } = this.state;
    const { beerData } = this.props;
    this.catalog = beerData.filter((item) => item.name.match(target.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    if (sortBy !== -1) this.catalog.sort((a, b) => b[sortBy] - a[sortBy]);
    this.setState((prevState) => (
      {
        pagi: 1,
        searchQuery: target.value,
        sortBy: prevState.sortBy,
      }
    ));
  }

  handleSort(sortKey) {
    this.catalog.sort((a, b) => b[sortKey] - a[sortKey]);
    this.setState((prevState) => (
      {
        pagi: prevState.pagi,
        searchQuery: prevState.searchQuery,
        sortBy: sortKey,
      }));
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { pagi, searchQuery, sortBy } = this.state;
    const { modal } = this.props;
    return (
      <div className="catalogue">
        <Controls
          searchQuery={searchQuery}
          handleChange={this.handleSearch}
          handleClick={this.handleSort}
          sortBy={sortBy}
          modal={modal}
        />
        <ItemsList beers={this.catalog} offset={(pagi - 1) * ON_PAGE} />
        <Pagination pagi={pagi} handlePagi={this.handlePagi} />
      </div>
    );
  }
}

export default Catalogue;
