import React, { useState, useEffect } from 'react';
import HNService from '../../services/HNService';
import loader from './loader.svg';
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
    const time = (pm ? hours - 12 : hours) + ':' + ('0' + minutes).slice(-2) + (pm ? 'pm' : 'am');
    return day + ' ' + time;
  }

  const renderArticleList = () => {
    // I don't love the wrapping div for the key tracking, but it is to avoid the console react error asking for a key prop.
    // I did want to add it to props passed to Article component.
    return articles.map((article) => 
      <div key={article.id}>
        <Article
          title={String(article.title)}
          url={String(article.url)}
          author={String(article.by)}
          commentCount={String(article.descendants)}
          date={getDateString(article.time)}
        />
      </div>
    )
  }

  //made this change to get a working compiles JS that didn't require a local asset for gist submission, but the local svg works if running this as a repo
  const renderLoader = () => {
    // return <img src={ loader } alt="Loading..." className='loader'/>
    return <img src='https://samherbert.net/svg-loaders/svg-loaders/grid.svg' alt='Loading...' className='loader'/>
  }

  return (
    <div className="article-list">
      { articles ? renderArticleList() : renderLoader()}
    </div>
  );
}

export default ArticleList;
