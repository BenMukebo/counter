import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          // onClick={() => this.handleReset(this.state.counters)} // (this.props.counter)
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
            // onDelete={() => this.handleDelete(counter.id)} // 1.1
            // onDelete={() => this.handleDelete(counter)} // 1.2
            // onDelete={this.props.onDelete} // 2
            onDelete={onDelete}
            // onIncrement={() => this.props.onIncrement(counter)} //99999999
            // onIncrement={this.props.onIncrement} //0000000
            onIncrement={onIncrement} //0000000
            counter={counter}>
            {/* <h4>Counter # {counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
