import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevPros, prevState) {
    console.log("prevPros", prevPros);
    console.log("prevState", prevState);
    if (prevPros.counter.value !== this.props.counter.value) {
      // Do an Ajax call and get new date from the server
      // console.log("we can deside weither we shoul make Ajax call to get data base on changese in prop and state object");
    }
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        {/* {this.props.children} */}
        {/* <h4>{this.props.id}</h4> */}

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          // onClick={this.props.onIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm">
          Increment
        </button>

        <button
          // onClick={this.props.onDelete}
          onClick={() => this.props.onDelete(this.props.counter.id)} // onDelete(this.props)
          className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classesName = "badge m-2 badge-";
    classesName += this.props.counter.value === 0 ? "warning" : "primary";
    return classesName;
  }

  formatCount() {
    const { value: counts } = this.props.counter; // 9 Object Destructuring
    return counts === 0 ? "zero" : counts;
    // return counts == 0 ? <h1>zero</h1> : counts;
  }
}

export default Counter;
