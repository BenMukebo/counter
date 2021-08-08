import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");

    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;
    return (
      <div>
        <button
          // onClick={() => this.handleReset()} or onClick={this.handleReset}
          // onClick={() => this.props.onReset()}
          // onClick={this.props.onReset}
          onClick={onReset}
          className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        {/* {this.props.counters.map((counter) => ( */}
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            // onDelete={() => this.handleDelete(counter.id)}  // (counter)
            onDelete={onDelete}
            // onIncrement={() => this.props.onIncrement(counter)}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
