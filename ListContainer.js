import React from "react";
import ListPresenter from "./ListPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      toDoValue: props.text
    };
  }

  toggleComplete = () => {
    const {
      isCompleted,
      completeToDo,
      uncompleteToDo,
      updateToDo,
      id
    } = this.props;
    if (isCompleted) {
      uncompleteToDo(id);
    } else {
      completeToDo(id);
    }
  };

  startEditing = () => {
    this.setState({
      isEditing: true
    });
  };

  finishEditing = () => {
    const { toDoValue } = this.state;
    const { id, updateToDo } = this.props;
    updateToDo(id, toDoValue);
    this.setState({
      isEditing: false
    });
  };

  controlInput = text => {
    this.setState({ toDoValue: text });
  };

  render() {
    const { isEditing, toDoValue } = this.state;
    const {
      text,
      deleteToDo,
      id,
      completeToDo,
      uncompleteToDo,
      isCompleted,
      updateToDo
    } = this.props;
    return (
      <ListPresenter
        isEditing={isEditing}
        isCompleted={isCompleted}
        toggleComplete={this.toggleComplete}
        startEditing={this.startEditing}
        finishEditing={this.finishEditing}
        controlInput={this.controlInput}
        deleteToDo={deleteToDo}
        completeToDo={completeToDo}
        uncompleteToDo={uncompleteToDo}
        updateToDo={updateToDo}
        toDoValue={toDoValue}
        text={text}
        id={id}
      />
    );
  }
}
