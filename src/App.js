import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import tick from "./images/tick.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      // todoItems: [
      //   { title: "Go to market", isComplete: true },
      //   { title: "Buy food", isComplete: true },
      //   { title: "Make dinner", isComplete: false },
      // ],
      todoItems: localStorage.getItem("todoItem") ? JSON.parse(localStorage.getItem("todoItem")) : []
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
  onKeyUp = (e) => {
    if (e.keyCode === 13) {
      let value = e.target.value;
      if (!value) {
        return;
      }
      value = value.trim(); //xoa khoang cach o dau va o cuoi
      if (!value) {
        return;
      }
      this.setState({
        newItem: "",
        todoItems: [
          {
            title: value,
            isComplete: false,
          },
          ...this.state.todoItems,
        ],
      });
     
    }
    
  };
  onChange = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  };
  handleClickedComplete = (todoItems) =>{
    const todoAllCompleted = todoItems.map((todo) => {
      todo.isComplete = true
      return todo;
    })
    this.setState({
      todoItems: todoAllCompleted
    });
  }
  render() {
    const { todoItems, newItem } = this.state;
    localStorage.setItem("todoItem", JSON.stringify(todoItems))
    return (
      <div className="App">
        <h1>TODO - LIST</h1>
        <div className="Header">
          <img alt="" src={tick} onClick={() => this.handleClickedComplete(todoItems)} />
          <input
            type="text"
            placeholder="Add a new todo"
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
        {todoItems &&
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
