import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'

const reducer = () => (
  {message:"Hello World from Redux!"}
  )

const store =createStore(reducer)

const HelloComponent = ({helloProperty}) => <h1>{helloProperty}</h1>

const HelloContainer =connect(
  state => ({helloProperty: state.message})
)(HelloComponent)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HelloContainer/>
      </div>
    </Provider>
  );
}

export default App;
