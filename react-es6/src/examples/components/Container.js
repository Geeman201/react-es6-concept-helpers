import React from 'react';

class Container extends React.Component {

  state = {
    value: ''
  };

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onResetValue = this.onResetValue.bind(this);
  }

  onInputChange(e) {
    this.setState({ value: e.target.value })
  }

  onResetValue() {
    this.setState({ value: ''});
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <Input value={value} onChange={this.onInputChange} />
        <Card value={value} onResetClick={this.onResetValue} />
      </div>
    )
  }
}

const Input = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} />
);

const Card = ({ value, onResetClick }) => (
  <div>
    <h2>{value}</h2>
    <button onClick={onResetClick}>Reset</button>
  </div>
);

export default Container;