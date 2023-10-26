import React from 'react';
import ArticleList from './components/ArticleList/ArticleList';
import './App.css';

const App = () => {
  return (
    <>
      <div className='header'>
        <h1>Hackernews - Top 10 Stories</h1>
        <h2>ATG interview UI by Sara Chaparro</h2>
      </div>
      <ArticleList/>
    </>
  );
}

export default App;
