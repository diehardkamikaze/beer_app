import React from 'react';
import Loader from './utils/Loader';
import Background from './interface/Background';
import Catalogue from './interface/Catalogue';
import RegistrationModal from './interface/Registration';
import { getResources, getData } from './utils/download_resources';

class App extends React.Component {
  constructor() {
    super();
    this.state = { isLoaded: false, modal: false };
    this.images = [];
    this.beerData = [];
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Promise.all(getResources(this.images).concat(getData(this.beerData)))
      .then(() => this.setState({ isLoaded: true, modal: false }));
  }

  openModal() {
    this.setState({ isLoaded: true, modal: true });
  }

  closeModal() {
    this.setState({ isLoaded: true, modal: false });
  }

  render() {
    const { isLoaded, modal } = this.state;
    if (isLoaded) {
      return (
        <div>
          <Background images={this.images} />
          <Catalogue modal={this.openModal} beerData={this.beerData} />
          { modal ? <RegistrationModal modal={this.closeModal} /> : '' }
        </div>
      );
    }
    return <Loader />;
  }
}

export default App;
