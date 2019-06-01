import React from "react";
import ToDoScreen from "./ToDoScreen";
import { AppLoading } from "expo";
import uuidv1 from "uuid/v1";

export default class extends React.Component {
  state = {
    newToDo: "",
    loadedToDos: false,
    toDos: {}
  };

  controlNewToDo = text => {
    this.setState({
      newToDo: text
    });
  };

  loadToDos = () => {
    this.setState({ loadedToDos: true });
  };

  addToDo = () => {
    const { newToDo } = this.state;
    if (newToDo !== "") {
      this.setState(prevState => {
        const ID = uuidv1();
        const newToDoObject = {
          [ID]: {
            id: ID,
            isCompleted: false,
            text: newToDo,
            createdAt: Date.now()
          }
        };
        const newState = {
          ...prevState,
          toDos: {
            ...prevState.toDos,
            newToDoObject
          },
          newToDo: ""
        };
        return { ...newState };
      });
    }
  };

  componentDidMount = () => {
    this.loadToDos();
  };

  render() {
    const { newToDo, loadedToDos, toDos } = this.state;
    if (loadedToDos) {
      return (
        <ToDoScreen
          newToDo={newToDo}
          controlNewToDo={this.controlNewToDo}
          addToDo={this.addToDo}
          loadedToDos={loadedToDos}
          toDos={toDos}
        />
      );
    } else {
      return <AppLoading />;
    }
  }
}
