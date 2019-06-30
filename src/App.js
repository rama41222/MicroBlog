import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Post, PostForm, Header } from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <PostForm/>
      <Post/>
    </div>
  );
}

export default App;
