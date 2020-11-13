import React, { Component } from "react";

// CSS
import "./Formulario.css";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.props.callback(name, value);
  }

  render() {
    const { type, value, name } = this.props;
    return (
      <input
        className="Formulario"
        type={type}
        value={value}
        name={name}
        onChange={this.handleChange}
      />
    );
  }
}

export default Formulario;