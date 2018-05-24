import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    input: '',
    fetched: {},
    reveal: false,
  };

  componentDidMount() {
    fetch(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
    )
      .then((res) => res.json())
      .then((fetched) => {
        this.setState({ fetched });
      })
      .catch((err) => {
        console.err(err);
      });
  }

  onInputChange = (event) => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };

  clearForm = () => {
    this.setState({ input: '' });
  };

  displayJoke = () => {
    return <div>Punchline: {this.state.fetched.punchline}</div>;
  };

  render() {
    return (
      <div>
        <h1>This dat types:</h1>
        <h1>Output: {this.state.input}</h1>
        <input
          type="text"
          placeholder="Input"
          value={this.state.input}
          onChange={this.onInputChange}
        />
        <button type="button" onClick={this.clearForm}>
          Clear
        </button>
        <h1>Some Jokes For You:</h1>
        <div>Setup: {this.state.fetched.setup}</div>
        <button
          type="button"
          onClick={() => this.setState({ reveal: !this.state.reveal })}
        >
          Toggle Punchline
        </button>
        {this.state.reveal && this.displayJoke()}
      </div>
    );
  }
}

export default UserInput;
