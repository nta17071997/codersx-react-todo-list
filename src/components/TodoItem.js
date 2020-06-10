import React, { Component } from "react";
import correct from "../images/correct.svg";
import success from "../images/success.svg";

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    return (
      <div className="item">
        <img
          onClick={onClick}
          alt=""
          src={item.isComplete === true ? correct : success}
        />
        <p className={item.isComplete === true ? "isComplete" : ""}>
          {item.title}
        </p>
      </div>
    );
  }
}

export default TodoItem;
