import React from 'react';

import { Article } from '../../types';
import './ProductList.css';
import ArticleCard from "./ProductCard"

type ArticleListProps = {
  categoryName?: string,
  articleCount?: number,
  articles: Article[]
}
export default function ArticleList({ categoryName, articleCount, articles } : ArticleListProps){
  return (
    <>
      <h1>
        {categoryName}
          <small> ({articleCount} Artikel)</small>
      </h1>
        <div className={'articles'}>
          {articles.map((article, i) => (
              <ArticleCard key={`${article.name}-${i}`} article={article} />
            )
          )}
      </div> 
    </>
  );
}
