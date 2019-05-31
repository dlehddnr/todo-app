import React from "react";
import ToDoScreen from "./ToDoScreen";

export default class extends React.Component {
  state = {
    newToDo: ""
  };

  controlNewToDo = text => {
    this.setState({
      newToDo: text
    });
  };

  render() {
    const { newToDo } = this.state;
    return (
      <ToDoScreen newToDo={newToDo} controlNewToDo={this.controlNewToDo} />
    );
  }
}
