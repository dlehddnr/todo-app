import React from "react";
import styled from "styled-components";
import ListPresenter from "./ListPresenter";

export default class extends React.Component {
  state = {
    isEditing: false,
    isCompleted: false
  };

  toggleComplete = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      };
    });
  };

  render() {
    const { isEditing, isCompleted } = this.state;
    return (
      <ListPresenter
        isEditing={isEditing}
        isCompleted={isCompleted}
        toggleComplete={this.toggleComplete}
      />
    );
  }
}
