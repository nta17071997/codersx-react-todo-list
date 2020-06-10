import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        { title: "Go to market", isComplete: true },
        { title: "Buy food", isComplete: true },
        { title: "Make dinner", isComplete: false },
      ],
    };
  }
  onItemClicked = (item) => {
    const { todoItems } = this.state;
    const isComplete = item.isComplete;
    const index = todoItems.indexOf(item);
    this.setState({
      todoItems: [
        ...todoItems.slice(0, index), //tu vi tri 0 den index
        {
          ...item,
          isComplete: !isComplete,
        },
        ...todoItems.slice(index + 1), //k laay index: tu index => heet
      ],
    });
  };
  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        <h1>TODO - LIST</h1>
        {todoItems.length > 0 &&
          todoItems.map((item, index) => {
            return (
              <TodoItem
                key={index}
                item={item}
                onClick={() => this.onItemClicked(item)}
              />
            );
          })}
      </div>
    );
  }
}

export default App;
