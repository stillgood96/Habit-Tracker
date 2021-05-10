import React, { Component } from "react";

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    //this.inputRef.current.value = "";
    this.formRef.current.reset();
  };
  render() {
    return (
      <form ref={this.formRef} onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="습관입력"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
