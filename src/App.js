import React from 'react';
import {  Provider } from 'react-redux';
import './App.css';
import { Post, PostForm, Header } from './components';
import store from './store/createStore';

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Header/>
              <PostForm/>
              <Post/>
          </div>
      </Provider>
   
  );
}

export default App;
