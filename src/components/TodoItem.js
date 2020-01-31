import React, { Component } from "react";
import PropTypes from "prop-types";
export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "orange",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    };
  };
  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" /> {""}
          {this.props.todo.title}
        </p>
      </div>
    );
  }

  //propTypes
  // eslint-disable-next-line react/no-typos
  TodoItem;
  PropTypes = {
    todo: PropTypes.object.isRequired
  };
}

export default TodoItem;
