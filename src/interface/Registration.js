/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import '../styles/register.css';

class RegistrationModal extends React.Component {
  constructor(props) {
    super(props);
    this.onBgClick = this.onBgClick.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.state = {
      problemInName: false, problemInEmail: false, problemInDate: false, problemInPass: false,
    };
  }

  handleSumbit(event) {
    event.preventDefault();
    const newState = {};
    let counter = 0;
    Object.assign(newState, this.state);
    const {
      1: name, 2: email, 3: date, 4: pass,
    } = event.target;
    const { closeModal } = this.props;
    newState.problemInName = name.value.length === 0 && (counter += 1);
    newState.problemInPass = pass.value.length < 6 && (counter += 1);
    newState.problemInDate = !(/^[0-3]{1}[0-9]{1}\/[0-1]{1}[1-9]{1}\/[0-9]{4}$/.test(date.value)) && (counter += 1);
    newState.problemInEmail = !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.(com|ru)$/.test(email.value)) && (counter += 1);
    if (counter) this.setState(newState);
    else closeModal();
  }

  onBgClick({ target }) {
    const { closeModal } = this.props;
    if (target.className === 'regModal') closeModal();
  }

  render() {
    const { closeModal } = this.props;
    const {
      problemInName: pN, problemInDate: pD, problemInEmail: pE, problemInPass: pS,
    } = this.state;
    return (
      <div onClick={this.onBgClick} className="regModal">
        <form onSubmit={this.handleSumbit}>
          <button onClick={closeModal} type="button" className="close">X</button>
          <p>
            <label htmlFor="full_name">Full name: </label>
            {pN ? <span className="error">Enter your name!</span> : '' }
            <input type="text" name="full_name" id="full_name" />

          </p>
          <p>
            <label htmlFor="email">Email: </label>
            {pE ? <span className="error">Invalid email!</span> : '' }
            <input type="text" name="email" id="email" />
          </p>
          <p>
            <label htmlFor="bdate">Birth date: </label>
            {pD ? <span className="error">true format day/month/year : 07/03/1991 </span> : '' }
            <input type="bdate" name="bdate" id="bdate" />
          </p>
          <p>
            <label htmlFor="password">Password: </label>
            {pS ? <span className="error">length at least 6 characters</span> : '' }
            <input type="password" name="password" id="password" />
          </p>
          <button className="signup" type="submit">SIGN UP</button>
        </form>
      </div>
    );
  }
}

export default RegistrationModal;
