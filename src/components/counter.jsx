import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <span style={{ fontSize: 20 }} className="badge badge-primary m-2">
          {this.state.count}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count: counts } = this.state; // 9 Object Destructuring
    return counts === 0 ? "zero" : counts;
    // return counts == 0 ? <h1>zero</h1> : counts;
  }
}

export default Counter;
