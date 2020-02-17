import React from 'react';
import Odd from './js/Odd'
import Even from './js/Even'
import './style.css'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 500);
  }

  render() {
    console.log('render');

    return (
      <React.Fragment>
        <div> odd numbers: </div>
        <Odd state={this.state.counter} />
        <div> even numbers:</div>
        <Even state={this.state.counter} />
      </React.Fragment>
    );
  }
}

export default Clock;
