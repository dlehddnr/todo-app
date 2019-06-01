import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import Layout from "./constants/Layout";
import { COMPLETE_COLOR, UNCOMPLETE_COLOR } from "./constants/Color";

const ToDoList = styled.ScrollView`
  width: ${Layout.width - 25};
  padding-horizontal: 15px;
`;

const Container = styled.View`
  width: 100%;
  border-bottom-color: grey;
  border-bottom-width: 0.3px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.Text`
  color: ${props => (props.isCompleted ? COMPLETE_COLOR : "#353535")};
  font-weight: 600;
  font-size: 20px;
  margin-vertical: 20px;
  text-decoration-line: ${props =>
    props.isCompleted ? "line-through" : "none"};
`;

const Circle = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border-color: ${props =>
    props.isCompleted ? COMPLETE_COLOR : UNCOMPLETE_COLOR};
  border-width: 3px;
  margin-right: 20px;
`;

const Column = styled.View`
  flex-direction: row;
  align-items: center;
  width: 50%;
`;

const Actions = styled.View`
  flex-direction: row;
`;

const ActionContainer = styled.View`
  margin: 10px;
`;

const ActionText = styled.Text``;

const Input = styled.TextInput`
  color: ${props => (props.isCompleted ? COMPLETE_COLOR : "#353535")};
  font-weight: 600;
  font-size: 20px;
  text-decoration-line: ${props =>
    props.isCompleted ? "line-through" : "none"};
  margin-vertical: 15px;
  padding-bottom: 5px;
  width: 50%;
`;

const ListPresenter = ({
  isEditing,
  isCompleted,
  toggleComplete,
  startEditing,
  finishEditing,
  text,
  toDoValue,
  controlInput,
  key,
  id,
  createdAt
}) => (
  <ToDoList contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
    <Container>
      <Column>
        <TouchableOpacity onPress={toggleComplete}>
          <Circle isCompleted={isCompleted} />
        </TouchableOpacity>
        {isEditing ? (
          <Input
            value={toDoValue}
            multiline={true}
            onChangeText={controlInput}
            returnKeyType={"done"}
            onBlut={finishEditing}
          />
        ) : (
          <Text isCompleted={isCompleted}>{text}</Text>
        )}
      </Column>
      {isEditing ? (
        <Actions>
          <TouchableOpacity onPressOut={finishEditing}>
            <ActionContainer>
              <ActionText>✅</ActionText>
            </ActionContainer>
          </TouchableOpacity>
        </Actions>
      ) : (
        <Actions>
          <TouchableOpacity onPressOut={startEditing}>
            <ActionContainer>
              <ActionText>✏️</ActionText>
            </ActionContainer>
          </TouchableOpacity>
          <TouchableOpacity>
            <ActionContainer>
              <ActionText>❌</ActionText>
            </ActionContainer>
          </TouchableOpacity>
        </Actions>
      )}
    </Container>
  </ToDoList>
);

ListPresenter.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  finishEditing: PropTypes.func.isRequired,
  toDoValue: PropTypes.string
};

export default ListPresenter;
