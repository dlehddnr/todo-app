import React from "react";
import styled from "styled-components";
import { TINT_COLOR, CARD_COLOR } from "./constants/Color";
import Layout from "./constants/Layout";
import PropTypes from "prop-types";
import ListContainer from "./ListContainer";

const Container = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: 30px;
  margin-top: 50px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Card = styled.View`
  background-color: ${CARD_COLOR};
  flex: 1;
  width: ${Layout.width - 25};
  border-radius: 15px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
`;

const Input = styled.TextInput`
  padding: 20px;
  border-bottom-color: grey;
  border-bottom-width: 1px;
  font-size: 25px;
`;

const ToDoScreen = ({
  newToDo,
  controlNewToDo,
  addToDo,
  toDos,
  deleteToDo
}) => (
  <Container>
    <Title>Kawai To Do</Title>
    <Card>
      <Input
        placeholder="New To Do"
        value={newToDo}
        onChangeText={controlNewToDo}
        returnKeyType={"done"}
        onSubmitEditing={addToDo}
      />
      {Object.values(toDos).map(toDo => (
        <ListContainer key={toDo.id} {...toDo} deleteToDo={deleteToDo} />
      ))}
    </Card>
  </Container>
);

ToDoScreen.propTypes = {
  newToDo: PropTypes.string,
  controlNewToDo: PropTypes.func,
  addToDo: PropTypes.func,
  toDos: PropTypes.object,
  deleteToDo: PropTypes.func
};

export default ToDoScreen;
