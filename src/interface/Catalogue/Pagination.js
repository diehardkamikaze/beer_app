import React from 'react';
import '../../styles/pagination.css';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick({ target }) {
    // eslint-disable-next-line react/prop-types
    const { pagi, handlePagi } = this.props;
    if (target.id === 'prev' && pagi === 1) return;
    handlePagi(target.id);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { pagi } = this.props;
    return (
      <div className="pagination">
        <button onClick={this.onClick} id="prev" type="button">&lt;&lt;</button>
        <span>{pagi}</span>
        <button onClick={this.onClick} id="next" type="button">&gt;&gt;</button>
      </div>
    );
  }
}

export default Pagination;
