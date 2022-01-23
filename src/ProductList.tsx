import React from 'react';

import { Category } from './types';
import './ProductList.css';
import Footer from './Footer';
import ArticleCard from './ProductCard';
import Header from './Header';

type State = {
  categories: Category[];
};



class ArticleList extends React.Component {
  state: State = {
    categories: [],
  };

  componentDidMount() {
    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/graphql');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({
      query: `{
        categories(ids: "156126", locale: de_DE) {
          name
          articleCount
          childrenCategories {
            name
            urlPath
          }
          categoryArticles(first: 50) {
            articles {
              name
              variantName
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`,
    }));

    xhr.onload = () => {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.response);

        this.setState({ categories: response.data.categories });
      }
    }
  }

  render() {
    return (
      <div className={'page'}>
        <Header />

        <div className={'sidebar'}>
          <h3>Kategorien</h3>
          {this.state.categories.length ? (
            <ul>
              {this.state.categories[0].childrenCategories.map(
                ({ name, urlPath }) => {
                  return (
                    <li>
                      <a href={`/${urlPath}`}>{name}</a>
                    </li>
                  );
                }
              )}
            </ul>
          ) : (
            'Loading...'
          )}
        </div>

        <div className={'content'}>
          {this.state.categories.length ? (
            <h1>
              {this.state.categories[0].name}
              <small> ({this.state.categories[0].articleCount})</small>
            </h1>
          ) : (
            'Loading...'
          )}
          <div className={'articles'}>
            {this.state.categories.map(category =>(
              category.categoryArticles?.articles.map(article=><ArticleCard article={article} />
            )))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

var PLP = () => {
  return <ArticleList />;
};

export default PLP;
