import React from "react";
import styled from "styled-components";
import { TINT_COLOR, CARD_COLOR } from "./constants/Color";
import Layout from "./constants/Layout";
import { Platform } from "react-native";

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
`;

const Input = styled.TextInput``;

const ToDoScreen = () => (
  <Container>
    <Title>Kawai To Do</Title>
    <Card>
      <Input placeholder="New To Do" />
    </Card>
  </Container>
);

export default ToDoScreen;
