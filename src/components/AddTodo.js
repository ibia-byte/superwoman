import React, { Component } from "react";

export class AddTodo extends Component {
  render() {
    return (
      // eslint-disable-next-line no-undef
      <form style={{ display: "flex" }}>
        <input
          type="submit"
          value="Add"
          className="btn"
          
        />
        <input
          type="submit"
          value="Update"
          className="btn"
          
        />
        <input
          type="submit"
          value="Delete"
          className="btn"

        />
      </form>
    );
  }
}

export default AddTodo;
