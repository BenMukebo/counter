import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    // console.log("Event Handler Called", counterId); // 1.1 // 2.1
    // console.log("Event Handler Called", counterId.id); // 1.2 // 2.2
    const counter = this.state.counters.filter((c) => c.id !== counterId); // c.id !== counterId.id
    this.setState({ counters: counter });
  };

  handleReset = () => {
    const setCounter = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: setCounter });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.handleReset}
          className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            // onDelete={() => this.handleDelete(counter.id)} // 1.1
            // onDelete={() => this.handleDelete(counter)} // 1.2
            onDelete={this.handleDelete} // 2
            // value={counter.value}
            // id={counter.id}
            counter={counter}>
            {/* <h4>Counter # {counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
