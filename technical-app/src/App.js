import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import MainScreen from './components/MainScreen';
import messages from './reducers/messages.reducer';

const store = createStore(combineReducers({ messages }));

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <MainScreen />
      </div>
    </Provider>
  );
}

export default App;
