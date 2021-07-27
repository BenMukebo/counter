import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  handleIncrement = (product) => {
    // console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        {/* {this.props.children} */}
        {/* <h4>{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ product: 1 })}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button
          // onClick={this.props.onDelete} // 1
          onClick={() => this.props.onDelete(this.props.counter.id)} // onDelete(this.props) // 2.2
          className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classesName = "badge m-2 badge-";
    classesName += this.state.value === 0 ? "warning" : "primary";
    return classesName;
  }

  formatCount() {
    const { value: counts } = this.state; // 9 Object Destructuring
    return counts === 0 ? "zero" : counts;
    // return counts == 0 ? <h1>zero</h1> : counts;
  }
}

export default Counter;
