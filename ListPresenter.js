import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Layout from "./constants/Layout";

const ToDoList = styled.ScrollView`
  width: ${Layout.width - 50};
`;

const Container = styled.View`
  align-items: center;
  background-color: black;
  width: 100%;
`;

const Text = styled.Text`
  color: red;
`;

const ListPresenter = ({ isEditing }) => (
  <ToDoList contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
    <Container>
      <Text>Hi</Text>
    </Container>
  </ToDoList>
);

ListPresenter.propTypes = {
  isEditing: PropTypes.bool.isRequired
};

export default ListPresenter;
