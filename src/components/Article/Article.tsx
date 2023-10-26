import React from 'react';
import logo from '../../logo.svg';
import './Article.css';

type ArticleProps = {
  title: string,
  author: string,
  commentCount: string,
  date: string
}

const Article = ({title, author, commentCount, date}: ArticleProps) => {
  return (
    <div className="articleBox">
      <div className='title'>{ title }</div>
      <div className='moreInfo'>
        <div className='author'>{ author }</div>
        <div className='comments'>{ commentCount + ' comments' }</div>
        <div className='date'>{ date }</div>
      </div>
    </div>
  );
}

export default Article;
