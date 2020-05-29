import React from 'react';
//import logo from './logo.svg';
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
import BookContainer from './Components/BookContainer'

function App() {
  return (
    <Provider store = {store}>
        <div className="App">
      <BookContainer/>
    </div>
    </Provider>
  );
}

export default App;
