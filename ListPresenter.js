import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import Layout from "./constants/Layout";
import { GREY_COLOR, CIRCLE_COLOR } from "./constants/Color";

const ToDoList = styled.ScrollView`
  width: ${Layout.width - 25};
  padding-horizontal: 15px;
`;

const Container = styled.View`
  width: 100%;
  border-bottom-color: ${GREY_COLOR};
  border-bottom-width: 0.1px;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  color: red;
  font-weight: 600;
  font-size: 20px;
  margin-vertical: 20px;
`;

const Circle = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border-color: ${props => (props.isCompleted ? GREY_COLOR : CIRCLE_COLOR)};
  border-width: 3px;
  margin-right: 20px;
`;

const ListPresenter = ({ isEditing, isCompleted, toggleComplete }) => (
  <ToDoList contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
    <Container>
      <TouchableOpacity onPress={toggleComplete}>
        <Circle isCompleted={isCompleted} />
      </TouchableOpacity>
      <Text>Hi</Text>
    </Container>
  </ToDoList>
);

ListPresenter.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

export default ListPresenter;
