import React from "react";
import ListPresenter from "./ListPresenter";

export default class extends React.Component {
  state = {
    isEditing: false,
    isCompleted: false,
    toDoValue: ""
  };

  toggleComplete = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      };
    });
  };

  startEditing = () => {
    const { text } = this.props;
    this.setState({
      isEditing: true,
      toDoValue: text
    });
  };

  finishEditing = () => {
    this.setState({
      isEditing: false
    });
  };

  controlInput = text => {
    this.setState({ toDoValue: text });
  };

  render() {
    const { isEditing, isCompleted, toDoValue } = this.state;
    const { text } = this.props;
    return (
      <ListPresenter
        isEditing={isEditing}
        isCompleted={isCompleted}
        toggleComplete={this.toggleComplete}
        startEditing={this.startEditing}
        finishEditing={this.finishEditing}
        controlInput={this.controlInput}
        toDoValue={toDoValue}
        text={text}
      />
    );
  }
}
