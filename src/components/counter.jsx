import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };
  render() {
    // let classesName = this.getBadgeClasses();
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classesName = "badge m-2 badge-";
    classesName += this.state.count === 0 ? "warning" : "primary";
    return classesName;
  }

  formatCount() {
    const { count: counts } = this.state; // 9 Object Destructuring
    return counts === 0 ? "zero" : counts;
    // return counts == 0 ? <h1>zero</h1> : counts;
  }
}

export default Counter;
