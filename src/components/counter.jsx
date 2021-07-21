import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>; // null

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    ); //9-Conditional Rendering
  }
  render() {
    // let classesName = this.getBadgeClasses();
    return (
      <div>
        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button> */}

        {/* 9-An other technic for Conditional Rendering */}
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }

  //   getBadgeClasses() {
  //     let classesName = "badge m-2 badge-";
  //     classesName += this.state.count === 0 ? "warning" : "primary";
  //     return classesName;
  //   }

  //   formatCount() {
  //     const { count: counts } = this.state; // 9 Object Destructuring
  //     return counts === 0 ? "zero" : counts;
  //     // return counts == 0 ? <h1>zero</h1> : counts;
  //   }
}

export default Counter;
