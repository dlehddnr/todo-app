import React from "react";
import { AsyncStorage } from "react-native";
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

  loadToDos = async () => {
    try {
      const toDos = await AsyncStorage.getItem("toDos");
      const parsedToDos = JSON.parse(toDos);
      this.setState({ loadedToDos: true, toDos: parsedToDos });
    } catch (error) {
      console.log(error);
    }
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
          newToDo: "",
          toDos: {
            ...prevState.toDos,
            ...newToDoObject
          }
        };
        this.saveToDos(newState.toDos);
        return { ...newState };
      });
    }
  };

  deleteToDo = id => {
    this.setState(prevState => {
      const toDos = prevState.toDos;
      delete toDos[id];
      const newState = {
        ...prevState,
        ...toDos
      };
      this.saveToDos(newState.toDos);
      return { ...newState };
    });
  };

  uncompleteToDo = id => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: {
            ...prevState.toDos[id],
            isCompleted: false
          }
        }
      };
      this.saveToDos(newState.toDos);
      return { ...newState };
    });
  };

  completeToDo = id => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: {
            ...prevState.toDos[id],
            isCompleted: true
          }
        }
      };
      this.saveToDos(newState.toDos);
      return { ...newState };
    });
  };

  updateToDo = (id, text) => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: {
            ...prevState.toDos[id],
            text
          }
        }
      };
      this.saveToDos(newState.toDos);
      return { ...newState };
    });
  };

  saveToDos = newToDos => {
    const saveToDos = AsyncStorage.setItem("toDos", JSON.stringify(newToDos));
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
          deleteToDo={this.deleteToDo}
          completeToDo={this.completeToDo}
          uncompleteToDo={this.uncompleteToDo}
          updateToDo={this.updateToDo}
          loadedToDos={loadedToDos}
          toDos={toDos}
        />
      );
    } else {
      return <AppLoading />;
    }
  }
}
