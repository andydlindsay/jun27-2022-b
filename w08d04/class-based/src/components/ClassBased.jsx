import React from 'react';

class ClassBased extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      username: 'jstamos',
      newKey: null
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    // DON'T DO THIS!! vvv
    // this.state.counter += 1;

    this.setState({ counter: this.state.counter + 1, newKey: 'some value' });
  }

  render() {
    const {secretMessage} = this.props;
    return (
      <div>
        <h2>ClassBased Component</h2>
        <h2>Message: {secretMessage}</h2>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={() => this.clickHandler()}>Click me!!!</button>
      </div>
    );
  }
}

export default ClassBased;
