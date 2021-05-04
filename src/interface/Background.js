/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/background.css';
import { IMAGES_COUNT } from '../constants';

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.timer = -1;
    this.state = { count: 0 };
    this.changeBg = this.changeBg.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.changeBg, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  changeBg() {
    this.setState((state) => ({ count: (state.count + 1) % IMAGES_COUNT }));
  }

  render() {
    const { images } = this.props;
    const { count } = this.state;
    return <img src={images[count]} className="background" alt="NICE" />;
  }
}

export default Background;
