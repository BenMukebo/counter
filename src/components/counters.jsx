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
    const newComp = this.state.counters.filter((c) => c.id !== counterId); // c.id !== counterId.id
    this.setState({ counters: newComp });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            // onDelete={() => this.handleDelete(counter.id)} // 1.1
            // onDelete={() => this.handleDelete(counter)} // 1.2
            onDelete={this.handleDelete} // 2
            value={counter.value}
            id={counter.id}>
            {/* <h4>Counter # {counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
