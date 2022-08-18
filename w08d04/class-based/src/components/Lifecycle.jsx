import React from 'react';

class Lifecycle extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      interval: null
    };
  }

  // useEffect(() => {}, []) runs when the component first mounts (only once)
  // fetch data, set up an interval, connect to a websocket server
  componentDidMount() {
    console.log('the component has mounted to the DOM');

    const interval = setInterval(() => {
      console.log('the interval has fired');
    }, 500);

    this.setState({ interval });
  }

  // useEffect(() => {}, [props.whatever]);
  // called every time state or props change
  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.username !== this.props.username) {
    //   // username has changed
    // }
    console.log('the component has updated');
  }

  // fires only one time right before the component gets removed from the DOM
  // cleanup! sever socket connections, stop intervals/timers
  // useEffect(() => returns () => {}, []);
  componentWillUnmount() {
    console.log('the component is about to be removed from the DOM');

    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <h2>Lifecycle!!!</h2>
        <label>Username:</label>
        <input 
          value={this.state.username}
          onChange={(event) => this.setState({ username: event.target.value })}
        />
      </div>
    );
  }
}

export default Lifecycle;
