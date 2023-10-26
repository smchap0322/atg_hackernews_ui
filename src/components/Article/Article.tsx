import React from 'react';
import './Article.css';

type ArticleProps = {
  title: string,
  url: string,
  author: string,
  commentCount: string,
  date: string
}

const Article = ({title, url, author, commentCount, date}: ArticleProps) => {
  return (
    <div className='article-box'>
      <h3 className='title'>
        <a href={ url }>{ title }</a>
      </h3>
      <div className='more-info'>
        <div className='author'>{ author }</div>
        <div className='comments'>{ commentCount + ' comments' }</div>
        <div className='date'>{ date }</div>
      </div>
    </div>
  );
}

export default Article;
