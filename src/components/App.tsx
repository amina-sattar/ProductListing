import React, { useEffect, useState} from 'react';

import { Category } from '../types';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';
import Box from '@mui/material/Box';
import ProductList from './productList/ProductList';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorAlert from './ErrorAlert'
const drawerWidth = 240;

const App = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    setIsLoading(true)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', '/graphql');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(
      JSON.stringify({
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
      })
    );

    xhr.onload = () => {
      setIsLoading(false)
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        setCategories(response.data.categories);
      } else {
        setError(xhr.responseText)
      }
    };
    xhr.onerror = () => {
      setError("Something went wrong. Please check your netwrok conectivity and try again.")
    }
  }, []);

const defaultData = {
  name: '',
  articleCount: undefined,
  childrenCategories: [],
  categoryArticles: {articles: []}

}
const { childrenCategories, name, articleCount, categoryArticles} = categories.length ? categories[0] : defaultData
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: "100vh" }}>
      <Header />
      <SideBar categories={childrenCategories} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 4,
          pt: 10,
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <ErrorAlert showAlert={error ? true : false} errorMessage={error}/>
        {isLoading && <CircularProgress size={50} sx={{color: "home24.main", position:"absolute", top: '10%', left:"50%"}}/>}
        {!isLoading && 
        <ProductList 
          categoryName={name} 
          articleCount={articleCount}
          articles={categoryArticles?.articles}
        />}
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
