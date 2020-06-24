import React from 'react';
import { connect } from 'react-redux'
import {increment, decrement} from "./actions";
import './App.css';


function App(props) {

function handleIncrement() {
    props.incrementCount(1)
}

function handleDecrement() {
    props.decrementCount(1)
}

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Counter: {props.counter}</h1>

          <div style={{display: 'inline-block'}}>
            <button className="ui green button"
                    onClick={() => handleIncrement()}
            >
                Increment
            </button>
          </div>

          <div style={{display: 'inline-block'}}>
            <button className="ui red button"
                    onClick={() => handleDecrement()}
            >Decrement</button>
          </div>

        </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    counter: state.counterReducer
  }
};

const mapDispatchToProps = (dispatch) => {
    return{
        incrementCount: number => dispatch(increment(number)),
        decrementCount: number => dispatch(decrement(number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
