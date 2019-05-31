import React from "react";
import styled from "styled-components";
import ListPresenter from "./ListPresenter";

export default class extends React.Component {
  state = {
    isEditing: false
  };

  render() {
    const { isEditing } = this.state;
    return <ListPresenter isEditing={isEditing} />;
  }
}
