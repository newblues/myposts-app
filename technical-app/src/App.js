import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import messages from './reducers/messages.reducer';
import filter from './reducers/filter.reducer';

import HomePage from './components/HomePage';
import Header from './components/Header';

const store = createStore(combineReducers({ messages, filter }));

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
