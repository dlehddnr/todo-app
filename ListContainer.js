import React from "react";
import ListPresenter from "./ListPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isCompleted: false,
      toDoValue: props.text
    };
  }

  toggleComplete = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      };
    });
  };

  startEditing = () => {
    this.setState({
      isEditing: true
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
    const { isEditing, toDoValue, isCompleted } = this.state;
    const { text, deleteToDo, id } = this.props;
    return (
      <ListPresenter
        isEditing={isEditing}
        isCompleted={isCompleted}
        toggleComplete={this.toggleComplete}
        startEditing={this.startEditing}
        finishEditing={this.finishEditing}
        controlInput={this.controlInput}
        deleteToDo={deleteToDo}
        toDoValue={toDoValue}
        text={text}
        id={id}
      />
    );
  }
}
