import React, { useState, useEffect } from 'react';
import HNService from '../../services/HNService';
import Article from '../Article/Article';
import './ArticleList.css';

let articleInfoInitial: any[];

const ArticleList = () => {
  const numOfArticles = 10;
  const [articles, setArticles] = useState(articleInfoInitial);

  useEffect(() => {
    HNService.getTopStories(numOfArticles)
      .then(articles => setArticles(articles))
      .catch(error => console.error(error));
  }, []);

  const getDateString = (articleTime: number) => {
    const date = new Date(articleTime * 1000);
    const day = [date.getMonth(), date.getDay(), date.getFullYear()].join('.');
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const pm = hours > 12;
    const time = (pm ? hours - 12 : hours) + ':' + ('0' + minutes).slice(-2) + ' '+ (pm ? 'PM' : 'AM');
    return day + ' ' + time;
  }

  const renderArticleList = () => {
    return articles.map((article) => 
      <Article 
        title={String(article.title)}
        author={String(article.by)}
        commentCount={String(article.descendants)}
        date={getDateString(article.time)}
      />
    )
  }

  return (
    <div className="App">
      { articles ? renderArticleList() : 'Loading...'}
    </div>
  );
}

export default ArticleList;
