import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    input: '',
  };

  onInputChange = (event) => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };

  clearForm = () => {
    this.setState ({ input: ''})
  }

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
        <button type='button' onClick={this.clearForm}>Clear</button>
      </div>
    );
  }
}

export default UserInput;
