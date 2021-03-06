import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor (props) {
    super(props);
    console.log('App - Constructor');
    // this.state = this.props.something // never this.setState()
    // console.log('App - constructor', this.props);
  }

  componentDidMount(){
    // Ajax call to get data from the server eg: this.setState({ movies })
    console.log('App - Mounted');
  }

  handleReset = () => {
    const setCounter = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: setCounter });
  };
  
  handleIncrement = (count) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(count);
    counters[index] = { ...count };
    counters[index].value++;
    // console.log(this.state.counters[index]); // take the value of state.counters
    // console.log(counters[index]); // take the value of count
    
    this.setState({ counters });
  };
  handleDecrement = (count) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(count);
    counters[index].value --;
    this.setState({counters});
  };
  
  handleDelete = (counterId) => {
    // console.log(this.state.counters.indexOf(counterId));
    // console.log("Event Handler Called", counterId); // 1.1 // 2.1
    // console.log("Event Handler Called", counterId.id); // 1.2 // 2.2
    const counter = this.state.counters.filter((c) => c.id !== counterId); // c.id !== counterId.id
    this.setState({ counters: counter });
  };
  
  render() { 
    console.log('App - Rendered');

    return ( 
      <React.Fragment>
        <Navbar 
        totalCounters={this.state.counters.filter(l => l.value > 0).length}
         /> 
         
        <main className='container'>
          <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;


