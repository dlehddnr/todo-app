import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import styled from "styled-components";
import { BG_COLOR } from "./constants/Color";
import ToDoContainer from "./ToDoContainer";

const Container = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
  align-items: center;
`;

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <>
          <Container>
            <StatusBar barStyle="light-content" />
            <ToDoContainer />
          </Container>
        </>
      );
    } else {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    }
  }
}
