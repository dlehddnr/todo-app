import React from "react";
import ToDoScreen from "./ToDoScreen";
import { AppLoading } from "expo";

export default class extends React.Component {
  state = {
    newToDo: "",
    loadedToDos: false
  };

  controlNewToDo = text => {
    this.setState({
      newToDo: text
    });
  };

  loadToDos = () => {
    this.setState({ loadedToDos: true });
  };

  componentDidMount = () => {
    this.loadToDos();
  };

  render() {
    const { newToDo, loadedToDos } = this.state;

    if (loadedToDos) {
      return (
        <ToDoScreen
          newToDo={newToDo}
          controlNewToDo={this.controlNewToDo}
          loadedToDos={loadedToDos}
        />
      );
    } else {
      return <AppLoading />;
    }
  }
}
